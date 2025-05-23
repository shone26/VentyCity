// src/components/Hero.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "WELCOME TO VENTY ROLEPLAY",
  subtitle = "Experience the ultimate GTA V roleplay server with immersive police, criminal, and civilian gameplay",
  showButtons = true,
  backgroundImage = 'bg-[url("../assets/images/hero-bg.jpg")]'
}) => {
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
    
    // Play video if available
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Error playing video:", err);
      });
    }
    
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <div 
      className={`relative ${isTabletView ? 'h-screen overflow-hidden' : 'min-h-[100vh]'}`}
    >
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback background image if video fails */}
        <div className={`absolute inset-0 ${backgroundImage} bg-cover bg-center bg-no-repeat z-[-1]`}></div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      
      {/* City skyline silhouette */}
      <div className={`absolute bottom-0 left-0 right-0 ${isTabletView ? 'h-20' : 'h-32 sm:h-48'} bg-[url('../assets/images/city-silhouette.png')] bg-repeat-x bg-bottom`}></div>
      
      <div className={`relative container mx-auto px-4 ${isTabletView ? 'pt-16 pb-10' : 'pt-24 sm:pt-32 pb-20'} ${isTabletView ? 'h-screen' : 'min-h-screen'} flex flex-col justify-center items-center text-center z-10`}>
        <img 
          src="https://i.ibb.co/rRtvhsGK/Venty-Logo.png" 
          alt="VENTY Roleplay" 
          className={`${isTabletView ? 'w-48 mb-4' : 'w-4/5 sm:w-3/4 max-w-md mb-6 sm:mb-8'} animate-pulse hero-logo`}
        />
        
        <h1 
          className={`${isTabletView ? 'text-2xl mb-2 px-1' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 px-2'} font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 hero-title`}
        >
          {title}
        </h1>
        
        <p 
          className={`${isTabletView ? 'text-base mb-4 px-1' : 'text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 px-2'} text-gray-300 max-w-2xl hero-subtitle`}
        >
          {subtitle}
        </p>
        
        {showButtons && (
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto ${isTabletView ? 'px-1 gap-2' : 'px-2'}`}>
            <Link 
              to="/join" 
              className={`w-full sm:w-auto ${isTabletView ? 'px-4 py-2 text-sm' : 'px-6 sm:px-8 py-3 text-base sm:text-lg'} bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity`}
            >
              How To Join
            </Link>
            <a 
              href="https://discord.gg/Pv77Upbptx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`w-full sm:w-auto ${isTabletView ? 'px-4 py-2 text-sm' : 'px-6 sm:px-8 py-3 text-base sm:text-lg'} bg-black/50 backdrop-blur-sm border-2 border-purple-500 text-white rounded-lg font-medium hover:bg-black/70 transition-colors`}
            >
              Join Our Discord
            </a>
          </div>
        )}
        
        {/* Server stats */}
        <div className={`${isTabletView ? 'mt-6 gap-2' : 'mt-8 sm:mt-16 gap-3 sm:gap-6'} grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl px-2 hero-stats`}>
          <StatItem value="75+" label="Active Players" isTabletView={isTabletView} />
          <StatItem value="24/7" label="Server Uptime" isTabletView={isTabletView} />
          <StatItem value="100+" label="Custom Jobs" isTabletView={isTabletView} />
          <StatItem value="500+" label="Custom Cars" isTabletView={isTabletView} />
        </div>
        
        {/* Scroll indicator - hide on small screens or tablet view */}
        {!isTabletView && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block hero-scroll-indicator">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

const StatItem: React.FC<{ 
  value: string; 
  label: string;
  isTabletView: boolean;
}> = ({ value, label, isTabletView }) => (
  <div className={`bg-black/40 backdrop-blur-md ${isTabletView ? 'p-2' : 'p-3 sm:p-4'} rounded-lg border border-purple-500/30 hero-stat-item`}>
    <p className={`${isTabletView ? 'text-lg' : 'text-xl sm:text-2xl md:text-3xl'} font-bold text-orange-400 hero-stat-value`}>{value}</p>
    <p className={`${isTabletView ? 'text-xs' : 'text-sm sm:text-base'} text-gray-300 hero-stat-label`}>{label}</p>
  </div>
);

export default Hero;