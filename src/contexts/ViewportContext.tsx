// src/contexts/ViewportContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ViewportContextType {
  isTabletView: boolean; // Specifically for 758x642 viewport
  isMobile: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

const ViewportContext = createContext<ViewportContextType>({
  isTabletView: false,
  isMobile: false,
  isDesktop: true,
  width: typeof window !== 'undefined' ? window.innerWidth : 1920,
  height: typeof window !== 'undefined' ? window.innerHeight : 1080,
});

interface ViewportProviderProps {
  children: ReactNode;
}

export const ViewportProvider: React.FC<ViewportProviderProps> = ({ children }) => {
  // Set initial state
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
  const [height, setHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 1080);
  
  // Calculate viewport flags
  const isTabletView = width >= 750 && width <= 769 && height <= 650; // Specifically for 758x642
  const isMobile = width < 768;
  const isDesktop = width >= 1024;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ViewportContext.Provider
      value={{
        isTabletView,
        isMobile,
        isDesktop,
        width,
        height,
      }}
    >
      {children}
    </ViewportContext.Provider>
  );
};

// Custom hook to use the viewport context
export const useViewport = () => useContext(ViewportContext);

export default ViewportContext;