// src/components/RootLayout.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout: React.FC = () => {
  // Check if viewport is in the target range (around 758x642)
  const [isTabletView, setIsTabletView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsTabletView(width >= 750 && width <= 768 && height <= 650);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    // Attempt to play the video
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.play();
          console.log("Video playback started successfully");
        } catch (error) {
          console.error("Error playing video:", error);
        }
      }
    };
    
    playVideo();
    
    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isTabletView ? 'tablet-view' : ''}`}>
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: -10 }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" style={{ zIndex: -9 }}></div>
        
        {/* Video element */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: -10 }}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback image */}
        <img 
          src="/src/assets/images/hero-bg.jpg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover" 
          style={{ zIndex: -11 }}
        />
      </div>
      
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