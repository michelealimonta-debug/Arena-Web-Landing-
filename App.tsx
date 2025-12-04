import React, { useState } from 'react';
import { LandingView } from './components/LandingView';
import { MosaicView } from './components/MosaicView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>(ViewState.LANDING);

  // Simple transition handler
  const toggleView = () => {
    if (viewState === ViewState.LANDING) {
      setViewState(ViewState.MOSAIC);
    } else {
      setViewState(ViewState.LANDING);
    }
  };

  return (
    <div className="relative min-h-screen bg-arena-light transition-colors duration-700">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>

      {/* Landing Page Layer */}
      <LandingView 
        onDiscover={() => setViewState(ViewState.MOSAIC)} 
        isVisible={true} 
      />

      {/* Mosaic Overlay Layer */}
      {viewState === ViewState.MOSAIC && (
        <MosaicView 
          onClose={() => setViewState(ViewState.LANDING)} 
          isVisible={true} 
        />
      )}
    </div>
  );
};

export default App;