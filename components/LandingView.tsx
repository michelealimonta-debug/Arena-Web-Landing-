import React from 'react';
import { ArenaLogo } from './ArenaLogo';
import { Button } from './Button';
import { ARENA_CONTENT } from '../constants';

interface LandingViewProps {
  onDiscover: () => void;
  isVisible: boolean;
}

export const LandingView: React.FC<LandingViewProps> = ({ onDiscover, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative animate-fade-in">
      
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-arena-beige rounded-full blur-[100px]"></div>
      </div>

      <main className="max-w-4xl w-full flex flex-col items-center text-center space-y-12">
        
        {/* Logo Section */}
        <div className="transform transition-all duration-1000 ease-out">
            {/* 
              COME CAMBIARE IL LOGO:
              1. Carica il tuo file (es. 'logo.png') nella cartella 'public' di CodeSandbox.
              2. Modifica la riga sotto aggiungendo: imageSrc="/logo.png"
              Esempio: <ArenaLogo className="..." imageSrc="/logo.png" />
            */}
            <ArenaLogo className="w-48 h-auto md:w-64" />
        </div>

        {/* Tagline */}
        <div className="space-y-6">
            <p className="font-serif italic text-2xl md:text-3xl text-arena-stone">
                — {ARENA_CONTENT.tagline}
            </p>
            
            <div className="w-16 h-[1px] bg-arena-dark mx-auto my-8 opacity-50"></div>

            {/* Description */}
            <p className="font-sans text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-arena-dark/90">
                {ARENA_CONTENT.description}
            </p>
        </div>

        {/* Call to Action */}
        <div className="pt-8">
            <Button onClick={onDiscover} icon>
                Scopri Marble Mosaic Art
            </Button>
        </div>
      </main>

      <footer className="absolute bottom-6 text-xs tracking-widest text-arena-stone uppercase opacity-60">
        Website Coming Soon
      </footer>
    </div>
  );
};