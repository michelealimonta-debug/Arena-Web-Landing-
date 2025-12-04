import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
  /**
   * Se vuoi usare un file immagine reale (es. logo.png caricato nella cartella public),
   * passa il percorso qui (es. "/logo.png").
   */
  imageSrc?: string; 
}

export const ArenaLogo: React.FC<LogoProps> = ({ className = "w-32 h-32", color = "currentColor", imageSrc }) => {
  
  // Se è stato fornito un file immagine, mostra quello invece del disegno SVG
  if (imageSrc) {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <img 
          src={imageSrc} 
          alt="Arena Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Altrimenti mostra la ricostruzione vettoriale (SVG)
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* 
        Arena Logo Recreation 
        Concept: Stone block with strata layers (Hill shape)
      */}
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto mb-3">
        <mask id="strata-mask">
          <rect width="100" height="100" fill="white" />
          {/* Cut lines - creating the 4 layers. The curves mimic the hill shape (apex in center) */}
          <path d="M-10 42 Q 50 28 110 46" stroke="black" strokeWidth="4" fill="none" />
          <path d="M-10 57 Q 50 43 110 61" stroke="black" strokeWidth="4" fill="none" />
          <path d="M-10 72 Q 50 58 110 76" stroke="black" strokeWidth="4" fill="none" />
        </mask>
        
        {/* Main Silhouette */}
        <path 
          d="M 10 25 L 40 8 Q 65 15 90 35 V 82 Q 50 68 10 82 Z" 
          fill={color} 
          mask="url(#strata-mask)"
        />
      </svg>
      
      {/* Typography - Bold Sans Serif */}
      <h1 className="font-sans font-black tracking-[0.1em] text-5xl md:text-6xl uppercase text-center leading-none" style={{ color }}>
        Arena
      </h1>
    </div>
  );
};