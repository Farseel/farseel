import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);


interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  type: 'dashboard' | 'editor' | 'badge';
}

const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      title: 'Helix Analytics Dashboard',
      description:
        'A premium SaaS analytical dashboard visualizing user actions, traffic cycles, and conversion rates. Equipped with custom charts and realtime data stream listeners.',
      tags: ['React', 'TypeScript', 'Chart.js', 'Supabase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      type: 'dashboard',
    },
    {
      title: 'CodeForge AI Playground',
      description:
        'An in-browser code editor and node sandbox with LLM helper integrations. Build, compile, and run code files in an isolated client runtime environment.',
      tags: ['Next.js', 'Monaco Editor', 'WebContainers', 'OpenAI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      type: 'editor',
    },
    {
      title: 'Nexus DeFi Protocol',
      description:
        'A modern Web3 liquidity aggregator and yield farming dashboard with support for EVM wallet connects, contract reading, and gas fee optimization.',
      tags: ['SvelteKit', 'Ethers.js', 'Solidity', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      type: 'badge',
    },
  ];

  const renderMockup = (type: string) => {
    switch (type) {
      case 'dashboard':
        return (
          <div className="mock-ui-dashboard glass-panel">
            <div className="mock-ui-header" />
            <div className="mock-ui-charts">
              <div className="mock-ui-bar" style={{ height: '40%' }} />
              <div className="mock-ui-bar" style={{ height: '85%' }} />
              <div className="mock-ui-bar" style={{ height: '60%' }} />
              <div className="mock-ui-bar" style={{ height: '95%' }} />
              <div className="mock-ui-bar" style={{ height: '70%' }} />
            </div>
          </div>
        );
      case 'editor':
        return (
          <div className="mock-ui-editor glass-panel">
            <p style={{ color: '#22c55e' }}>&lt;CodeForge /&gt;</p>
            <p style={{ color: 'hsl(var(--text-muted))' }}>1  import &#123; AI &#125; from 'forge';</p>
            <p style={{ color: 'hsl(var(--text-muted))' }}>2  const completion = await AI.create(&#123;</p>
            <p style={{ color: 'hsl(var(--text-muted))', paddingLeft: '10px' }}>prompt: 'Write clean code'</p>
            <p style={{ color: 'hsl(var(--text-muted))' }}>3  &#125;);</p>
          </div>
        );
      case 'badge':
        return (
          <div className="mock-ui-circle-badge">
            NEXUS
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title center-title">Featured Projects</h2>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <article key={index} className="project-card glass-panel">
              {/* Graphic Mockup Header */}
              <div className="project-image-container">
                {renderMockup(project.type)}
              </div>

              {/* Card Body */}
              <div className="project-content">
                <ul className="project-tags">
                  {project.tags.map((tag, tagIdx) => (
                    <li key={tagIdx} className="project-tag">
                      {tag}
                    </li>
                  ))}
                </ul>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-links">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <GithubIcon size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
