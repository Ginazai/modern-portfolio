import { useRef, useState, type FormEvent } from 'react';
import { EnvelopeSimple, GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react';
import { useLang } from '@/context/lang-context';
import type { Ui } from '@/i18n/ui';
import { Bezel } from './Bezel';
import { PillButton } from './PillButton';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

type FieldName = 'name' | 'email' | 'message';
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const emptyValues: Values = { name: '', email: '', message: '' };

const validate = (values: Values, t: Ui): Errors => {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = t.errName;
  if (!values.email.trim()) errors.email = t.errEmailMissing;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = t.errEmailInvalid;
  if (!values.message.trim()) errors.message = t.errMessage;
  return errors;
};

const labelClass = 'text-[10px] font-medium uppercase tracking-[0.1em] text-muted';
const inputClass = (invalid: boolean) =>
  `w-full rounded-2xl border bg-bg px-4 py-3.5 text-base text-fg transition-colors duration-500 placeholder:text-faint hover:border-line-strong focus:border-accent ${
    invalid ? 'border-danger' : 'border-line'
  }`;

export const ContactSection = () => {
  const { c, t } = useLang();
  const { profile } = c;
  const socialLinks = [
    { key: 'github', href: profile.social.github, label: 'GitHub', icon: GithubLogo },
    { key: 'linkedin', href: profile.social.linkedin, label: 'LinkedIn', icon: LinkedinLogo },
    { key: 'email', href: `mailto:${profile.social.email}`, label: t.emailMe, icon: EnvelopeSimple }
  ];
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const update = (field: FieldName, value: string) => {
    setValues(current => ({ ...current, [field]: value }));
    if (errors[field]) setErrors(current => ({ ...current, [field]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values, t);
    setErrors(found);
    const firstInvalid = (['name', 'email', 'message'] as FieldName[]).find(field => found[field]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    // No backend: hand the message to the visitor's own mail client.
    const subject = encodeURIComponent(t.mailSubject(values.name.trim()));
    const body = encodeURIComponent(`${values.message.trim()}\n\n${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${profile.social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const reset = () => {
    setValues(emptyValues);
    setErrors({});
    setSent(false);
  };

  return (
    <section id="contact" className="band scroll-mt-20 border-t border-line px-5 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading prefix=">" title={t.contactTitle} />
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-md text-lg leading-8 text-muted">{profile.contactIntro}</p>
            <a href={`mailto:${profile.social.email}`} className="mt-5 inline-block font-mono text-sm text-fg link-underline">
              {profile.social.email}
            </a>
          </Reveal>
          <div className="mt-10 flex gap-3">
            {socialLinks.map(({ key, href, label, icon: Icon }, index) => (
              <Reveal key={key} delay={0.1 + index * 0.07} y={18}>
                <a
                  href={href}
                  aria-label={label}
                  className="grid size-12 place-items-center rounded-full border border-line text-muted transition duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-accent hover:text-accent hover:shadow-[0_14px_30px_-12px_color-mix(in_srgb,var(--accent)_55%,transparent)] active:scale-[0.94]"
                >
                  <Icon size={21} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <Bezel coreClassName="p-6 sm:p-10">
            {sent ? (
              <div role="status">
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-fg">{t.sentTitle}</h3>
                <p className="mt-3 max-w-[48ch] leading-relaxed text-muted">{t.sentBody(profile.social.email)}</p>
                <button type="button" onClick={reset} className="mt-8 text-sm text-accent link-underline">
                  {t.writeAnother}
                </button>
              </div>
            ) : (
              <form ref={formRef} noValidate onSubmit={onSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <label htmlFor="contact-name" className={labelClass}>{t.fieldName}</label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={event => update('name', event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={inputClass(Boolean(errors.name))}
                    placeholder={t.phName}
                  />
                  {errors.name && <p id="contact-name-error" className="text-sm text-danger">{errors.name}</p>}
                </div>

                <div className="grid gap-2">
                  <label htmlFor="contact-email" className={labelClass}>{t.fieldEmail}</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={event => update('email', event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={inputClass(Boolean(errors.email))}
                    placeholder="you@company.com"
                  />
                  {errors.email && <p id="contact-email-error" className="text-sm text-danger">{errors.email}</p>}
                </div>

                <div className="grid gap-2">
                  <label htmlFor="contact-message" className={labelClass}>{t.fieldMessage}</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={event => update('message', event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`${inputClass(Boolean(errors.message))} resize-none`}
                    placeholder={t.phMessage}
                  />
                  {errors.message && <p id="contact-message-error" className="text-sm text-danger">{errors.message}</p>}
                </div>

                <div>
                  <PillButton type="submit" icon={<PaperPlaneTilt weight="bold" />}>
                    {t.send}
                  </PillButton>
                </div>
              </form>
            )}
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
};
