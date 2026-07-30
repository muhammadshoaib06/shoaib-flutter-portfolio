import React from 'react';
import type { PersonalInfo } from '../types';
import { Mail, WhatsApp, Download, MessageIcon } from './Icons';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactProps {
  personalInfo: PersonalInfo;
}

const whatsappHref = (phone: string) => {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}`;
};

const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="scroll-mt-24 sm:scroll-mt-28">
      <div className="mb-10 max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-1">
          <span className="section-icon" aria-hidden="true">
            <MessageIcon className="w-5 h-5" />
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
            {t.contact.title}
          </h2>
        </div>
        <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-[image:var(--gradient-brand)]" />
      </div>

      <div
        ref={ref}
        className={`reveal ${visible ? 'visible' : ''} relative overflow-hidden rounded-[1.5rem] border border-[var(--line)] px-6 py-12 sm:px-10 sm:py-14 text-center`}
        style={{ background: 'var(--gradient-card)' }}
      >
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, var(--hero-glow-1), transparent 40%), radial-gradient(circle at 80% 80%, var(--hero-glow-2), transparent 40%)',
          }}
        />
        <div className="relative">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)]">
            {t.contact.heading}
          </h3>
          <p className="mt-4 max-w-xl mx-auto text-[var(--text-muted)] text-base sm:text-lg leading-relaxed">
            {t.contact.body}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary w-full sm:w-auto">
              <Mail className="w-5 h-5" />
              {t.contact.emailMe}
            </a>
            <a
              href={whatsappHref(personalInfo.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto"
            >
              <WhatsApp className="w-5 h-5 text-[#25D366]" />
              {t.contact.whatsapp}
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              {t.contact.downloadCv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
