import React from 'react';

interface VBuildLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const VBuildLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="vbuild-primary-gradient" x1="10" y1="10" x2="65" y2="90" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="50%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>

    {/* Left Arm of V (Glow Gradient) */}
    <path
      d="M 22 14 C 24 14 26 15 28 19 L 51 68 C 53 72 56 72 58 68 L 69 44 L 43 14 Z"
      fill="url(#vbuild-primary-gradient)"
    />

    {/* Right Cut Stroke of V */}
    <path
      d="M 52 44 L 70 14 L 84 14 L 64 58 Z"
      className="fill-slate-900 dark:fill-white"
    />

    {/* Top Right Pixel Matrix Blocks */}
    <rect x="76" y="4" width="7" height="7" rx="1.5" className="fill-cyan-400 animate-pulse" />
    <rect x="86" y="4" width="7" height="7" rx="1.5" className="fill-blue-600" />
    <rect x="76" y="14" width="7" height="7" rx="1.5" className="fill-purple-500" />
  </svg>
);

const VBuildLogo: React.FC<VBuildLogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-2.5 group cursor-pointer">
        {/* Crisp Vector SVG Icon Mark */}
        <VBuildLogoIcon className={`${iconSizes[size]} group-hover:scale-105 transition-transform duration-300`} />
        
        {/* Pure Vector Styled Wordmark */}
        <div className="flex flex-col">
          <span className={`font-black tracking-tight font-display text-slate-900 dark:text-white ${textSizes[size]} leading-none flex items-center`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">V</span>
            <span className="text-slate-900 dark:text-white">BUILD</span>
          </span>
        </div>
      </div>

      {showTagline && (
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] font-extrabold text-slate-500 dark:text-slate-400 uppercase mt-1 pl-0.5">
          AUTOMATE <span className="text-indigo-500">•</span> CONNECT <span className="text-cyan-500">•</span> GROW
        </span>
      )}
    </div>
  );
};

export default VBuildLogo;
