import type Lenis from 'lenis';

let lenis: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {
  lenis = instance;
};

/** Scroll to a section id, using Lenis when available so easing stays consistent. */
export const scrollToId = (id: string) => {
  if (lenis) {
    lenis.scrollTo(`#${id}`, { offset: -72 });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  }
};

export const scrollToTop = () => {
  if (lenis) {
    lenis.scrollTo(0);
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
