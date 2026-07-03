import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Loader2, MessageSquare } from 'lucide-react';
import './Contact.css';

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
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactInfo = [
    {
      label: 'Email Me',
      value: 'alex@example.com',
      icon: <Mail size={20} />,
      link: 'mailto:alex@example.com',
    },
    {
      label: 'Location',
      value: 'San Francisco, CA',
      icon: <MapPin size={20} />,
      link: null,
    },
    {
      label: 'General Queries',
      value: 'Open for Freelance',
      icon: <MessageSquare size={20} />,
      link: null,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required';
    
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!form.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!form.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate mock API submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title center-title">Get In Touch</h2>

        <div className="contact-grid">
          {/* Left Side: Contact Info */}
          <div className="contact-info">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600 }}>
              Let's create something amazing together.
            </h3>
            <p className="contact-lead">
              Have an idea, project, or role you'd like to collaborate on? Fill out the form
              or drop me a direct line. I typically reply within 24 hours.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, idx) => {
                const CardComponent = info.link ? 'a' : 'div';
                const cardProps = info.link
                  ? { href: info.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {};

                return (
                  <CardComponent
                    key={idx}
                    className="contact-card glass-panel"
                    {...cardProps}
                  >
                    <div className="contact-card-icon">{info.icon}</div>
                    <div className="contact-card-info">
                      <span className="contact-card-label">{info.label}</span>
                      <span className="contact-card-value">{info.value}</span>
                    </div>
                  </CardComponent>
                );
              })}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-panel glass-panel">
            {success ? (
              <div className="contact-success">
                <div className="success-icon-wrapper">
                  <Check size={36} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700 }}>
                  Message Sent!
                </h4>
                <p style={{ color: 'hsl(var(--text-secondary))', maxWidth: '350px' }}>
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Doe"
                    disabled={loading}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@example.com"
                    disabled={loading}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Project Inquiry"
                    disabled={loading}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Tell me about your project..."
                    disabled={loading}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Add spin keyframe inline in case browser doesn't support spin natively */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Contact;
