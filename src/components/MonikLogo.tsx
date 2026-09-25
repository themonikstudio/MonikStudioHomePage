import React from 'react';

interface MonikLogoProps {
  variant?: 'full' | 'horizontal' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: string;
  studioColor?: string;
  theme?: 'light' | 'dark';
}

export const MonikCubeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 36, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Monik Studio Icon"
    >
      {/* Top Diamond Face in Terracotta / Coral */}
      <polygon points="50,14 82,31.5 50,49 18,31.5" fill="#D86950" />
      {/* Hollow interior cutout for clean geometric border effect */}
      <polygon points="50,22.5 72,34.5 50,45.5 28,34.5" fill="#FAF8F5" />

      {/* Left Column Face in Muted Sage Green */}
      <polygon points="18,34 50,51 50,88 18,71" fill="#779585" />

      {/* Right Column Face in Golden Ochre / Sand */}
      <polygon points="50,51 82,34 82,71 50,88" fill="#CDB07B" />

      {/* Central stylized 3D 'M' in Dark Graphite */}
      <polygon points="28,44 38,49.5 38,78 28,73" fill="#24282C" />
      <polygon points="72,44 62,49.5 62,78 72,73" fill="#24282C" />
      <polygon points="38,49.5 50,57 62,49.5 62,59 50,66.5 38,59" fill="#24282C" />
      <polygon points="50,73.5 60,79 50,84.5 40,79" fill="#24282C" />
    </svg>
  );
};

export const MonikLogo: React.FC<MonikLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  textColor,
  studioColor,
  theme = 'light',
}) => {
  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 48,
    xl: 64,
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const currentIconSize = iconSizes[size];
  const finalMonikColor = textColor || (theme === 'dark' ? 'text-white' : 'text-[#24282C]');
  const finalStudioColor = studioColor || (theme === 'dark' ? 'text-[#CDB07B]' : 'text-[#779585]');

  if (variant === 'icon-only') {
    return <MonikCubeIcon size={currentIconSize} className={className} />;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        <div className="p-3 bg-white/80 rounded-2xl shadow-2xs border border-[#EBE5DB]">
          <MonikCubeIcon size={currentIconSize} />
        </div>
        <div className="mt-2.5 flex items-baseline gap-1.5 font-['Outfit']">
          <span className={`font-extrabold tracking-tight ${textSizes[size]} ${finalMonikColor}`}>
            Monik
          </span>
          <span className={`font-medium tracking-normal ${textSizes[size]} ${finalStudioColor}`}>
            Studio
          </span>
        </div>
      </div>
    );
  }

  // Horizontal layout (standard for Navbar & Footer)
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <MonikCubeIcon size={currentIconSize} />
      <div className="flex items-baseline gap-1.5 font-['Outfit']">
        <span className={`font-extrabold tracking-tight ${textSizes[size]} ${finalMonikColor}`}>
          Monik
        </span>
        <span className={`font-medium tracking-normal ${textSizes[size]} ${finalStudioColor}`}>
          Studio
        </span>
      </div>
    </div>
  );
};
