import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Part */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <span className="text-xl font-bold font-sans tracking-tighter z-10 flex">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-silver-200 to-silver-400 drop-shadow-sm -mr-1">M</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-gold to-yellow-700 drop-shadow-sm">S</span>
        </span>
      </div>
      
      {/* Text Part */}
      {!iconOnly && (
        <div className="flex flex-col">
          <span className="text-white font-bold tracking-widest text-sm leading-tight">MOORTI</span>
          <span className="text-silver-200 font-medium tracking-widest text-xs leading-tight">SCREENS</span>
        </div>
      )}
    </div>
  );
};
