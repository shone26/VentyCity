// src/components/ImprovedVideoBackground.tsx
import React, { useRef, useEffect, useState } from 'react';

interface ImprovedVideoBackgroundProps {
  fallbackImageSrc?: string;
}

const ImprovedVideoBackground: React.FC<ImprovedVideoBackgroundProps> = ({ 
  fallbackImageSrc = "/src/assets/images/hero-bg.jpg"
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  // Try different paths to find the video
  const videoPaths = [
    "/videos/background.mp4",
    "/background.mp4",
    "/public/videos/background.mp4",
    "./videos/background.mp4",
    "../assets/videos/background.mp4"
  ];

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    console.log("🎬 Attempting to load video background");
    
    // Try each video path until one works
    let currentPathIndex = 0;
    
    const tryNextPath = () => {
      if (currentPathIndex >= videoPaths.length) {
        console.error("❌ Failed to load video from any path");
        setVideoError(true);
        return;
      }
      
      const path = videoPaths[currentPathIndex];
      console.log(`📽️ Trying video path: ${path}`);
      
      videoElement.src = path;
      videoElement.load();
      currentPathIndex++;
    };
    
    const onCanPlayThrough = () => {
      console.log("✅ Video loaded successfully");
    };
    
    const onError = () => {
      console.error(`❌ Error loading video from ${videoElement.src}`);
      tryNextPath();
    };

    videoElement.addEventListener('canplaythrough', onCanPlayThrough);
    videoElement.addEventListener('error', onError);
    
    // Try the first path
    tryNextPath();
    
    // Attempt to play (this might be blocked by autoplay policies)
    const playVideo = async () => {
      try {
        await videoElement.play();
        console.log("▶️ Video playing");
      } catch (err) {
        console.warn("⚠️ Autoplay blocked, video will be muted:", err);
        
        // Try again with muted video (which often bypasses autoplay restrictions)
        videoElement.muted = true;
        try {
          await videoElement.play();
          console.log("🔇 Muted video playing");
        } catch (err) {
          console.error("❌ Could not play video even when muted:", err);
        }
      }
    };
    
    playVideo();

    // Cleanup
    return () => {
      videoElement.removeEventListener('canplaythrough', onCanPlayThrough);
      videoElement.removeEventListener('error', onError);
      videoElement.pause();
      videoElement.removeAttribute('src');
      videoElement.load();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: -100 }}>
      {/* Dark overlay with medium opacity */}
      <div className="absolute inset-0 bg-black/50" style={{ zIndex: -98 }}></div>
      
      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -99 }}
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback image for errors */}
      {videoError && fallbackImageSrc && (
        <img 
          src={fallbackImageSrc} 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover" 
          style={{ zIndex: -99 }}
        />
      )}
    </div>
  );
};

export default ImprovedVideoBackground;