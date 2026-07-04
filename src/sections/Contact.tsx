import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, Loader2 } from 'lucide-react';
import { portfolioData } from '../constants/portfolioData';
import BorderGlow from '../components/BorderGlow';

// Custom inline SVG icons
const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { email, phone, location, github, linkedin } = portfolioData.contactInfo;

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Sender name is required';
    
    if (!form.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    
    if (!form.subject.trim()) tempErrors.subject = 'Subject heading is required';
    if (!form.message.trim()) tempErrors.message = 'Message body cannot be empty';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate database delivery
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      
      // Clear success screen after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically on keystroke
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const contactCards = [
    {
      label: 'Email Dispatch',
      value: email,
      icon: <Mail size={16} />,
      link: `mailto:${email}`
    },
    {
      label: 'Direct Channel',
      value: phone,
      icon: <Phone size={16} />,
      link: `tel:${phone}`
    },
    {
      label: 'Location',
      value: location,
      icon: <MapPin size={16} />,
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-bg-secondary relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
              Contact Info
            </span>
            <h2 className="text-3xl font-sans font-extrabold text-text-light mt-3 mb-4">
              Get In Touch
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed mb-8 font-sans">
              Have an interesting proposal, project challenge, or full-time machine learning/engineering role? Send a message, and I'll get back to you promptly.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {contactCards.map((card, idx) => (
                <div key={idx}>
                  <BorderGlow
                    borderRadius={16}
                    backgroundColor="rgba(13, 17, 39, 0.45)"
                    glowColor="210 85 55"
                    className="glassmorphic-card"
                  >
                    <div className="p-5 flex items-center gap-4 w-full h-full">
                      <div className="w-10 h-10 rounded-lg bg-bg-primary/60 border border-white/5 flex items-center justify-center text-accent-blue">
                        {card.icon}
                      </div>
                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-wider text-text-secondary/40 block">
                          {card.label}
                        </span>
                        {card.link ? (
                          <a href={card.link} className="font-mono text-xs md:text-sm text-text-light hover:text-accent-blue transition-colors">
                            {card.value}
                          </a>
                        ) : (
                          <span className="font-mono text-xs md:text-sm text-text-light">
                            {card.value}
                          </span>
                        )}
                      </div>
                    </div>
                  </BorderGlow>
                </div>
              ))}
            </div>

            {/* Social grid */}
            <div>
              <span className="font-mono text-[10px] text-text-secondary/30 uppercase tracking-widest block mb-3">
                Social Coordinates
              </span>
              <div className="flex gap-4">
                <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-bg-card border border-white/5 text-text-secondary hover:text-accent-blue hover:border-accent-blue/20 hover:shadow-glow-blue-sm transition-all duration-300" aria-label="GitHub">
                  <GithubIcon size={16} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-bg-card border border-white/5 text-text-secondary hover:text-accent-blue hover:border-accent-blue/20 hover:shadow-glow-blue-sm transition-all duration-300" aria-label="LinkedIn">
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <BorderGlow
              borderRadius={24}
              backgroundColor="rgba(13, 17, 39, 0.45)"
              glowColor="210 85 55"
              className="glassmorphic-card"
            >
              <div className="p-6 md:p-8 relative overflow-hidden w-full h-full">
                <AnimatePresence mode="wait">
                  {!success ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                      noValidate
                    >
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="font-mono text-[10px] uppercase text-text-secondary/40 tracking-wider">
                          Sender Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-bg-primary border ${
                            errors.name ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-accent-blue'
                          } focus:shadow-glow-blue-sm text-text-light text-sm outline-none transition-all duration-300`}
                          placeholder="e.g. Jane Doe"
                        />
                        {errors.name && (
                          <span className="font-mono text-[10px] text-red-500 mt-1">{errors.name}</span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="font-mono text-[10px] uppercase text-text-secondary/40 tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-bg-primary border ${
                            errors.email ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-accent-blue'
                          } focus:shadow-glow-blue-sm text-text-light text-sm outline-none transition-all duration-300`}
                          placeholder="e.g. jane.doe@example.com"
                        />
                        {errors.email && (
                          <span className="font-mono text-[10px] text-red-500 mt-1">{errors.email}</span>
                        )}
                      </div>

                      {/* Subject input */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="subject" className="font-mono text-[10px] uppercase text-text-secondary/40 tracking-wider">
                          Subject Heading
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-bg-primary border ${
                            errors.subject ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-accent-blue'
                          } focus:shadow-glow-blue-sm text-text-light text-sm outline-none transition-all duration-300`}
                          placeholder="e.g. Collaborative project"
                        />
                        {errors.subject && (
                          <span className="font-mono text-[10px] text-red-500 mt-1">{errors.subject}</span>
                        )}
                      </div>

                      {/* Message textarea */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="font-mono text-[10px] uppercase text-text-secondary/40 tracking-wider">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-bg-primary border ${
                            errors.message ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-accent-blue'
                          } focus:shadow-glow-blue-sm text-text-light text-sm outline-none resize-none transition-all duration-300`}
                          placeholder="Write your message here..."
                        />
                        {errors.message && (
                          <span className="font-mono text-[10px] text-red-500 mt-1">{errors.message}</span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="relative w-full mt-2">
                        <BorderGlow
                          borderRadius={12}
                          backgroundColor="transparent"
                          glowColor="210 85 55"
                          className="w-full"
                        >
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 px-6 rounded-xl bg-accent-blue hover:bg-accent-secondary text-text-light hover:text-text-light font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                          >
                            {loading ? (
                              <>
                                <Loader2 size={16} className="animate-spin" />
                                <span>Sending message...</span>
                              </>
                            ) : (
                              <>
                                <Send size={16} />
                                <span>Send Message</span>
                              </>
                            )}
                          </button>
                        </BorderGlow>
                      </div>
                    </motion.form>
                  ) : (
                    /* Success feedback panel with growing check */
                    <motion.div
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue mb-6 shadow-glow-blue-sm"
                      >
                        <Check size={28} />
                      </motion.div>
                      <h3 className="font-sans font-extrabold text-xl text-text-light mb-2">
                        Message Sent
                      </h3>
                      <p className="font-mono text-xs text-accent-blue mb-6">
                        Status: Sent
                      </p>
                      <p className="text-text-secondary text-sm max-w-sm font-sans">
                        Thank you for reaching out! Your message has been safely received, and I will get back to you shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </BorderGlow>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

