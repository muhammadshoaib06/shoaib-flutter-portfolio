import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

const FlutterLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 256 317" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#47C5FB" d="M157.7 0 0 157.7h95.3L206.1 46.9z" />
    <path fill="#47C5FB" d="M114.7 220.3l43.8 43.8 97.6-97.6-43.8-43.8z" />
    <path fill="#00569F" d="M114.7 220.3l43.8-43.8 43.8 43.8-43.8 43.8z" />
    <path fill="#00B5F8" d="M158.5 264.1 202.3 220.3 246.1 264.1 206.1 308z" />
  </svg>
);

const DartLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#00C4B3" d="M65.1 48.9 128 20.5l62.9 28.4v56.7L128 133.9 65.1 105.6z" />
    <path fill="#0081C6" d="M65.1 105.6 128 133.9v101.6L65.1 207.1z" />
    <path fill="#00A9E0" d="M190.9 105.6v101.5L128 235.5V133.9z" />
    <path fill="#00C4B3" d="m128 20.5 62.9 28.4L128 77.3z" />
  </svg>
);

const AndroidLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#3DDC84" d="M17.523 15.341a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm-11.046 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM15.95 8.2l1.68-2.91a.4.4 0 0 0-.69-.4l-1.71 2.96A8.7 8.7 0 0 0 12 7.4c-1.11 0-2.17.2-3.14.55L7.15 4.99a.4.4 0 1 0-.69.4L8.14 8.3A8.36 8.36 0 0 0 3.6 15.2h16.8a8.36 8.36 0 0 0-4.45-7z" />
  </svg>
);

const AppleLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const FirebaseLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#FFCA28" d="M4.5 20.5 6.9 3.8c.1-.6.9-.8 1.3-.3L12 8.4z" />
    <path fill="#FFA000" d="m4.5 20.5 12.1-7.3-3.4-6.5c-.3-.5-1-.5-1.3 0z" />
    <path fill="#F57C00" d="M4.5 20.5 16.6 13.2 14.8 3.4c-.1-.6-.9-.8-1.3-.2z" />
    <path fill="#FFA000" d="m4.5 20.5 14.1-1.1c.7-.1 1-.9.5-1.4L16.6 13.2z" />
  </svg>
);

const GitLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#F05032" d="M23.15 9.68 14.32.84a2.86 2.86 0 0 0-4.04 0L8.3 2.82l3.34 3.34c.78-.28 1.67-.1 2.29.52.63.63.8 1.55.5 2.34l3.22 3.22c.79-.3 1.71-.13 2.34.5a2.3 2.3 0 0 1 0 3.24 2.3 2.3 0 0 1-3.24 0 2.3 2.3 0 0 1-.52-2.49L13.1 9.38v7.04c.2.1.4.24.55.4a2.3 2.3 0 0 1 0 3.24 2.3 2.3 0 0 1-3.24 0 2.3 2.3 0 0 1 0-3.24c.2-.2.43-.35.68-.45V9.2c-.25-.1-.48-.25-.68-.45a2.3 2.3 0 0 1-.4-2.53L6.87 3.24.85 9.26a2.86 2.86 0 0 0 0 4.04l8.84 8.84a2.86 2.86 0 0 0 4.04 0l8.42-8.42a2.86 2.86 0 0 0 0-4.04z" />
  </svg>
);

const GraphQLLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#E10098" d="M12 2.2 3.5 7.1v9.8L12 21.8l8.5-4.9V7.1L12 2.2zm0 1.7 6.8 3.9v7.8L12 19.5l-6.8-3.9V7.8L12 3.9z" />
    <circle cx="12" cy="4.2" r="1.2" fill="#E10098" />
    <circle cx="12" cy="19.8" r="1.2" fill="#E10098" />
    <circle cx="4.3" cy="8.5" r="1.2" fill="#E10098" />
    <circle cx="19.7" cy="8.5" r="1.2" fill="#E10098" />
    <circle cx="4.3" cy="15.5" r="1.2" fill="#E10098" />
    <circle cx="19.7" cy="15.5" r="1.2" fill="#E10098" />
  </svg>
);

const KotlinLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="kotlinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E44857" />
        <stop offset="50%" stopColor="#C711E1" />
        <stop offset="100%" stopColor="#7F52FF" />
      </linearGradient>
    </defs>
    <path fill="url(#kotlinGrad)" d="M2 2h10L2 12zm0 20L12 12l10 10zm10-10L22 2H12z" />
  </svg>
);

const SwiftLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#F05138" d="M20.3 16.7c-1.7 2.5-4.5 4.1-7.5 4.3-1.4.1-2.8-.2-4.1-.7 2.4-.1 4.6-1.1 6.3-2.8 1.4-1.4 2.3-3.2 2.5-5.1.9 1.6 1.8 3.4 2.8 5.3zm-2.1-8.6C15.7 5.1 12.4 2.9 8.6 2.5c2 .9 3.8 2.2 5.2 3.9 1.3 1.5 2.2 3.3 2.5 5.3.7-.7 1.3-1.6 1.9-2.6zM4.6 18.2c2.1 1.6 4.7 2.4 7.3 2.3-3.5-1.7-6.2-4.8-7.3-8.6-.3 2.2.1 4.5 1.5 6.3zm9.1-4.4c-.8-1.7-2.1-3.1-3.7-4.1C8.4 8.7 6.6 8.1 4.8 8c1.8 2.1 3.2 4.5 4 7.1.4 1.3.6 2.6.6 3.9 1.8-1.3 3.2-3.1 4.3-5.2z" />
  </svg>
);

const FigmaLogo: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill="#F24E1E" d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8z" />
    <path fill="#A259FF" d="M4 12a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4z" />
    <path fill="#1ABCFE" d="M12 4h4a4 4 0 1 1 0 8h-4z" />
    <path fill="#0ACF83" d="M12 12h4a4 4 0 1 1 0 8h-4z" />
    <path fill="#FF7262" d="M8 0h4v8H8a4 4 0 1 1 0-8z" />
  </svg>
);

const logos = [
  { id: 'flutter', Icon: FlutterLogo, className: 'tech-logo tech-logo-1' },
  { id: 'dart', Icon: DartLogo, className: 'tech-logo tech-logo-2' },
  { id: 'android', Icon: AndroidLogo, className: 'tech-logo tech-logo-3' },
  { id: 'ios', Icon: AppleLogo, className: 'tech-logo tech-logo-4 tech-logo-muted' },
  { id: 'firebase', Icon: FirebaseLogo, className: 'tech-logo tech-logo-5' },
  { id: 'git', Icon: GitLogo, className: 'tech-logo tech-logo-6' },
  { id: 'graphql', Icon: GraphQLLogo, className: 'tech-logo tech-logo-7' },
  { id: 'kotlin', Icon: KotlinLogo, className: 'tech-logo tech-logo-8' },
  { id: 'swift', Icon: SwiftLogo, className: 'tech-logo tech-logo-9' },
  { id: 'figma', Icon: FigmaLogo, className: 'tech-logo tech-logo-10' },
  { id: 'flutter-2', Icon: FlutterLogo, className: 'tech-logo tech-logo-11' },
  { id: 'firebase-2', Icon: FirebaseLogo, className: 'tech-logo tech-logo-12' },
];

const TechBackground: React.FC = () => {
  return (
    <div className="tech-bg" aria-hidden="true">
      {logos.map(({ id, Icon, className }) => (
        <span key={id} className={className}>
          <Icon />
        </span>
      ))}
    </div>
  );
};

export default TechBackground;
