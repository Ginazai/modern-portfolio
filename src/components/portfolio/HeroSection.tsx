import { Suspense, lazy, useEffect, useRef, useState, type MouseEvent } from 'react';
import { motion, useReducedMotion, useSpring, useTransform, type Variants } from 'motion/react';
import { ArrowUpRight, ArrowDown, DownloadSimple } from '@phosphor-icons/react';
import { useLang } from '@/context/lang-context';
import { useTheme } from '@/context/theme-context';
import { usePointer } from '@/hooks/usePointer';
import { ErrorBoundary } from './ErrorBoundary';
import { PillButton } from './PillButton';
import { Typewriter } from './Typewriter';

const MeshField = lazy(() => import('./MeshField'));

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export const HeroSection = () => {
  const { c, t } = useLang();
  const { profile } = c;
  const { palette } = useTheme();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  // Dotted grid drifts against the cursor. Transform only, driven by motion values.
  const { x, y } = usePointer();
  const gridX = useSpring(useTransform(x, v => (v / window.innerWidth - 0.5) * -34), { stiffness: 70, damping: 20 });
  const gridY = useSpring(useTransform(y, v => (v / window.innerHeight - 0.5) * -34), { stiffness: 70, damping: 20 });

  // Download the resume only if the server really returns a PDF. A missing file can come back as the
  // site's own HTML page (SPA fallback), which would otherwise be saved as an unreadable "PDF".
  const [resumeError, setResumeError] = useState(false);
  const downloadResume = async (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      // Prefer the CV in the active language; fall back to the default one until the translated file is added.
      // Only accept a real PDF: a missing file can come back as the site's own HTML page (SPA fallback).
      let response: Response | undefined;
      for (const candidate of [profile.resumeUrl, '/resume.pdf']) {
        const attempt = await fetch(candidate, { cache: 'no-store' });
        if (attempt.ok && (attempt.headers.get('content-type') ?? '').includes('pdf')) {
          response = attempt;
          break;
        }
      }
      if (!response) throw new Error(`Expected a PDF at ${profile.resumeUrl}`);
      const url = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = url;
      link.download = profile.resumeFilename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setResumeError(false);
    } catch (error) {
      console.warn(error);
      setResumeError(true);
    }
  };

  // Pause the WebGL loop whenever the hero is scrolled out of view.
  useEffect(() => {
    const node = stageRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.05 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden px-5 pb-20 pt-24 lg:px-10">
      <div className="hero-tint pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-grid-mask pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div className="hero-grid absolute -inset-16" style={reduceMotion ? undefined : { x: gridX, y: gridY }} />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex rounded-full border border-line bg-fg/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
          >
            <span className="mr-2">//</span>
            <span>portfolio_{new Date().getFullYear()}</span>
          </motion.p>

          <motion.h1 variants={item} className="mt-7 text-[clamp(3.4rem,8.4vw,6.75rem)] font-bold leading-[0.92] tracking-[-0.055em]">
            {profile.name}
            <br />
            <span className="text-accent">{profile.lastName}</span>
          </motion.h1>

          <motion.div variants={item} className="mt-9 max-w-xl border-l-2 border-accent/60 pl-4 text-[0.9375rem] leading-7 text-muted">
            <Typewriter key={profile.tagline} text={profile.tagline} />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-md text-lg leading-relaxed text-fg/90">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <PillButton href="#projects" icon={<ArrowUpRight weight="bold" />}>
              {t.viewWork}
            </PillButton>
            <PillButton href={profile.resumeUrl} download={profile.resumeFilename} onClick={downloadResume} variant="ghost" icon={<DownloadSimple weight="bold" />}>
              {t.downloadResume}
            </PillButton>
          </motion.div>

          {resumeError && (
            <p role="alert" className="mt-4 max-w-md text-sm leading-relaxed text-danger">
              {import.meta.env.DEV ? t.resumeMissingDev(profile.resumeUrl) : t.resumeMissingProd}
            </p>
          )}
        </motion.div>

        <motion.div
          ref={stageRef}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[380px] sm:max-w-[500px] lg:max-w-[640px] lg:justify-self-end"
        >
          <ErrorBoundary>
            <Suspense fallback={null}>
              <MeshField palette={palette} animate={!reduceMotion} active={inView} eventSource={sectionRef} />
            </Suspense>
          </ErrorBoundary>

          {/* Initials medallion at the centre of the network, with the original status badge. */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 grid size-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/30 sm:size-48 lg:size-56">
            <span className="absolute -inset-3.5 rounded-full border border-dashed border-line-strong motion-safe:animate-[spin_70s_linear_infinite]" aria-hidden="true" />
            <div className="grid size-[76%] place-items-center rounded-full border border-line bg-[color-mix(in_srgb,var(--surface)_90%,transparent)] text-4xl font-bold tracking-tight text-fg/45 shadow-[inset_0_1px_0_color-mix(in_srgb,var(--fg)_10%,transparent)] sm:text-5xl">
              {profile.initials}
            </div>
          </div>
          <span className="absolute right-[4%] top-[20%] inline-flex rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-ink">{profile.status}</span>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label={t.scrollToAbout}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent motion-safe:animate-bounce sm:block"
      >
        <ArrowDown size={19} />
      </a>
    </section>
  );
};
