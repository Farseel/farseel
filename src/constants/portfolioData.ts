export interface ProjectType {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  type: 'dashboard' | 'prediction';
}

export interface TimelineItemType {
  role: string;
  company: string;
  date: string;
  bullets: string[];
}

export interface CertificationType {
  name: string;
  issuer: string;
}

export const portfolioData = {
  personalInfo: {
    name: 'Farseel M H',
    title: 'Full Stack Developer & ML Engineer',
    tagline: 'Building scalable web applications, intelligent ML systems, and production-ready software with a passion for clean architecture, performance, and user experience.',
  },
  
  aboutMe: {
    bio: [
      "I am a Software Engineer specializing in Full Stack Development and Machine Learning.",
      "I enjoy building scalable web applications using the MERN stack while also developing intelligent machine learning solutions using TensorFlow and Scikit-learn.",
      "My interests span across backend architecture, frontend engineering, cloud deployment, MLOps, system design, and performance optimization. I enjoy transforming complex ideas into production-ready applications that solve real-world problems."
    ]
  },

  skills: [
    {
      category: 'Languages',
      items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'C'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Angular', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'OAuth'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL'],
    },
    {
      category: 'Machine Learning',
      items: ['TensorFlow', 'Scikit-learn', 'CNN', 'NumPy', 'Pandas', 'Feature Engineering', 'Model Deployment'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['Docker', 'Microsoft Azure', 'CI/CD Pipelines', 'Git', 'GitHub', 'GitLab'],
    },
    {
      category: 'Engineering',
      items: ['System Design', 'Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Performance Optimization'],
    }
  ],

  projects: [
    {
      title: 'High-Concurrency Event Ticketing System',
      description: 'Designed and developed a distributed full-stack ticket booking platform capable of handling high-concurrency traffic.',
      highlights: [
        'Developed secure REST APIs using Node.js and Express.js',
        'Implemented JWT Authentication and OAuth integration',
        'Used PostgreSQL database and implemented Redis distributed locking to prevent race conditions',
        'Containerized using Docker and configured CI/CD pipelines to deploy on Microsoft Azure',
        'Optimized database queries, significantly reducing API latency and improving throughput'
      ],
      techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Azure', 'JWT', 'OAuth'],
      type: 'dashboard'
    },
    {
      title: 'BMI Prediction & Health Recommendation System',
      description: 'Developed an intelligent healthcare application that predicts BMI using deep learning models and provides personalized health recommendations.',
      highlights: [
        'Built deep learning models using TensorFlow CNN architectures',
        'Developed API endpoints using FastAPI inside Docker containers',
        'Conducted feature engineering and hyperparameter tuning',
        'Integrated ML inference pipeline into standard MERN stack',
        'Created modular dashboards displaying client health indicators'
      ],
      techStack: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'TensorFlow', 'Docker', 'Python', 'NumPy', 'Pandas', 'Feature Engineering'],
      metrics: [
        { label: 'Weight MAE', value: '9.8 kg' },
        { label: 'Height MAE', value: '6.2 cm' }
      ],
      type: 'prediction'
    }
  ] as ProjectType[],

  timeline: [
    {
      role: 'Machine Learning Intern',
      company: 'Feather Softwares',
      date: 'Dec 2025 – Jan 2026',
      bullets: [
        'Developed predictive ML models using TensorFlow and Scikit-learn pipelines.',
        'Conducted feature engineering and hyperparameter cross-validation protocols.',
        'Structured and preprocessed tabular datasets using Pandas and NumPy libraries.',
        'Evaluated models based on key parameters including Precision, Recall, F1 Score, and AUC metrics.'
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'Profenaa Technologies',
      date: 'Jun 2024',
      bullets: [
        'Developed responsive user interfaces using HTML5, CSS3, and JavaScript.',
        'Optimized code structure and debugged code files using Git version control.',
        'Participated in unit testing, debugging, and initial CI/CD pipeline deployments.'
      ]
    }
  ] as TimelineItemType[],

  certifications: [
    {
      name: 'Java Full Stack',
      issuer: 'Wipro'
    },
    {
      name: 'Java Certified Foundations Associate',
      issuer: 'Oracle'
    }
  ] as CertificationType[],

  education: {
    degree: 'B.Tech Information Technology (Honours)',
    institution: 'Kamaraj College of Engineering and Technology, Madurai',
    duration: '2022 – 2026',
    grade: 'CGPA 8.25'
  },

  contactInfo: {
    email: 'farseel07@gmail.com',
    phone: '+91 63853 18752',
    location: 'Nagercoil, India',
    github: 'https://github.com/Farseel',
    linkedin: 'https://linkedin.com/in/farseel-m-h'
  }
};
