import React, { useRef, useCallback, useEffect } from 'react';
import './BorderGlow.css';

interface BorderGlowProps {
  children?: React.ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string; // HSL format: "H S L" (e.g. "136 56 40")
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
}

function parseHSL(hslStr: string) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 210, s: 85, l: 60 }; // Fallback to blue
  return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
}

function buildGlowVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
  const vars: Record<string, string> = {};
  for (let i = 0; i < opacities.length; i++) {
    vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`;
  }
  return vars;
}

const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
const GRADIENT_KEYS = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven'];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(colors: string[]) {
  const vars: Record<string, string> = {};
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    vars[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`;
  }
  vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

function easeOutCubic(x: number) { return 1 - Math.pow(1 - x, 3); }
function easeInCubic(x: number) { return x * x * x; }

interface AnimateValueOptions {
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
  ease?: (x: number) => number;
  onUpdate: (v: number) => void;
  onEnd?: () => void;
}

function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }: AnimateValueOptions) {
  const t0 = performance.now() + delay;
  function tick() {
    const elapsed = performance.now() - t0;
    const t = Math.min(elapsed / duration, 1);
    onUpdate(start + (end - start) * ease(t));
    if (t < 1) requestAnimationFrame(tick);
    else if (onEnd) onEnd();
  }
  setTimeout(() => requestAnimationFrame(tick), delay);
}

const BorderGlow: React.FC<BorderGlowProps> = ({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '210 85 55', // Blue default
  backgroundColor = '#0d1127',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1.0,
  coneSpread = 25,
  animated = false,
  colors = ['#1e4ed8', '#3b82f6', '#38bdf8'], // Royal Blue, Electric Blue, Sky Blue
  fillOpacity = 0.0, // Glow only on borders by default
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const targetProximity = useRef(0);
  const currentProximity = useRef(0);
  const targetAngle = useRef(45);
  const currentAngle = useRef(45);
  const animFrame = useRef<number | null>(null);
  const isPointerOver = useRef(false);

  const getCenterOfElement = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const getEdgeProximity = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    let kx = Infinity;
    let ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  }, [getCenterOfElement]);

  const getCursorAngle = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenterOfElement(el);
    const dx = x - cx;
    const dy = y - cy;
    if (dx === 0 && dy === 0) return 0;
    const radians = Math.atan2(dy, dx);
    let degrees = radians * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    return degrees;
  }, [getCenterOfElement]);

  const updateGlow = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    // smooth lerp interpolation: lower factor = smoother/slower catch up
    const lerpFactor = 0.08;
    currentProximity.current += (targetProximity.current - currentProximity.current) * lerpFactor;

    // Angle interpolation handling boundary wraps
    let diff = targetAngle.current - currentAngle.current;
    while (diff < -180) diff += 360;
    while (diff > 180) diff -= 360;
    currentAngle.current += diff * lerpFactor;

    if (currentAngle.current < 0) currentAngle.current += 360;
    if (currentAngle.current >= 360) currentAngle.current -= 360;

    card.style.setProperty('--edge-proximity', currentProximity.current.toFixed(3));
    card.style.setProperty('--cursor-angle', `${currentAngle.current.toFixed(3)}deg`);

    const proximityError = Math.abs(targetProximity.current - currentProximity.current);
    const angleError = Math.abs(diff);

    // Continue loop if pointer is over, or values are still transitioning
    if (isPointerOver.current || proximityError > 0.01 || angleError > 0.01) {
      animFrame.current = requestAnimationFrame(updateGlow);
    } else {
      animFrame.current = null;
    }
  }, []);

  const handlePointerEnter = useCallback(() => {
    isPointerOver.current = true;
    if (animFrame.current === null) {
      animFrame.current = requestAnimationFrame(updateGlow);
    }
  }, [updateGlow]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const edge = getEdgeProximity(card, x, y);
    const angle = getCursorAngle(card, x, y);

    targetProximity.current = edge * 100;
    targetAngle.current = angle;

    if (animFrame.current === null) {
      animFrame.current = requestAnimationFrame(updateGlow);
    }
  }, [getEdgeProximity, getCursorAngle, updateGlow]);

  const handlePointerLeave = useCallback(() => {
    isPointerOver.current = false;
    targetProximity.current = 0;
    if (animFrame.current === null) {
      animFrame.current = requestAnimationFrame(updateGlow);
    }
  }, [updateGlow]);

  useEffect(() => {
    return () => {
      if (animFrame.current !== null) {
        cancelAnimationFrame(animFrame.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!animated || !cardRef.current) return;
    const card = cardRef.current;
    const angleStart = 110;
    const angleEnd = 465;
    card.classList.add('sweep-active');
    card.style.setProperty('--cursor-angle', `${angleStart}deg`);

    animateValue({ duration: 500, onUpdate: v => card.style.setProperty('--edge-proximity', v.toFixed(3)) });
    animateValue({ ease: easeInCubic, duration: 1500, end: 50, onUpdate: v => {
      card.style.setProperty('--cursor-angle', `${((angleEnd - angleStart) * (v / 100) + angleStart).toFixed(3)}deg`);
    }});
    animateValue({ ease: easeOutCubic, delay: 1500, duration: 2250, start: 50, end: 100, onUpdate: v => {
      card.style.setProperty('--cursor-angle', `${((angleEnd - angleStart) * (v / 100) + angleStart).toFixed(3)}deg`);
    }});
    animateValue({ ease: easeInCubic, delay: 2500, duration: 1500, start: 100, end: 0,
      onUpdate: v => card.style.setProperty('--edge-proximity', v.toFixed(3)),
      onEnd: () => card.classList.remove('sweep-active'),
    });
  }, [animated]);

  const glowVars = buildGlowVars(glowColor, glowIntensity);

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`border-glow-card ${className}`}
      style={{
        '--card-bg': backgroundColor,
        '--edge-sensitivity': String(edgeSensitivity),
        '--border-radius': `${borderRadius}px`,
        '--glow-padding': `${glowRadius}px`,
        '--cone-spread': String(coneSpread),
        '--fill-opacity': String(fillOpacity),
        ...glowVars,
        ...buildGradientVars(colors),
      } as React.CSSProperties}
    >
      <span className="edge-light" />
      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
};

export default BorderGlow;
