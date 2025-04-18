// src/components/EnhancedAnimatedBackground.tsx
import React, { useEffect, useRef } from 'react';
import { useViewport } from '../contexts/ViewportContext';

interface EnhancedAnimatedBackgroundProps {
  intensity?: number; // Controls the intensity (1-100)
  primaryColor?: string; // Primary color (hex)
  secondaryColor?: string; // Secondary color (hex)
}

const EnhancedAnimatedBackground: React.FC<EnhancedAnimatedBackgroundProps> = ({
  intensity = 70,
  primaryColor = '#FF5700', // VENGY Orange
  secondaryColor = '#8A2BE2' // VENGY Purple
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isTabletView } = useViewport();

  // Scale intensity based on viewport
  const actualIntensity = isTabletView ? Math.min(intensity, 50) : intensity;

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

    // Helper function to convert hex to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    };

    // Convert colors to RGB
    const primaryRgb = hexToRgb(primaryColor);
    const secondaryRgb = hexToRgb(secondaryColor);

    interface Spot {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }

    // Create gradient spots
    const spots: Spot[] = [];
    const spotCount = 5 + Math.floor((actualIntensity / 100) * 8); // 5-13 spots based on intensity
    
    for (let i = 0; i < spotCount; i++) {
      spots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 100 + Math.random() * 200, // Larger radius for more visible effect
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        alpha: 0.1 + (Math.random() * 0.2) // More visible
      });
    }

    interface Particle {
      x: number;
      y: number;
      size: number;
      color: string;
      alpha: number;
      speedX: number;
      speedY: number;
    }

    // Create particle system
    const particles: Particle[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 10000) * (actualIntensity / 50);
    
    for (let i = 0; i < particleCount; i++) {
      // Mix colors
      const colorRatio = Math.random();
      const r = Math.floor(primaryRgb.r * colorRatio + secondaryRgb.r * (1 - colorRatio));
      const g = Math.floor(primaryRgb.g * colorRatio + secondaryRgb.g * (1 - colorRatio));
      const b = Math.floor(primaryRgb.b * colorRatio + secondaryRgb.b * (1 - colorRatio));
      
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 3, // Larger particles
        color: `rgb(${r}, ${g}, ${b})`,
        alpha: 0.3 + Math.random() * 0.5, // More visible
        speedX: (Math.random() - 0.5) * (actualIntensity / 50),
        speedY: (Math.random() - 0.5) * (actualIntensity / 50)
      });
    }

    // Animation variables
    let animationFrameId: number;
    let time = 0;

    // Animation function
    const animate = () => {
      time += 0.005;
      
      // Clear canvas with semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw animated gradient backdrop
      spots.forEach(spot => {
        // Update position with some oscillation for more dynamic movement
        spot.x += spot.speedX + Math.sin(time * 2) * 0.3;
        spot.y += spot.speedY + Math.cos(time * 1.5) * 0.3;
        
        // Bounce off edges
        if (spot.x < -spot.radius) spot.x = canvas.width + spot.radius;
        if (spot.x > canvas.width + spot.radius) spot.x = -spot.radius;
        if (spot.y < -spot.radius) spot.y = canvas.height + spot.radius;
        if (spot.y > canvas.height + spot.radius) spot.y = -spot.radius;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(
          spot.x, spot.y, 0,
          spot.x, spot.y, spot.radius
        );
        
        const rgbColor = hexToRgb(spot.color);
        gradient.addColorStop(0, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${spot.alpha})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Update and draw particles
      particles.forEach(particle => {
        // Add some wave motion
        particle.x += particle.speedX + Math.sin(time * 3 + particle.y * 0.01) * 0.2;
        particle.y += particle.speedY + Math.cos(time * 2 + particle.x * 0.01) * 0.2;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle with glow effect
        ctx.shadowBlur = 5;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });
      
      // Draw connecting lines
      if (actualIntensity > 30) {
        const lineDistance = 100 + (actualIntensity);
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < lineDistance) {
              // Create a gradient line
              const gradient = ctx.createLinearGradient(
                particles[i].x, 
                particles[i].y, 
                particles[j].x, 
                particles[j].y
              );
              
              gradient.addColorStop(0, particles[i].color.replace('rgb', 'rgba').replace(')', `, ${0.2 * (1 - distance / lineDistance)})`));
              gradient.addColorStop(1, particles[j].color.replace('rgb', 'rgba').replace(')', `, ${0.2 * (1 - distance / lineDistance)})`));
              
              ctx.strokeStyle = gradient;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      
      // Add pulsing effect
      const pulseSize = 100 + Math.sin(time * 2) * 50;
      const pulseX = canvas.width * (0.5 + Math.sin(time * 0.7) * 0.2);
      const pulseY = canvas.height * (0.5 + Math.cos(time * 0.5) * 0.2);
      
      const pulseGradient = ctx.createRadialGradient(
        pulseX, pulseY, 0,
        pulseX, pulseY, pulseSize
      );
      
      pulseGradient.addColorStop(0, `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 0.1)`);
      pulseGradient.addColorStop(0.5, `rgba(${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}, 0.05)`);
      pulseGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = pulseGradient;
      ctx.beginPath();
      ctx.arc(pulseX, pulseY, pulseSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Continue animation
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [actualIntensity, primaryColor, secondaryColor, isTabletView]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-20 bg-black"
    />
  );
};

export default EnhancedAnimatedBackground;