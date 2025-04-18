// src/components/AnimatedBackground.tsx
import React, { useEffect, useRef } from 'react';
import { useViewport } from '../contexts/ViewportContext';

interface AnimatedBackgroundProps {
  intensity?: number; // Controls the intensity of the animation (0-100)
  color1?: string; // Primary color (hex)
  color2?: string; // Secondary color (hex)
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  intensity = 50,
  color1 = '#FF5700', // VENGY Orange
  color2 = '#8A2BE2'  // VENGY Purple
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isTabletView } = useViewport();

  // Scale down animation intensity for tablet view to improve performance
  const actualIntensity = isTabletView ? Math.min(intensity, 30) : intensity;
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Convert hex colors to rgb for canvas
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    };

    const color1Rgb = hexToRgb(color1);
    const color2Rgb = hexToRgb(color2);

    // Particles settings based on intensity
    const particleCount = Math.floor(window.innerWidth * window.innerHeight / (20000 - (actualIntensity * 150)));
    
    // Create particles
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Determine color - mix between color1 and color2
      const colorRatio = Math.random();
      const r = Math.floor(color1Rgb.r * colorRatio + color2Rgb.r * (1 - colorRatio));
      const g = Math.floor(color1Rgb.g * colorRatio + color2Rgb.g * (1 - colorRatio));
      const b = Math.floor(color1Rgb.b * colorRatio + color2Rgb.b * (1 - colorRatio));
      const alpha = (Math.random() * 0.2) + 0.05; // Very subtle opacity
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: (Math.random() * 2) + 0.5, // Smaller particles for subtle effect
        color: `rgba(${r}, ${g}, ${b}, ${alpha})`,
        speedX: (Math.random() - 0.5) * (actualIntensity / 100) * 0.3,
        speedY: (Math.random() - 0.5) * (actualIntensity / 100) * 0.3
      });
    }

    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid pattern (very subtle)
      ctx.strokeStyle = 'rgba(30, 30, 30, 0.1)';
      ctx.lineWidth = 0.2;
      const gridSize = 30;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap particles around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Connect nearby particles with lines
      if (actualIntensity > 20) { // Skip connection logic for very low intensity
        const maxDistance = 100 * (actualIntensity / 100);
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${color1Rgb.r}, ${color1Rgb.g}, ${color1Rgb.b}, ${0.03 * (1 - distance / maxDistance)})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [actualIntensity, color1, color2]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-20 bg-black" 
    />
  );
};

export default AnimatedBackground;