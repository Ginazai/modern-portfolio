import { ArrowUp } from '@phosphor-icons/react';
import { profile } from '@/data/profile';

export const Footer = () => (
  <footer className="border-t border-line px-5 py-8 lg:px-10">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-center text-[11px] font-medium tracking-[0.06em] text-muted sm:flex-row sm:justify-between sm:text-left">
      <span>{profile.footerNote(new Date().getFullYear())}</span>
      <a
        href="#top"
        className="group inline-flex items-center gap-2 rounded-full border border-line py-1.5 pl-4 pr-1.5 text-fg transition duration-500 ease-out-expo hover:border-accent hover:text-accent active:scale-[0.97]"
      >
        Back to top
        <span className="grid size-7 place-items-center rounded-full bg-fg/10 transition duration-500 group-hover:-translate-y-0.5">
          <ArrowUp size={14} />
        </span>
      </a>
    </div>
  </footer>
);
