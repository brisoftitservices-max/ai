import React from 'react';

interface BrisoftLogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  variant?: 'full' | 'icon-only';
  iconSize?: number;
}

export const BrisoftLogo: React.FC<BrisoftLogoProps> = ({
  className = '',
  showText = true,
  textClassName = '',
  variant = 'full',
  iconSize = 44
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem */}
      <div 
        className="relative flex-shrink-0 flex items-center justify-center"
        style={{ width: iconSize, height: Math.round(iconSize * 1.15) }}
      >
        <img
          src="/logo.svg"
          alt="Brisoft IT Services Logo"
          width={iconSize}
          height={Math.round(iconSize * 1.15)}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(240,90,40,0.15)]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback to png if svg fails
            e.currentTarget.src = '/logo.png';
          }}
        />
      </div>

      {/* Brand Name Typography */}
      {showText && variant === 'full' && (
        <div className={`flex flex-col leading-none ${textClassName}`}>
          <div className="flex items-center tracking-tight font-extrabold text-xl font-heading text-white">
            <span>BRI</span>
            <span className="text-[#F05A28]">SOFT</span>
          </div>
          <span className="text-[10px] uppercase font-semibold tracking-[0.22em] text-cyan-200/70 mt-1">
            IT Services
          </span>
        </div>
      )}
    </div>
  );
};
