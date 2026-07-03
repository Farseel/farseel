import React from 'react';
import { Monitor, Database, Briefcase } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '40+', label: 'Projects Built' },
    { number: '15+', label: 'Clients / Collaborators' },
    { number: '1.2k+', label: 'Git Contributions' },
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Monitor size={20} />,
      skills: [
        { name: 'React / Next.js', percentage: 95 },
        { name: 'TypeScript', percentage: 90 },
        { name: 'HTML5 & CSS3 / Sass', percentage: 95 },
        { name: 'State Management (Redux/Zustand)', percentage: 85 },
      ],
    },
    {
      title: 'Backend',
      icon: <Database size={20} />,
      skills: [
        { name: 'Node.js / Express', percentage: 88 },
        { name: 'GraphQL / REST APIs', percentage: 90 },
        { name: 'SQL & NoSQL (Postgres, MongoDB)', percentage: 82 },
        { name: 'Firebase / Supabase', percentage: 85 },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: <Briefcase size={20} />,
      skills: [
        { name: 'Git & GitHub Workflows', percentage: 92 },
        { name: 'Docker Containers', percentage: 75 },
        { name: 'CI/CD Pipelines', percentage: 80 },
        { name: 'Figma (UI/UX Design)', percentage: 85 },
      ],
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title center-title">About Me</h2>

        <div className="about-grid">
          {/* Left Narrative */}
          <div className="about-narrative">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600 }}>
              Engineering Web Solutions with Precision & Style
            </h3>
            <p className="about-text">
              I am a passionate software engineer dedicated to building seamless digital experiences.
              My journey started with designing interactive visual scripts and evolved into writing robust,
              scalable production-grade code for full-stack systems.
            </p>
            <p className="about-text">
              I thrive on bridging the gap between elegant user interfaces and performant backend APIs.
              When writing code, I value accessibility, pixel-perfect visual styling, and optimized load-time performance.
            </p>
            <p className="about-text">
              Outside of building websites, you can find me exploring open-source projects, experimenting with new design layouts,
              or hiking in nature.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="about-stats">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-panel">
                <div className="stat-number text-gradient">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-container">
          <h3 className="skills-title">My Tech Stack</h3>
          <div className="skills-grid">
            {skillCategories.map((category, catIdx) => (
              <div key={catIdx} className="skills-category glass-panel">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h4 className="category-title">{category.title}</h4>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-pct">{skill.percentage}%</span>
                      </div>
                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
