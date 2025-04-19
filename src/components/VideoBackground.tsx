// src/components/VideoBackground.tsx
import React, { useRef, useEffect, useState } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  fallbackImageSrc?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoSrc,
  fallbackImageSrc
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Log everything for debugging
    console.log("🎬 Attempting to load video from:", videoSrc);
    
    // Listen for all relevant events
    const onLoadStart = () => console.log("Video loadstart event fired");
    const onLoadedData = () => console.log("Video loadeddata event fired");
    const onLoadedMetadata = () => console.log("Video loadedmetadata event fired");
    const onCanPlay = () => console.log("Video canplay event fired");
    const onCanPlayThrough = () => {
      console.log("Video canplaythrough event fired");
      setVideoLoaded(true);
    };
    const onPlaying = () => console.log("Video playing event fired");
    const onWaiting = () => console.log("Video waiting event fired");
    const onSuspend = () => console.log("Video suspend event fired");
    const onError = (e: Event) => {
      console.error("Video error event fired:", e);
      console.error("Video error details:", videoElement.error);
      setVideoError(true);
    };

    // Add all event listeners
    videoElement.addEventListener('loadstart', onLoadStart);
    videoElement.addEventListener('loadeddata', onLoadedData);
    videoElement.addEventListener('loadedmetadata', onLoadedMetadata);
    videoElement.addEventListener('canplay', onCanPlay);
    videoElement.addEventListener('canplaythrough', onCanPlayThrough);
    videoElement.addEventListener('playing', onPlaying);
    videoElement.addEventListener('waiting', onWaiting);
    videoElement.addEventListener('suspend', onSuspend);
    videoElement.addEventListener('error', onError);

    // Try to play the video
    const playVideo = async () => {
      try {
        console.log("📽️ Forcing video load and play");
        videoElement.load();
        
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("✅ Video is now playing successfully");
            })
            .catch(err => {
              console.error("❌ Video play failed:", err);
              // Try again after a delay
              setTimeout(() => {
                console.log("🔄 Trying to play video again...");
                videoElement.play().catch(e => {
                  console.error("❌ Second attempt failed:", e);
                  setVideoError(true);
                });
              }, 1000);
            });
        }
      } catch (err) {
        console.error("❌ Video load/play error:", err);
        setVideoError(true);
      }
    };

    playVideo();

    // Cleanup
    return () => {
      videoElement.removeEventListener('loadstart', onLoadStart);
      videoElement.removeEventListener('loadeddata', onLoadedData);
      videoElement.removeEventListener('loadedmetadata', onLoadedMetadata);
      videoElement.removeEventListener('canplay', onCanPlay);
      videoElement.removeEventListener('canplaythrough', onCanPlayThrough);
      videoElement.removeEventListener('playing', onPlaying);
      videoElement.removeEventListener('waiting', onWaiting);
      videoElement.removeEventListener('suspend', onSuspend);
      videoElement.removeEventListener('error', onError);
      
      videoElement.pause();
      videoElement.removeAttribute('src');
      videoElement.load();
    };
  }, [videoSrc]);

  return (
    <>
      {/* This div needs to be the first child in the DOM for proper z-index stacking */}
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
          <source src={videoSrc} type="video/mp4" />
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
      
      {/* Debugging information - only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-2 left-2 bg-black/70 text-white text-xs p-2 rounded z-50">
          Video Status: {videoLoaded ? '✅ Loaded' : videoError ? '❌ Error' : '⏳ Loading...'}
          <br />
          Source: {videoSrc.split('/').pop()}
        </div>
      )}
    </>
  );
};

export default VideoBackground;