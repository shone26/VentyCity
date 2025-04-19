// src/pages/VideoTestPage.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const VideoTestPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStatus, setVideoStatus] = useState<string>('Loading...');
  const [currentPath, setCurrentPath] = useState<string>('/videos/background.mp4');
  
  // Test paths to try
  const testPaths = [
    '/videos/background.mp4',
    '/background.mp4', 
    './videos/background.mp4',
    '../assets/videos/background.mp4',
    './background.mp4',
    '/public/videos/background.mp4'
  ];
  
  const tryVideoPath = (path: string) => {
    setCurrentPath(path);
    setVideoStatus(`Testing path: ${path}...`);
    
    if (videoRef.current) {
      videoRef.current.src = path;
      videoRef.current.load();
      
      // Try to play
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Play failed:", error);
          // Most browsers won't allow autoplay unless video is muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => {
              console.error("Play failed even with mute:", e);
            });
          }
        });
      }
    }
  };
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Set up event handlers to monitor video loading
    const onCanPlay = () => setVideoStatus(`✅ SUCCESS: Video loaded from ${currentPath}`);
    const onPlaying = () => setVideoStatus(`▶️ PLAYING: Video playing from ${currentPath}`);
    const onError = () => setVideoStatus(`❌ ERROR: Failed to load video from ${currentPath}`);
    const onWaiting = () => setVideoStatus(`⏳ WAITING: Video buffering from ${currentPath}`);
    
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('error', onError);
    video.addEventListener('waiting', onWaiting);
    
    // Try the first path initially
    tryVideoPath(testPaths[0]);
    
    return () => {
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('error', onError);
      video.removeEventListener('waiting', onWaiting);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">Video Test Page</h1>
          <Link 
            to="/" 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
        
        {/* Video status */}
        <div className={`p-4 mb-6 rounded text-white ${
          videoStatus.includes('SUCCESS') || videoStatus.includes('PLAYING') 
            ? 'bg-green-700/50' 
            : videoStatus.includes('ERROR') 
              ? 'bg-red-700/50' 
              : 'bg-blue-700/50'
        }`}>
          <p className="font-mono">{videoStatus}</p>
        </div>
        
        {/* Video test container */}
        <div className="bg-black rounded-lg overflow-hidden mb-8 aspect-video relative">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            loop
            muted
            playsInline
          >
            <source src={currentPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay that shows the current path */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-2 font-mono">
            Current path: {currentPath}
          </div>
        </div>
        
        {/* Path testing buttons */}
        <div className="mb-8">
          <h2 className="text-white text-lg font-semibold mb-3">Test Different Paths:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {testPaths.map((path) => (
              <button
                key={path}
                onClick={() => tryVideoPath(path)}
                className={`p-3 text-sm rounded text-white transition-colors ${
                  currentPath === path 
                    ? 'bg-purple-700 hover:bg-purple-800' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {path}
              </button>
            ))}
          </div>
        </div>
        
        {/* Full screen background test */}
        <div className="mb-8">
          <h2 className="text-white text-lg font-semibold mb-3">Background Video Test:</h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
              src={currentPath}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <p className="text-white text-xl">Video Background Test</p>
            </div>
          </div>
        </div>
        
        {/* Troubleshooting tips */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-white text-lg font-semibold mb-3">Troubleshooting Tips:</h2>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Make sure your video file exists in the <code className="bg-gray-700 px-1 rounded">public/videos/</code> folder</li>
            <li>• For Vite projects, static assets should be placed in the public folder</li>
            <li>• Videos in the public folder should be accessed with root-relative paths (starting with "/")</li>
            <li>• Check browser console for specific errors</li>
            <li>• Verify video format is compatible (MP4 with H.264 codec works best)</li>
            <li>• Keep video file size reasonable (under 10MB for better performance)</li>
            <li>• Videos must be muted for autoplay to work in most browsers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoTestPage;