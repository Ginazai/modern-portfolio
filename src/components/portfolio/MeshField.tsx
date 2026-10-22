import { useEffect, useMemo, useRef, type RefObject } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { mulberry32 } from '@/lib/prng';
import type { Palette } from '@/lib/palette';

/**
 * A distributed system as a living object: nodes on a jittered sphere, linked to
 * their nearest neighbours, with packets hopping node to node along the links.
 * All per-frame work writes to typed arrays; nothing touches React state.
 */

const NODE_COUNT = 118;
const RADIUS = 2.15;
const PACKET_COUNT = 18;

function buildGraph() {
  const rand = mulberry32(11);
  const golden = Math.PI * (3 - Math.sqrt(5));
  const points: THREE.Vector3[] = [];

  for (let i = 0; i < NODE_COUNT; i += 1) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2;
    const ring = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const jitter = 0.84 + rand() * 0.3;
    points.push(new THREE.Vector3(Math.cos(theta) * ring, y, Math.sin(theta) * ring).multiplyScalar(RADIUS * jitter));
  }

  const adjacency: Set<number>[] = points.map(() => new Set<number>());
  const seen = new Set<string>();
  const edges: [number, number][] = [];

  points.forEach((point, i) => {
    points
      .map((other, j) => ({ j, d: point.distanceToSquared(other) }))
      .filter(entry => entry.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 3)
      .forEach(({ j }) => {
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        adjacency[i].add(j);
        adjacency[j].add(i);
        if (!seen.has(key)) {
          seen.add(key);
          edges.push([i, j]);
        }
      });
  });

  const neighbours = adjacency.map(set => Array.from(set));
  const hubs = neighbours
    .map((list, index) => ({ index, degree: list.length }))
    .sort((a, b) => b.degree - a.degree)
    .slice(0, 9)
    .map(entry => entry.index);

  return { points, edges, neighbours, hubs };
}

let dotTexture: THREE.CanvasTexture | null = null;
function getDotTexture() {
  if (dotTexture) return dotTexture;
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.55, 'rgba(255,255,255,1)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  dotTexture = new THREE.CanvasTexture(canvas);
  return dotTexture;
}

interface SceneProps {
  palette: Palette;
  animate: boolean;
}

const Scene = ({ palette, animate }: SceneProps) => {
  const graph = useMemo(buildGraph, []);
  const group = useRef<THREE.Group>(null);
  const packetGeometry = useRef<THREE.BufferGeometry>(null);
  const spin = useRef(0.6);
  const pointerX = useRef(0);

  const packets = useMemo(() => {
    const rand = mulberry32(29);
    return Array.from({ length: PACKET_COUNT }, () => {
      const from = Math.floor(rand() * NODE_COUNT);
      const options = graph.neighbours[from];
      return { from, to: options[Math.floor(rand() * options.length)], t: rand(), speed: 0.35 + rand() * 0.45 };
    });
  }, [graph]);

  const nodePositions = useMemo(() => new Float32Array(graph.points.flatMap(p => [p.x, p.y, p.z])), [graph]);
  const hubPositions = useMemo(() => new Float32Array(graph.hubs.flatMap(i => graph.points[i].toArray())), [graph]);
  const linePositions = useMemo(
    () => new Float32Array(graph.edges.flatMap(([a, b]) => [...graph.points[a].toArray(), ...graph.points[b].toArray()])),
    [graph]
  );
  const packetPositions = useMemo(() => new Float32Array(PACKET_COUNT * 3), []);
  const texture = useMemo(getDotTexture, []);

  const writePackets = (delta: number) => {
    packets.forEach((packet, i) => {
      packet.t += delta * packet.speed;
      if (packet.t >= 1) {
        const arrived = packet.to;
        const options = graph.neighbours[arrived].filter(n => n !== packet.from);
        const pool = options.length ? options : graph.neighbours[arrived];
        packet.from = arrived;
        packet.to = pool[Math.floor(Math.random() * pool.length)];
        packet.t = 0;
      }
      const eased = packet.t * packet.t * (3 - 2 * packet.t);
      const a = graph.points[packet.from];
      const b = graph.points[packet.to];
      packetPositions[i * 3] = a.x + (b.x - a.x) * eased;
      packetPositions[i * 3 + 1] = a.y + (b.y - a.y) * eased;
      packetPositions[i * 3 + 2] = a.z + (b.z - a.z) * eased;
    });
    const attribute = packetGeometry.current?.getAttribute('position');
    if (attribute) attribute.needsUpdate = true;
  };

  // Seed packet positions once so the static (reduced motion) frame still shows them.
  useEffect(() => {
    writePackets(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g || !animate) return;
    spin.current += delta * 0.075;
    pointerX.current = THREE.MathUtils.damp(pointerX.current, state.pointer.x * 0.55, 2.6, delta);
    g.rotation.y = spin.current + pointerX.current;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, 0.22 - state.pointer.y * 0.32, 2.6, delta);
    writePackets(Math.min(delta, 0.05));
  });

  return (
    <>
      <fog attach="fog" args={[palette.bg, 6.4, 10.2]} />
      <group ref={group} rotation={[0.22, 0.6, 0]}>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color={palette.accent} transparent opacity={0.3} depthWrite={false} />
        </lineSegments>

        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
          </bufferGeometry>
          <pointsMaterial color={palette.fg} size={0.075} map={texture} transparent alphaTest={0.05} depthWrite={false} sizeAttenuation />
        </points>

        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[hubPositions, 3]} />
          </bufferGeometry>
          <pointsMaterial color={palette.accent} size={0.17} map={texture} transparent alphaTest={0.05} depthWrite={false} sizeAttenuation />
        </points>

        <points>
          <bufferGeometry ref={packetGeometry}>
            <bufferAttribute attach="attributes-position" args={[packetPositions, 3]} usage={THREE.DynamicDrawUsage} />
          </bufferGeometry>
          <pointsMaterial color={palette.accent} size={0.13} map={texture} transparent alphaTest={0.05} depthWrite={false} sizeAttenuation />
        </points>
      </group>
    </>
  );
};

interface MeshFieldProps {
  palette: Palette;
  animate: boolean;
  active: boolean;
  eventSource: RefObject<HTMLElement | null>;
}

const MeshField = ({ palette, animate, active, eventSource }: MeshFieldProps) => (
  <Canvas
    dpr={[1, 1.75]}
    camera={{ position: [0, 0, 7.4], fov: 42 }}
    gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
    frameloop={animate && active ? 'always' : 'demand'}
    eventSource={eventSource as RefObject<HTMLElement>}
    eventPrefix="client"
    aria-hidden="true"
  >
    <Scene palette={palette} animate={animate} />
  </Canvas>
);

export default MeshField;
