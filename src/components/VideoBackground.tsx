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

        // Detailed logging to track video events
        const logEvent = (event: string) => {
        console.log(`Video event: ${event}`);
        console.log('Video source:', videoSrc); // Logging the video source to ensure the path is valid
        };

        videoElement.addEventListener('loadstart', () => logEvent('loadstart'));
        videoElement.addEventListener('loadeddata', () => logEvent('loadeddata'));
        videoElement.addEventListener('loadedmetadata', () => logEvent('loadedmetadata'));
        videoElement.addEventListener('canplay', () => logEvent('canplay'));
        videoElement.addEventListener('canplaythrough', () => {
        logEvent('canplaythrough');
        setVideoLoaded(true);
        });
        videoElement.addEventListener('playing', () => logEvent('playing'));
        videoElement.addEventListener('waiting', () => logEvent('waiting'));
        videoElement.addEventListener('suspend', () => logEvent('suspend'));

        videoElement.addEventListener('error', (err) => {
        console.error('Video error:', err);
        setVideoError(true);
        });

        // Force video preload to auto
        videoElement.preload = 'auto';

        // Try to play the video
    const playVideo = async () => {
    try {
        console.log('Attempting to load and play the video');
        videoElement.load();
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
        playPromise
            .then(() => {
            console.log('Video is playing');
            })
            .catch(err => {
            console.error('Video play failed:', err);
            setVideoError(true);
            });
        }
    } catch (err) {
        console.error('Video load/play error:', err);
        setVideoError(true);
    }
    };

        playVideo();

        // Clean up
        return () => {
        if (videoElement) {
            videoElement.pause();
            videoElement.src = '';
            videoElement.load();
            console.log('Video cleanup done');
        }
        };
    }, [videoSrc]);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        {/* Dark overlay to ensure content readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Show loading indicator until video plays */}
        {!videoLoaded && !videoError && (
            <div className="absolute inset-0 bg-black flex items-center justify-center z-5">
            <div className="w-16 h-16 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
            </div>
        )}
        
        {/* Video background */}
        <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 1s ease' }}
        >
            <source src={videoSrc} type="video/mp4" />
            {/* No fallback content inside video - we'll handle fallback separately */}
        </video>
        
        {/* Fallback image shown only if there's an error */}
        {videoError && fallbackImageSrc && (
            <img 
            src={fallbackImageSrc} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover z-0" 
            />
        )}
        </div>
    );
    };

    export default VideoBackground;
