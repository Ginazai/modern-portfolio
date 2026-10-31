import { useEffect, useRef } from 'react';
import { makeNoise, mulberry32 } from '@/lib/prng';
import { useTheme } from '@/context/theme-context';
import type { CoverVariant } from '@/types/portfolio';

interface Ctx2 {
  ctx: CanvasRenderingContext2D;
  w: number;
  h: number;
  fg: string;
  accent: string;
  rand: () => number;
  seed: number;
}

const line = (c: Ctx2, alpha: number, width = 1, accent = false) => {
  c.ctx.globalAlpha = alpha;
  c.ctx.strokeStyle = accent ? c.accent : c.fg;
  c.ctx.lineWidth = width;
};

/** Orthogonal lanes with 45 degree jogs, junction nodes and packets: reads as a queue topology. */
function drawPipeline(c: Ctx2) {
  const { ctx, w, h, rand } = c;
  const gap = Math.max(16, Math.round(h / 16));
  const lanes = Math.floor(h / gap);
  ctx.lineJoin = 'round';

  for (let k = 1; k < lanes; k += 1) {
    let y = k * gap;
    let x = 0;
    const accent = rand() < 0.16;
    const jogs = 2 + Math.floor(rand() * 3);
    const nodes: [number, number][] = [];
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let j = 0; j < jogs; j += 1) {
      x += (w / (jogs + 1)) * (0.6 + rand() * 0.8);
      const shift = (rand() < 0.5 ? -1 : 1) * gap * (1 + Math.floor(rand() * 2));
      const nextY = Math.min(h - gap, Math.max(gap, y + shift));
      const run = Math.abs(nextY - y);
      ctx.lineTo(x, y);
      ctx.lineTo(x + run, nextY);
      nodes.push([x, y], [x + run, nextY]);
      x += run;
      y = nextY;
    }
    ctx.lineTo(w, y);
    line(c, accent ? 0.85 : 0.2, accent ? 1.5 : 1, accent);
    ctx.stroke();

    ctx.globalAlpha = accent ? 0.9 : 0.35;
    ctx.fillStyle = accent ? c.accent : c.fg;
    nodes.forEach(([nx, ny]) => ctx.fillRect(nx - 2.5, ny - 2.5, 5, 5));
  }

  // Packets in flight.
  ctx.fillStyle = c.accent;
  for (let i = 0; i < 14; i += 1) {
    ctx.globalAlpha = 0.9;
    ctx.fillRect(rand() * w, (1 + Math.floor(rand() * (lanes - 1))) * gap - 1.5, 14, 3);
  }
}

/** Noise-driven flow field: streamlines integrated through a seeded value-noise angle map. */
function drawFlow(c: Ctx2) {
  const { ctx, w, h, rand, seed } = c;
  const noise = makeNoise(seed);
  const count = Math.min(520, Math.floor((w * h) / 1900));
  ctx.lineCap = 'round';

  for (let i = 0; i < count; i += 1) {
    let x = rand() * w;
    let y = rand() * h;
    const accent = rand() < 0.09;
    ctx.beginPath();
    ctx.moveTo(x, y);
    const steps = 26 + Math.floor(rand() * 44);
    for (let s = 0; s < steps; s += 1) {
      const angle = noise(x * 0.0055, y * 0.0055) * Math.PI * 4.2;
      x += Math.cos(angle) * 3.4;
      y += Math.sin(angle) * 3.4;
      ctx.lineTo(x, y);
    }
    line(c, accent ? 0.8 : 0.1 + rand() * 0.16, accent ? 1.4 : 1, accent);
    ctx.stroke();
  }
}

/** Stacked signal traces with a burst envelope: reads as telemetry. */
function drawWaves(c: Ctx2) {
  const { ctx, w, h, rand } = c;
  const rows = Math.max(14, Math.floor(h / 13));
  const burst = w * (0.3 + rand() * 0.4);
  const spread = w * (0.16 + rand() * 0.1);
  const hot = new Set([Math.floor(rows * 0.35), Math.floor(rows * 0.68)]);
  ctx.lineJoin = 'round';

  for (let r = 0; r < rows; r += 1) {
    const base = ((r + 1) * h) / (rows + 1);
    const f1 = 0.018 + rand() * 0.02;
    const f2 = 0.05 + rand() * 0.05;
    const p1 = rand() * Math.PI * 2;
    const p2 = rand() * Math.PI * 2;
    const amp = 6 + rand() * 12;
    ctx.beginPath();
    for (let x = 0; x <= w; x += 3) {
      const envelope = Math.exp(-(((x - burst) / spread) ** 2));
      const y = base + envelope * amp * (Math.sin(x * f1 + p1) + 0.55 * Math.sin(x * f2 + p2)) + Math.sin(x * 0.4 + r) * 0.4;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    const accent = hot.has(r);
    line(c, accent ? 0.9 : 0.24, accent ? 1.5 : 1, accent);
    ctx.stroke();
  }
}

const painters: Record<CoverVariant, (c: Ctx2) => void> = {
  pipeline: drawPipeline,
  flow: drawFlow,
  waves: drawWaves
};

interface GenerativeCoverProps {
  variant: CoverVariant;
  seed: number;
  className?: string;
}

/** Deterministic generative artwork, drawn once per size/theme change. No animation loop. */
export const GenerativeCover = ({ variant, seed, className = '' }: GenerativeCoverProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { palette } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const paint = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      painters[variant]({ ctx, w: width, h: height, fg: palette.fg, accent: palette.accent, rand: mulberry32(seed), seed });
      ctx.globalAlpha = 1;
    };

    paint();
    const observer = new ResizeObserver(paint);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [variant, seed, palette]);

  return <canvas ref={canvasRef} aria-hidden="true" className={`absolute inset-0 block h-full w-full ${className}`} />;
};
