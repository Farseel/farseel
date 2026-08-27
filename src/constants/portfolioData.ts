export interface ProjectType {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  repoUrl: string;
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
    firstName: 'Farseel',
    title: 'Full-stack developer & machine-learning engineer',
    tagline:
      'I build web applications end to end and train machine-learning models that hold up outside a notebook. Final-year IT student, based in Nagercoil, India — currently looking for roles where I can ship real software.',
  },

  aboutMe: {
    bio: [
      "I'm Farseel, a final-year Information Technology student at Kamaraj College of Engineering and Technology. Most days I'm building web applications the whole way through — React on the front, Node or FastAPI behind it, PostgreSQL or MongoDB underneath.",
      "Lately I've been going deeper on machine learning: training models in TensorFlow and scikit-learn, being picky about feature engineering and evaluation, then wrapping them behind APIs people can actually use. Two internships later — one building ML pipelines at Feather Softwares, one writing production web UI at Profenaa Technologies — I've learned that good software is mostly unglamorous care: readable code, honest tests, boring reliable deploys.",
    ],
  },

  skills: [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C'] },
    { category: 'Frontend', items: ['React.js', 'Angular', 'HTML5', 'CSS3', 'Responsive design'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT', 'OAuth'] },
    { category: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQL'] },
    { category: 'Machine learning', items: ['TensorFlow', 'scikit-learn', 'CNNs', 'NumPy', 'Pandas'] },
    { category: 'Cloud & tooling', items: ['Docker', 'Azure', 'CI/CD pipelines', 'Git'] },
    { category: 'Foundations', items: ['System design', 'OOP', 'Data structures & algorithms'] },
  ],

  projects: [
    {
      title: 'High-concurrency event ticketing system',
      description:
        'A ticket-booking platform built around one genuinely hard problem: hundreds of people trying to grab the same seats at the same moment.',
      highlights: [
        'Redis-backed distributed locks keep checkout race-free when inventory gets contested',
        'Session handling over Express REST APIs using JWT and OAuth',
        'Query tuning and pooling that cut API latency noticeably under load',
        'Ships as Docker containers through CI/CD onto Azure',
      ],
      techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Azure'],
      repoUrl: 'https://github.com/Farseel',
    },
    {
      title: 'BMI prediction & health recommendation',
      description:
        'A CNN model that estimates height and weight from an image, then turns those numbers into plain-language health suggestions.',
      highlights: [
        'TensorFlow CNN trained with iterative feature engineering and hyperparameter sweeps',
        'FastAPI inference service, containerised and wired straight into the MERN frontend',
        'Dashboard surfaces health indicators next to the metrics that produced them',
      ],
      techStack: ['React', 'Node.js', 'FastAPI', 'MongoDB', 'TensorFlow', 'Python', 'NumPy', 'Pandas'],
      metrics: [
        { label: 'Weight error', value: '9.8 kg' },
        { label: 'Height error', value: '6.2 cm' },
      ],
      repoUrl: 'https://github.com/Farseel',
    },
  ] as ProjectType[],

  timeline: [
    {
      role: 'Machine Learning Intern',
      company: 'Feather Softwares',
      date: 'Dec 2025 — Jan 2026',
      bullets: [
        'Built predictive models with TensorFlow and scikit-learn, starting from messy raw tables.',
        'Engineered features and cross-validated against precision, recall, F1 and AUC rather than accuracy alone.',
        'Prepped datasets with Pandas and NumPy — learned to distrust data before trusting models.',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'Profenaa Technologies',
      date: 'Jun 2024',
      bullets: [
        'Built responsive interfaces with HTML, CSS and vanilla JavaScript.',
        'Picked up real Git discipline — branching, reviewing, undoing my own mistakes.',
        'Sat in on unit testing and first-pass CI/CD pipeline deployments.',
      ],
    },
  ] as TimelineItemType[],

  certifications: [
    { name: 'Java Certified Foundations Associate', issuer: 'Oracle' },
    { name: 'Java Full Stack', issuer: 'Wipro' },
  ] as CertificationType[],

  education: {
    degree: 'B.Tech Information Technology (Honours)',
    institution: 'Kamaraj College of Engineering and Technology',
    place: 'Madurai',
    duration: '2022 – 2026',
    grade: '8.25',
    gradeLabel: 'CGPA',
  },

  contactInfo: {
    email: 'farseel07@gmail.com',
    phone: '+91 63853 18752',
    location: 'Nagercoil, India',
    github: 'https://github.com/Farseel',
    linkedin: 'https://linkedin.com/in/farseel-m-h',
  },

  contactBlurb:
    "Whether it's a role, an internship, or a project you want a second pair of eyes on — my inbox is open. I usually reply within a day.",
};
