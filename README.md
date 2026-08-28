# Farseel M H — Portfolio

My personal portfolio. Editorial design: warm charcoal background, cream type, a
single brass accent, and a Fraunces / Hanken Grotesk / IBM Plex Mono type stack.
Built by hand in React + TypeScript with Tailwind CSS and Lenis for smooth scrolling.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS 3**
- **Framer Motion** — quiet fade-up animations only
- **Lenis** — smooth scrolling
- **Lucide** icons (sparingly)

## Run locally

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build
npm run preview  # serve the production build
```

## Structure

```
src/
├── App.tsx                  # Shell + Lenis setup
├── sections/                # Navbar, Hero, About, Projects, Experience,
│                            # Credentials, Contact, Footer
├── components/
│   └── SectionHeader.tsx    # Shared numbered section header
├── lib/
│   ├── scroll.ts            # Lenis singleton + scroll helpers
│   └── motion.ts            # Shared easing / fade-up presets
└── constants/
    └── portfolioData.ts     # All copy and content lives here
```

The contact form composes an email in the visitor's own mail client via `mailto:` —
no backend, nothing fake.
