import React from 'react';

interface TCBLogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: 'full' | 'compact' | 'shield-only';
}

export const TCBLogo: React.FC<TCBLogoProps> = ({ 
  width = 240, 
  height = 80, 
  className = '',
  variant = 'full'
}) => {
  if (variant === 'shield-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img 
          src="https://v3.fal.media/files/koala/SQ7UnPu6w5E-rS6-lhapj_output.png" 
          alt="TCB Logo" 
          width={width}
          height={height}
          className="rounded-md object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <img 
        src="https://v3.fal.media/files/koala/SQ7UnPu6w5E-rS6-lhapj_output.png" 
        alt="TCB Logo" 
        width={height}
        height={height}
        className="rounded-md object-contain flex-shrink-0"
      />
      
      {/* Company Text */}
      <div className="flex flex-col">
        <div className="text-[#B8860B] font-bold tracking-wide" style={{ fontSize: `${height * 0.35}px` }}>
          TradeCreditBancorp
        </div>
        <div className="text-[#B8860B] font-medium tracking-wider opacity-80" style={{ fontSize: `${height * 0.2}px` }}>
          Global Trade. Trusted Finance.
        </div>
      </div>
    </div>
  );
};

export default TCBLogo;