import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { profile } from '@/data/profile';
import type { ThemeTokens } from '@/types/portfolio';

interface HeroSectionProps extends ThemeTokens {
  typedText: string;
  heroShift: { x: number; y: number };
}

export const HeroSection = ({ dark, muted, accent, accentBg, border, text, typedText, heroShift }: HeroSectionProps) => {
  const backgroundImage = dark
    ? 'radial-gradient(circle at 78% 30%, rgba(0,212,200,.09), transparent 24%), radial-gradient(circle, rgba(255,255,255,.11) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)'
    : 'radial-gradient(circle at 78% 30%, rgba(0,158,150,.10), transparent 24%), radial-gradient(circle, rgba(0,0,0,.10) 1px, transparent 1px), linear-gradient(rgba(0,0,0,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.035) 1px, transparent 1px)';

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pb-20 pt-28 lg:px-10"
      style={{
        backgroundImage,
        backgroundSize: 'auto, 22px 22px, 44px 44px, 44px 44px',
        backgroundPosition: `center, ${heroShift.x}px ${heroShift.y}px, ${heroShift.x * 0.55}px ${heroShift.y * 0.55}px, ${heroShift.x * 0.55}px ${heroShift.y * 0.55}px`
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_350px]">
        <div className="max-w-4xl">
          <p className={`mb-7 font-code text-xs uppercase tracking-[0.28em] ${accent}`} data-animate="hero-up" style={{ transitionDelay: '0ms' }}>
            <span className="mr-2">//</span>
            <span> portfolio_2025</span>
          </p>
          <h1
            className="font-heading max-w-4xl text-5xl font-black leading-[0.94] tracking-[0.01em] sm:text-7xl lg:text-[104px]"
            data-animate="hero-up"
            style={{ transitionDelay: '90ms' }}
          >
            <span>{profile.name}</span>
            <br />
            <span className={accent}>{profile.lastName}</span>
          </h1>
          <div
            className={`mt-9 min-h-[58px] max-w-2xl border-l-2 pl-4 text-sm leading-7 ${dark ? 'border-[#00D4C8]/60' : 'border-[#009E96]/70'} ${muted}`}
            data-animate="hero-up"
            style={{ transitionDelay: '180ms' }}
          >
            <span>{typedText}</span>
            <span className={`ml-1 inline-block h-4 w-2 animate-pulse ${dark ? 'bg-[#00D4C8]' : 'bg-[#009E96]'}`} />
          </div>
          <p className={`mt-7 max-w-md text-lg ${muted}`} data-animate="hero-up" style={{ transitionDelay: '240ms' }}>
            <span>{profile.intro}</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-animate="hero-up" style={{ transitionDelay: '300ms' }}>
            <a
              href="#projects"
              className={`cta-ripple inline-flex items-center gap-2 rounded-sm px-5 py-3 text-xs font-bold uppercase tracking-[0.06em] transition duration-300 hover:scale-[1.04] ${accentBg}`}
            >
              <span>View My Work</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href="#contact"
              className={`cta-ripple inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-xs font-bold uppercase tracking-[0.06em] transition duration-300 hover:scale-[1.04] ${border} ${text}`}
            >
              <Download size={15} />
              <span> Download Resume</span>
            </a>
          </div>
        </div>
        <div className="hidden justify-self-end lg:block">
          <div
            className={`relative flex h-64 w-64 items-center justify-center rounded-full border ${dark ? 'border-[#00D4C8]/30' : 'border-[#009E96]/30'}`}
            data-animate="hero-up"
            style={{ transitionDelay: '360ms' }}
          >
            <div
              className={`font-heading flex h-48 w-48 items-center justify-center rounded-full border text-5xl font-bold tracking-[0.01em] ${dark ? 'border-white/10 bg-[#1A1A1A] text-white/20' : 'border-black/10 bg-white text-black/15'}`}
            >
              <span>{profile.initials}</span>
            </div>
            <span className={`absolute -right-3 top-10 rounded-full px-3 py-1 text-[10px] font-medium ${dark ? 'bg-[#00D4C8] text-black' : 'bg-[#009E96] text-white'}`}>
              {profile.status}
            </span>
          </div>
        </div>
      </div>
      <a href="#about" className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${muted}`} aria-label="Scroll to about">
        <ArrowDown size={19} />
      </a>
    </section>
  );
};
