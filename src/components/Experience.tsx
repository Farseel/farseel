import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

interface TimelineItemType {
  role: string;
  company: string;
  date: string;
  bullets: string[];
}

const Experience: React.FC = () => {
  const experiences: TimelineItemType[] = [
    {
      role: 'Senior Frontend Architect',
      company: 'TechScale Inc.',
      date: '2024 - Present',
      bullets: [
        'Led frontend architecture overhaul converting legacy templates into React 19 + TypeScript, boosting codebase readability and maintainability.',
        'Optimized bundle payloads and dynamic asset loading, which improved Core Web Vitals LCP metrics by 35%.',
        'Spearheaded developer experience workflows and mentored a cross-functional team of 5 engineers.',
      ],
    },
    {
      role: 'Full-Stack Engineer',
      company: 'AppForge Solutions',
      date: '2022 - 2024',
      bullets: [
        'Designed and launched custom backend microservices using Node.js, Express, and PostgreSQL database queries.',
        'Integrated multi-provider authentication (OAuth, MFA) and customized webhooks for billing modules using Supabase.',
        'Coordinated pipeline configurations using GitHub Actions, ensuring zero-downtime deployment pipelines.',
      ],
    },
    {
      role: 'Junior Web Developer',
      company: 'WebStart Lab',
      date: '2020 - 2022',
      bullets: [
        'Translated responsive design wireframes from Figma into modular, component-driven CSS code.',
        'Created interactive UI elements and form validation widgets using Vanilla JS and React.',
        'Tested and resolved browser visual glitches and handled user accessibility optimizations (WCAG AA standards).',
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title center-title">My Journey</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              {/* Vertical connector node marker */}
              <div className="timeline-marker" aria-hidden="true">
                <Briefcase size={14} />
              </div>

              {/* Information Card */}
              <div className="timeline-card glass-panel">
                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <span className="company-name">{exp.company}</span>
                  </div>
                  <div className="timeline-date">
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={12} />
                      {exp.date}
                    </span>
                  </div>
                </div>

                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="timeline-bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
