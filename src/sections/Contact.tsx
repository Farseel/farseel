import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../constants/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { fadeUp } from '../lib/motion';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const Contact: React.FC = () => {
  const { email, phone, github, linkedin } = portfolioData.contactInfo;

  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [openedMailer, setOpenedMailer] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Required';
    if (!form.email.trim()) next.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "That email doesn't look right";
    if (!form.subject.trim()) next.subject = 'Required';
    if (!form.message.trim()) next.message = 'A few words would help';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  // No backend — compose the email in the visitor's own mail app.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    setOpenedMailer(true);
    setTimeout(() => setOpenedMailer(false), 6000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full bg-transparent border-b py-3 text-[15px] text-ink placeholder:text-ink-faint/70 outline-none transition-colors duration-300 ${
      hasError ? 'border-rust-deep' : 'border-line focus:border-ink'
    }`;

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 border-t border-line pt-10 md:pt-12">
        <SectionHeader num="05" label="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12 md:mt-16">
          {/* Left: direct channels */}
          <div className="lg:col-span-5">
            <motion.h2
              {...fadeUp()}
              className="font-display text-3xl md:text-4xl leading-[1.15] tracking-[-0.015em]"
            >
              Say hello<span className="text-rust">.</span>
              <br />
              <span className="italic font-light text-ink-soft">Really, it works.</span>
            </motion.h2>

            <motion.p {...fadeUp(0.08)} className="mt-6 max-w-sm text-[15px] leading-[1.8] text-ink-soft">
              {portfolioData.contactBlurb}
            </motion.p>

            <motion.div {...fadeUp(0.14)} className="mt-9 flex flex-col gap-3">
              <a href={`mailto:${email}`} className="link-underline text-sm text-ink w-fit">
                {email}
              </a>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className="link-underline text-sm text-ink w-fit">
                {phone}
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="mt-9 flex items-center gap-6">
              <a href={github} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-ink-soft">
                GitHub
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-ink-soft">
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!openedMailer ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7"
                >
                  <div>
                    <label htmlFor="name" className="meta-label block mb-1">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className={inputClass(errors.name)} placeholder="Your name" />
                    {errors.name && <p className="mt-1.5 text-xs text-rust-deep">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="meta-label block mb-1">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className={inputClass(errors.email)} placeholder="you@example.com" />
                    {errors.email && <p className="mt-1.5 text-xs text-rust-deep">{errors.email}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="meta-label block mb-1">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} className={inputClass(errors.subject)} placeholder="What's this about?" />
                    {errors.subject && <p className="mt-1.5 text-xs text-rust-deep">{errors.subject}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="meta-label block mb-1">
                      Message
                    </label>
                    <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} className={`${inputClass(errors.message)} resize-none`} placeholder="Go ahead…" />
                    {errors.message && <p className="mt-1.5 text-xs text-rust-deep">{errors.message}</p>}
                  </div>

                  <div className="sm:col-span-2 flex items-center justify-between gap-6 flex-wrap">
                    <button
                      type="submit"
                      className="px-7 py-3.5 bg-ink text-paper text-sm font-medium rounded-sm hover:bg-rust active:bg-rust-deep transition-colors duration-300"
                    >
                      Send message
                    </button>
                    <p className="text-xs text-ink-faint">
                      Opens your own mail app — no forms disappearing into the void.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="mailer-opened"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="border-t border-line pt-8"
                >
                  <h3 className="font-display italic font-light text-2xl text-ink-soft">
                    Your mail app should be opening.
                  </h3>
                  <p className="mt-3 text-sm text-ink-faint max-w-sm leading-relaxed">
                    If nothing happened, email me directly at{' '}
                    <a href={`mailto:${email}`} className="link-underline text-ink">
                      {email}
                    </a>
                    .
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
