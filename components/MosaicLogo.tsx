import React from 'react';

interface LogoProps {
  className?: string;
}

export const MosaicLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`text-center leading-none ${className}`}>
      <div className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tighter">
        <span className="italic mr-2">M</span>arble
      </div>
      <div className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tighter my-2">
        <span className="italic mr-2">M</span>osaic
      </div>
      <div className="font-serif font-light text-5xl md:text-7xl lg:text-8xl tracking-tighter">
        <span className="italic mr-2">A</span>rt
      </div>
    </div>
  );
};