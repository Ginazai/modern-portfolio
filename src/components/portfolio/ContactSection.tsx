import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeading } from './SectionHeading';
import type { ThemeTokens } from '@/types/portfolio';

const socialLinks = (email: string) => [
  { key: 'github', href: profile.social.github, label: 'GitHub', icon: Github },
  { key: 'linkedin', href: profile.social.linkedin, label: 'LinkedIn', icon: Linkedin },
  { key: 'email', href: `mailto:${email}`, label: 'Email Rafael', icon: Mail }
];

export const ContactSection = ({ dark, muted, accent, accentBg, border }: ThemeTokens) => (
  <section id="contact" className={`scroll-mt-24 border-t px-6 py-28 lg:px-10 ${dark ? 'border-white/10 bg-[#111111]' : 'border-black/10 bg-[#eeeeee]'}`}>
    <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <SectionHeading eyebrow="06 / say hello" prefix=">" title="Get In Touch" accentClassName={accent} />
        <p className={`mt-7 max-w-md text-lg leading-8 ${muted}`}>{profile.contactIntro}</p>
        <div className="mt-10 flex gap-3">
          {socialLinks(profile.social.email).map(({ key, href, label, icon: Icon }, index) => (
            <a
              key={key}
              href={href}
              aria-label={label}
              className={`social-pop rounded-full border p-3 transition duration-300 hover:-translate-y-2 hover:border-[#00D4C8] hover:text-[#00D4C8] hover:shadow-[0_0_24px_rgba(0,212,200,.28)] ${border} ${muted}`}
              data-animate="pop-in"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Icon size={21} />
            </a>
          ))}
        </div>
      </div>
      <form className="grid gap-5" onSubmit={event => event.preventDefault()} data-animate="card-up">
        <label className="grid gap-2">
          <span className={`text-[10px] font-medium uppercase tracking-[0.06em] ${muted}`}>Name</span>
          <input required className={`border-b bg-transparent px-0 py-3 text-sm outline-none transition placeholder:${muted} focus:border-[#00D4C8] ${border}`} placeholder="Your name" />
        </label>
        <label className="grid gap-2">
          <span className={`text-[10px] font-medium uppercase tracking-[0.06em] ${muted}`}>Email</span>
          <input required type="email" className={`border-b bg-transparent px-0 py-3 text-sm outline-none transition placeholder:${muted} focus:border-[#00D4C8] ${border}`} placeholder="you@company.com" />
        </label>
        <label className="grid gap-2">
          <span className={`text-[10px] font-medium uppercase tracking-[0.06em] ${muted}`}>Message</span>
          <textarea
            required
            rows={4}
            className={`resize-none border-b bg-transparent px-0 py-3 text-sm outline-none transition placeholder:${muted} focus:border-[#00D4C8] ${border}`}
            placeholder="Tell me a little about the opportunity..."
          />
        </label>
        <button type="submit" className={`cta-ripple mt-3 inline-flex w-fit items-center gap-2 rounded-sm px-6 py-3 text-xs font-bold uppercase tracking-[0.06em] transition duration-300 hover:scale-[1.04] ${accentBg}`}>
          <span>Send message</span>
          <Send size={15} />
        </button>
      </form>
    </div>
  </section>
);
