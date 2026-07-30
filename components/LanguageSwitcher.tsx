import React, { useEffect, useRef, useState } from 'react';
import { locales } from '../i18n';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-switcher-btn"
        aria-label={t.language}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-switcher-code">{current.code.toUpperCase()}</span>
        <span className="lang-switcher-label">{current.nativeLabel}</span>
        <span className={`lang-switcher-chevron ${open ? 'is-open' : ''}`} aria-hidden="true">▾</span>
      </button>

      {open && (
        <div className="lang-switcher-menu" role="listbox" aria-label={t.language}>
          {locales.map((item) => (
            <button
              key={item.code}
              type="button"
              role="option"
              aria-selected={item.code === locale}
              className={`lang-switcher-option ${item.code === locale ? 'is-active' : ''}`}
              onClick={() => {
                setLocale(item.code);
                setOpen(false);
              }}
            >
              <span className="lang-switcher-option-code">{item.code.toUpperCase()}</span>
              <span>
                <span className="block font-semibold leading-tight">{item.nativeLabel}</span>
                <span className="block text-xs opacity-70">{item.label}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
