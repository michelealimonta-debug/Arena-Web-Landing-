import React, { useEffect, useState } from 'react';
import { X, Globe } from 'lucide-react';
import { MosaicLogo } from './MosaicLogo';
import { Button } from './Button';
import { MOSAIC_CONTENT } from '../constants';

interface MosaicViewProps {
  onClose: () => void;
  isVisible: boolean;
}

export const MosaicView: React.FC<MosaicViewProps> = ({ onClose, isVisible }) => {
  const [activeImage, setActiveImage] = useState(0);

  // Simulated mosaic texture images (using placeholder with specific tones)
  // In a real app, these would be the actual product close-ups
  const mosaicImages = [
    "https://picsum.photos/seed/stone1/800/1000",
    "https://picsum.photos/seed/marble2/800/1000",
    "https://picsum.photos/seed/granite3/800/1000"
  ];

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
        setActiveImage(prev => (prev + 1) % mosaicImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible, mosaicImages.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-arena-dark text-arena-light overflow-y-auto animate-slide-up">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-2 rounded-full border border-arena-light/20 hover:bg-arena-light hover:text-arena-dark transition-colors duration-300"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Panel: Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
            
            <div className="mb-12">
                <span className="text-arena-clay text-sm uppercase tracking-[0.2em] font-bold">
                    Collezione 001
                </span>
            </div>

            <MosaicLogo className="mb-12 text-arena-beige" />

            <div className="space-y-8 max-w-xl">
                <h3 className="font-serif text-2xl md:text-3xl text-arena-light leading-snug">
                    Unione di tecnologia e bellezza geologica.
                </h3>
                <p className="font-sans text-lg text-arena-light/80 leading-relaxed font-light">
                    {MOSAIC_CONTENT.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-arena-light/10">
                    <div>
                        <span className="block text-4xl font-serif text-arena-clay mb-2">1x1</span>
                        <span className="text-xs uppercase tracking-widest text-arena-stone">Dimensione Tessera (cm)</span>
                    </div>
                    <div>
                        <span className="block text-4xl font-serif text-arena-clay mb-2">∞</span>
                        <span className="text-xs uppercase tracking-widest text-arena-stone">Possibilità creative</span>
                    </div>
                </div>

                <div className="pt-8">
                   <a href="mailto:info@arena-stone.it" className="inline-block">
                        <Button variant="outline" className="border-arena-light text-arena-light hover:bg-arena-light hover:text-arena-dark">
                            Contattaci per info
                        </Button>
                   </a>
                </div>
            </div>
        </div>

        {/* Right Panel: Visuals */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 bg-black overflow-hidden relative">
            {/* Image Carousel */}
            {mosaicImages.map((src, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === activeImage ? 'opacity-70' : 'opacity-0'}`}
                >
                    <img 
                        src={src} 
                        alt="Marble Mosaic Detail" 
                        className="w-full h-full object-cover scale-110 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
                    />
                </div>
            ))}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-arena-dark via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-arena-dark opacity-90"></div>

            {/* Floating Detail Label */}
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 flex items-center gap-4 text-arena-light/80">
                <Globe className="w-5 h-5 animate-spin-slow" />
                <span className="text-xs uppercase tracking-widest">Natural Stone Source</span>
            </div>
        </div>

      </div>
    </div>
  );
};