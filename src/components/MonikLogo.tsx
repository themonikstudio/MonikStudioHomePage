import React from 'react';

interface MonikLogoProps {
  className?: string;
  height?: number;
  light?: boolean;
}

export const MonikLogo: React.FC<MonikLogoProps> = ({
  className = '',
  height = 36,
  light = false,
}) => {
  const fillColor = light ? '#FFFFFF' : '#0F172A';

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        height={height}
        viewBox="0 0 320 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto max-h-[48px] w-auto transition-transform hover:scale-105"
      >
        {/* Letter 'm' */}
        <path
          d="M 15 65 L 15 35 C 15 28 20 22 28 22 C 36 22 41 28 41 35 L 41 65 L 53 65 L 53 35 C 53 28 58 22 66 22 C 74 22 79 28 79 35 L 79 65 L 91 65 L 91 32 C 91 18 80 12 68 12 C 59 12 52 16 47 22 C 43 16 36 12 27 12 C 16 12 15 20 15 25 L 15 65 Z"
          fill={fillColor}
        />

        {/* Letter 'ö' with central eye/sunburst */}
        {/* Sun/Eye Rays over 'o' */}
        <g stroke={fillColor} strokeWidth="4.5" strokeLinecap="round">
          <line x1="128" y1="13" x2="128" y2="5" />
          <line x1="116" y1="17" x2="111" y2="10" />
          <line x1="140" y1="17" x2="145" y2="10" />
          <line x1="107" y1="26" x2="100" y2="23" />
          <line x1="149" y1="26" x2="156" y2="23" />
        </g>

        {/* Outer 'o' circle */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 128 24 C 113.6 24 102 35.6 102 50 C 102 64.4 113.6 76 128 76 C 142.4 76 154 64.4 154 50 C 154 35.6 142.4 24 128 24 Z M 128 35 C 120 35 113 41.7 113 50 C 113 58.3 120 65 128 65 C 136 65 143 58.3 143 50 C 143 41.7 136 35 128 35 Z"
          fill={fillColor}
        />

        {/* Inner pupil circle */}
        <circle cx="128" cy="50" r="6" fill={fillColor} />

        {/* Letter 'n' */}
        <path
          d="M 168 65 L 168 35 C 168 28 173 22 181 22 C 189 22 194 28 194 35 L 194 65 L 206 65 L 206 32 C 206 18 195 12 183 12 C 174 12 167 16 162 22 L 162 14 L 156 14 L 156 65 Z"
          fill={fillColor}
        />

        {/* Letter 'i' */}
        <path
          d="M 220 22 L 232 22 L 232 65 L 220 65 Z M 226 8 C 229.8 8 233 11.2 233 15 C 233 18.8 229.8 22 226 22 C 222.2 22 219 18.8 219 15 C 219 11.2 222.2 8 226 8 Z"
          fill={fillColor}
        />

        {/* Letter 'k' */}
        <path
          d="M 245 5 L 257 5 L 257 32 L 275 14 L 291 14 L 271 34 L 293 65 L 277 65 L 261 42 L 257 46 L 257 65 L 245 65 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
