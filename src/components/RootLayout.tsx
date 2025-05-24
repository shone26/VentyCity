// src/components/RootLayout.tsx
import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const RootLayout: React.FC = () => {
  // Check if viewport is in the target range (around 758x642)
  const [isTabletView, setIsTabletView] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Replace these with your actual Cloudinary details
  const CLOUD_NAME = "difyjok49"; // Replace with your cloud name
  const VIDEO_ID = "bw39yl8wlhzwrlc8btiy";     // Replace with your video public ID
  
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsTabletView(width >= 750 && width <= 768 && height <= 650);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  // Handle video events
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const onCanPlay = () => {
      console.log("✅ Cloudinary video loaded successfully");
      setIsLoading(false);
      setVideoError(false);
    };
    
    const onError = () => {
      console.error("❌ Error loading Cloudinary video");
      setVideoError(true);
      setIsLoading(false);
    };

    const onLoadStart = () => {
      console.log("🔄 Loading Cloudinary video...");
      setIsLoading(true);
    };

    videoElement.addEventListener('canplay', onCanPlay);
    videoElement.addEventListener('error', onError);
    videoElement.addEventListener('loadstart', onLoadStart);
    
    // Try to play when ready
    const playVideo = async () => {
      try {
        videoElement.muted = true; // Required for autoplay
        await videoElement.play();
        console.log("▶️ Cloudinary video playing");
      } catch (err) {
        console.warn("⚠️ Autoplay failed:", err);
      }
    };
    
    videoElement.addEventListener('canplaythrough', playVideo);

    return () => {
      videoElement.removeEventListener('canplay', onCanPlay);
      videoElement.removeEventListener('error', onError);
      videoElement.removeEventListener('loadstart', onLoadStart);
      videoElement.removeEventListener('canplaythrough', playVideo);
    };
  }, []);

  // Generate Cloudinary video URLs
  const generateVideoUrls = () => {
    const baseUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload`;
    return [
      `${baseUrl}/q_auto,f_auto,c_scale,w_1920/${VIDEO_ID}.mp4`, // High quality
      `${baseUrl}/q_70,f_auto,c_scale,w_1280/${VIDEO_ID}.mp4`,   // Medium quality
      `${baseUrl}/q_50,f_auto,c_scale,w_854/${VIDEO_ID}.mp4`     // Low quality fallback
    ];
  };

  const videoUrls = generateVideoUrls();

  return (
    <div 
      className={`flex flex-col min-h-screen relative w-full ${isTabletView ? 'tablet-view' : ''}`} 
      style={{ 
        zIndex: 1,
        margin: 0,
        padding: 0,
        width: '100vw',
        minHeight: '100vh',
        maxWidth: 'none'
      }}
    >
      {/* Cloudinary Video Background */}
      <div 
        className="fixed inset-0 w-full h-full overflow-hidden"
        style={{ 
          zIndex: -1000,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0
        }}
      >
        {/* Loading indicator */}
        {isLoading && !videoError && (
          <div 
            className="absolute inset-0 bg-black flex items-center justify-center"
            style={{ zIndex: 2 }}
          >
            <div className="text-white text-lg animate-pulse">Loading background video...</div>
          </div>
        )}
        
        {/* Fallback image - Show first, then video overlays */}
        <img 
          src="/src/assets/images/hero-bg.jpg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        
        {/* Cloudinary video */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              zIndex: 1,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onLoadedData={() => {
              console.log("📹 Video data loaded");
            }}
            onPlay={() => {
              console.log("▶️ Video started playing");
            }}
          >
            {videoUrls.map((url, index) => (
              <source key={index} src={url} type="video/mp4" />
            ))}
          </video>
        )}
        
        {/* Dark overlay */}
        <div 
          className="absolute inset-0 bg-black/40" 
          style={{ zIndex: 3 }}
        ></div>
        
        {/* Debug info (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed top-4 right-4 bg-black/70 text-white text-xs p-2 rounded" style={{ zIndex: 9999 }}>
            <div>Status: {isLoading ? '⏳ Loading' : videoError ? '❌ Error' : '✅ Playing'}</div>
            <div>Cloud: {CLOUD_NAME}</div>
            <div>Video: {VIDEO_ID}</div>
            <div>URLs: {videoUrls.length} sources</div>
          </div>
        )}
      </div>
      
      <Navbar />
      <main 
        className={`flex-grow relative w-full ${isTabletView ? 'pt-14' : ''}`} 
        style={{ 
          zIndex: 10,
          margin: 0,
          padding: 0,
          width: '100%',
          maxWidth: 'none'
        }}
      >
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
            padding-top: 56px;
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