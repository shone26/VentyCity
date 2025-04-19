// src/components/VideoDebug.tsx
import React, { useEffect, useRef, useState } from 'react';

const VideoDebug: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState<string>('Loading...');
  const [videoEvents, setVideoEvents] = useState<string[]>([]);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  
  // Test with both absolute and relative paths
  const videoPaths = [
    '/videos/background.mp4',
    '../assets/videos/background.mp4',
    '/src/assets/videos/background.mp4',
    './assets/videos/background.mp4',
    '/public/videos/background.mp4',
  ];
  
  const logEvent = (event: string) => {
    setVideoEvents(prev => [...prev, `${new Date().toLocaleTimeString()}: ${event}`]);
  };
  
  useEffect(() => {
    // Test each video path
    const testPaths = async () => {
      for (const path of videoPaths) {
        try {
          setCurrentSrc(path);
          setStatus(`Testing ${path}...`);
          logEvent(`Testing path: ${path}`);
          
          const videoElement = videoRef.current;
          if (!videoElement) {
            logEvent('Video element not found');
            continue;
          }
          
          // Reset video element
          videoElement.pause();
          videoElement.src = path;
          videoElement.load();
          
          // Wait for events
          await new Promise(resolve => setTimeout(resolve, 3000));
          
          if (videoElement.error) {
            logEvent(`Error with ${path}: ${videoElement.error.message}`);
          } else {
            logEvent(`${path} loaded successfully!`);
            setStatus(`Success with: ${path}`);
            return; // Stop if we found a working path
          }
        } catch (error) {
          logEvent(`Exception with ${path}: ${error}`);
        }
      }
      
      setStatus('All paths failed');
    };
    
    testPaths();
    
    return () => {
      const videoElement = videoRef.current;
      if (videoElement) {
        videoElement.pause();
        videoElement.src = '';
        videoElement.load();
      }
    };
  }, []);
  
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    
    const events = [
      'loadstart', 'durationchange', 'loadedmetadata', 
      'loadeddata', 'progress', 'canplay', 
      'canplaythrough', 'playing', 'waiting', 
      'suspend', 'abort', 'error'
    ];
    
    const handlers: Record<string, EventListener> = {};
    
    events.forEach(event => {
      const handler = () => logEvent(event);
      handlers[event] = handler;
      videoElement.addEventListener(event, handler);
    });
    
    // Special handling for error event
    const errorHandler = () => {
      if (videoElement.error) {
        const errorMessage = `Error code: ${videoElement.error.code}, message: ${videoElement.error.message}`;
        setVideoError(errorMessage);
        logEvent(`Error: ${errorMessage}`);
      }
    };
    
    videoElement.addEventListener('error', errorHandler);
    
    return () => {
      events.forEach(event => {
        videoElement.removeEventListener(event, handlers[event]);
      });
      videoElement.removeEventListener('error', errorHandler);
    };
  }, [currentSrc]);
  
  return (
    <div className="fixed inset-0 bg-black/90 z-50 text-white p-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4">Video Background Debug</h2>
      
      <div className="mb-4">
        <p className="text-lg">Status: <span className={videoError ? 'text-red-500' : 'text-green-500'}>{status}</span></p>
        {videoError && <p className="text-red-500">{videoError}</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Current Test: {currentSrc}</h3>
          <video 
            ref={videoRef}
            className="w-full h-auto max-h-[300px] bg-gray-800 mb-4"
            controls
            muted
            playsInline
          >
            <source src={currentSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <button 
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 mr-2"
            onClick={() => window.location.reload()}
          >
            Restart Tests
          </button>
          
          <button 
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
            onClick={() => window.history.back()}
          >
            Back to Site
          </button>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Event Log:</h3>
          <div className="bg-gray-900 p-3 rounded h-[400px] overflow-y-auto">
            {videoEvents.map((event, index) => (
              <div key={index} className="text-sm border-b border-gray-700 py-1">
                {event}
              </div>
            ))}
            {videoEvents.length === 0 && (
              <p className="text-gray-500 italic">No events yet...</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Troubleshooting Tips:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Make sure the video file exists in the correct location</li>
          <li>Check if the video format is supported (MP4 with H.264 codec)</li>
          <li>Try placing the video in the public folder instead of src/assets</li>
          <li>Verify the video file is not corrupted by playing it locally</li>
          <li>Check browser console for additional errors</li>
          <li>Try a different, smaller video file to test</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoDebug;