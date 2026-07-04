# 🔬 Obsidian Charcoal & Emerald Green Portfolio

[![React](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vite.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF69B4?logo=framer&logoColor=white&style=flat-square)](https://www.framer.com/motion/)
[![Lenis](https://img.shields.io/badge/Lenis_Scroll-1.1-2FA84F?style=flat-square)](https://github.com/darkroomengineering/lenis)
[![Oxlint](https://img.shields.io/badge/Oxlint-Fast-orange?style=flat-square)](https://oxc.rs)

Welcome to the repository of **Farseel M H's Professional Portfolio**. This web application is a bespoke, premium portfolio designed with a modern **Laboratory / Chemistry Lab / Scientific Research** theme. Built using React, TypeScript, TailwindCSS, and Framer Motion, it features a sleek dark mode color palette (Obsidian Charcoal `#0B0B0B` & Emerald Green `#2FA84F`) accompanied by high-end animations and interactive components.

---

## 🎨 Design & Aesthetic Highlights

- **Obsidian Charcoal & Emerald Green Color Palette:** Designed with deep charcoal backdrops and vibrant emerald accents reflecting a clean, modern lab theme.
- **Dynamic Chemical Bond Background Particle System:** An interactive canvas background that renders atomic node elements (`C`, `H`, `O`, `N`, `Cl`, etc.) which form dynamic covalent bonds (lines) based on proximity.
- **Kinetic Smooth Scroll (Lenis):** Integrated with Lenis smooth scroll physics, creating a high-end, responsive scrolling experience.
- **Custom Lagging Spring Cursor Particle:** A custom-rendered cursor particle that follows the user's cursor with physics-based drag-and-spring lag.
- **Periodic Table Skill Compound Grid:** Skill categories styled as elements in a chemical grid structure, complete with symbols (e.g., `Lg` for Languages, `Ml` for Machine Learning, `Do` for DevOps).
- **Digital LCD Metrics Panels:** Feature cards configured with digital style readout panels showcasing project evaluation metrics (e.g., Mean Absolute Error calculations).

---

## 💻 Tech Stack & Dependencies

### Core Architecture
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite 8
- **Styling:** TailwindCSS (v3) & Autoprefixer
- **Linter:** Oxlint (Oxc fast linting system)

### Interactive & Motion Library
- **Framer Motion:** Staggered list animations, spring transition effects, and smooth card transitions.
- **Lenis Scroll:** Kinetic viewport smooth scrolling.
- **Lucide React:** Modern, scalable vector icons.
- **React Intersection Observer:** Lazy triggers that execute entering animations only when elements enter the viewport.

---

## 📁 Repository Structure

```text
portfolio/
├── public/                 # Static asset delivery (favicon, vector icons)
├── src/
│   ├── assets/             # Brand logos & background images
│   ├── components/         # Reusable global interactive elements
│   │   ├── CustomCursor.tsx    # Lagging spring-physics cursor follower
│   │   └── ScrollProgress.tsx  # Top scroll percentage indicator gauge
│   ├── constants/          # Application data store
│   │   └── portfolioData.ts    # Main JSON payload containing projects, timeline, skills, and contact data
│   ├── sections/           # Section layouts
│   │   ├── Navbar.tsx          # Fixed floating interactive navbar
│   │   ├── Hero.tsx            # Main viewport with chemical bonds background canvas
│   │   ├── About.tsx           # Periodic table skill matrix & bio
│   │   ├── Projects.tsx        # Dashboard layouts and ML metrics cards
│   │   ├── Timeline.tsx        # Chronological interactive experience timeline
│   │   ├── Certifications.tsx  # Academic details & credentials
│   │   ├── Contact.tsx         # Premium form layout with dispatch verification feedback
│   │   └── Footer.tsx          # Brand footer with scroll-to-top handler
│   ├── App.tsx             # Lenis configuration and section layouts wrapper
│   ├── main.tsx            # DOM initialization entrypoint
│   └── index.css           # Global custom classes, noise layer, and scrollbars
├── index.html              # Main HTML entrypoint with metadata & SEO configuration
├── package.json            # Scripts and package manifests
├── tailwind.config.js      # Custom theme setup (Obsidian Charcoal, Emerald Green)
└── tsconfig.json           # Type parameters and module resolution configurations
```

---

## 🚀 Getting Started & Installation

To run this project locally, execute the following commands in your terminal:

### 1. Clone the Repository
```bash
git clone https://github.com/Farseel/portfolio.git
cd portfolio
```

### 2. Install Dependencies
Ensure you have [Node.js](https://nodejs.org) installed on your machine.
```bash
npm install
```

### 3. Run Development Server
Spins up the Vite development server with Hot Module Replacement (HMR).
```bash
npm run dev
```
Open your browser and visit `http://localhost:5173`.

### 4. Build and Preview Production Release
To compile the TypeScript code and package the optimized distribution bundle:
```bash
npm run build
npm run preview
```

---

## 👤 Developer Profile Summary: Farseel M H

A Full Stack Developer & Machine Learning Engineer based in India, specializing in building high-performance web systems and deploying intelligent, data-driven ML models.

### Technical Expertise
* **Languages:** JavaScript (ES6+), TypeScript, Python, Java, C
* **Frontend:** React.js, Angular, HTML5, CSS3, Responsive Design
* **Backend:** Node.js, Express.js, FastAPI, REST APIs, JWT, OAuth
* **Databases:** PostgreSQL, MongoDB, Redis, SQL
* **Machine Learning:** TensorFlow, Scikit-learn, CNNs, NumPy, Pandas, Feature Engineering, Model Deployment
* **Cloud & DevOps:** Docker, Microsoft Azure, CI/CD Pipelines, Git, GitHub, GitLab
* **Engineering Principles:** System Design, OOP, Data Structures & Algorithms, Performance Optimization

### Featured Projects Documented
1. **High-Concurrency Event Ticketing System**
   - *Description:* Distributed ticketing platform capable of handling intense traffic surges.
   - *Key Engineering:* Express.js APIs, Redis distributed locking to prevent race conditions, PostgreSQL optimization, Docker containerization, Azure CI/CD.
2. **BMI Prediction & Health Recommendation System**
   - *Description:* Intelligent healthcare portal powered by deep learning.
   - *Key Engineering:* TensorFlow CNN architectures, FastAPI endpoints, Python feature engineering pipelines, React dashboard indicators.

---

## 📬 Connect with Me

- **Email:** [farseel07@gmail.com](mailto:farseel07@gmail.com)
- **LinkedIn:** [linkedin.com/in/farseel-m-h](https://linkedin.com/in/farseel-m-h)
- **GitHub:** [github.com/Farseel](https://github.com/Farseel)
- **Phone:** +91 63853 18752
- **Location:** Nagercoil, India
