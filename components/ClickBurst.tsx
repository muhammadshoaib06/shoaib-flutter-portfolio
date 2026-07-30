import React, { useCallback, useEffect, useState } from 'react';

interface BurstDot {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  size: number;
  color: string;
  duration: number;
}

const COLORS = ['#0a8ec9', '#14b8a6', '#38bdf8', '#046a9e', '#2dd4bf', '#67e8f9'];

let nextId = 0;

const ClickBurst: React.FC = () => {
  const [dots, setDots] = useState<BurstDot[]>([]);

  const spawnBurst = useCallback((clientX: number, clientY: number) => {
    const count = 10 + Math.floor(Math.random() * 6);
    const created: BurstDot[] = Array.from({ length: count }, (_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.45;
      return {
        id: nextId++,
        x: clientX,
        y: clientY,
        angle,
        distance: 48 + Math.random() * 70,
        size: 4 + Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        duration: 550 + Math.random() * 350,
      };
    });

    setDots((prev) => [...prev, ...created]);

    const maxDuration = Math.max(...created.map((d) => d.duration));
    window.setTimeout(() => {
      setDots((prev) => prev.filter((d) => !created.some((c) => c.id === d.id)));
    }, maxDuration + 40);
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('a, button, input, textarea, select, label')) {
        // Still show burst, but keep interactions intact
      }
      spawnBurst(event.clientX, event.clientY);
    };

    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [spawnBurst]);

  if (dots.length === 0) return null;

  return (
    <div className="click-burst-layer" aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="click-burst-dot"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            background: dot.color,
            boxShadow: `0 0 10px ${dot.color}`,
            // @ts-expect-error CSS custom properties
            '--burst-x': `${Math.cos(dot.angle) * dot.distance}px`,
            '--burst-y': `${Math.sin(dot.angle) * dot.distance}px`,
            '--burst-duration': `${dot.duration}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default ClickBurst;
