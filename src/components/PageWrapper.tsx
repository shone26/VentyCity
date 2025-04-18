// src/components/PageWrapper.tsx
import React, { useEffect, useState, ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
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
    <div className={`${className} ${isTabletView ? 'tablet-optimized' : ''}`}>
      {isTabletView && (
        <style>{`
          .tablet-optimized {
            max-height: 642px;
            overflow-y: auto;
            scrollbar-width: thin;
          }
          
          .tablet-optimized::-webkit-scrollbar {
            width: 6px;
          }
          
          .tablet-optimized::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
          }
          
          .tablet-optimized::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #FF5700, #8A2BE2);
            border-radius: 3px;
          }
          
          /* Adjust padding and spacing for 758x642 */
          .tablet-optimized .section-padding {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
          }
          
          .tablet-optimized .content-spacing {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
          
          .tablet-optimized .section-heading {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }
          
          .tablet-optimized .text-base {
            font-size: 0.875rem;
          }
          
          .tablet-optimized .text-lg {
            font-size: 1rem;
          }
          
          .tablet-optimized .text-xl {
            font-size: 1.125rem;
          }
          
          .tablet-optimized .text-2xl {
            font-size: 1.25rem;
          }
          
          .tablet-optimized .reduced-padding {
            padding: 0.5rem !important;
          }
          
          .tablet-optimized .grid {
            gap: 0.5rem !important;
          }
        `}</style>
      )}
      {children}
    </div>
  );
};

export default PageWrapper;