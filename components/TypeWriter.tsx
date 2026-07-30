import React, { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  className?: string;
  startDelayMs?: number;
  speedMs?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  text,
  className = '',
  startDelayMs = 600,
  speedMs = 75,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    const startTimer = window.setTimeout(() => setStarted(true), startDelayMs);
    return () => window.clearTimeout(startTimer);
  }, [startDelayMs, text]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(timer);
        setDone(true);
      }
    }, speedMs);

    return () => window.clearInterval(timer);
  }, [started, text, speedMs]);

  return (
    <span className={className} aria-label={text}>
      {displayed}
      <span className={`type-caret ${done ? 'type-caret-done' : ''}`} aria-hidden="true" />
    </span>
  );
};

export default TypeWriter;
