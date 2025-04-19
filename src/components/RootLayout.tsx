// src/components/RootLayout.tsx
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout: React.FC = () => {
  // Check if viewport is in the target range (around 758x642)
  const [isTabletView, setIsTabletView] = useState(false);
  
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsTabletView(width >= 750 && width <= 768 && height <= 650);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isTabletView ? 'tablet-view' : ''}`}>
      {/* Notice: We removed the bg-black from here to allow the video to show through */}
      <Navbar />
      <main className={`flex-grow ${isTabletView ? 'pt-14' : ''}`}>
        <Outlet />
      </main>
      <Footer />
      
      {/* Special CSS for tablet viewport */}
      {isTabletView && (
        <style>{`
          .tablet-view {
            max-height: 642px;
            overflow-y: auto;
          }
          
          .tablet-view main {
            padding-top: 56px; /* Adjust to match navbar height */
          }
          
          .tablet-view section {
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          
          .tablet-view h1, .tablet-view h2 {
            font-size: 1.25rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .tablet-view p {
            font-size: 0.875rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .tablet-view .grid {
            gap: 0.5rem !important;
          }
          
          .tablet-view .py-6 {
            padding-top: 0.75rem !important;
            padding-bottom: 0.75rem !important;
          }
          
          .tablet-view .mb-8, .tablet-view .my-8 {
            margin-bottom: 1rem !important;
          }
          
          .tablet-view .mt-8, .tablet-view .my-8 {
            margin-top: 1rem !important;
          }
          
          .tablet-view .px-6 {
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }
          
          .tablet-view .py-3 {
            padding-top: 0.5rem !important;
            padding-bottom: 0.5rem !important;
          }
        `}</style>
      )}
    </div>
  );
};

export default RootLayout;