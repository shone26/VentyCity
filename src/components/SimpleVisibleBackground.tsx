// // src/components/SimpleVisibleBackground.tsx
// import React from 'react';

// const SimpleVisibleBackground: React.FC = () => {
//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       {/* Background base color */}
//       <div className="absolute inset-0 bg-black"></div>
      
//       {/* CSS-only animated gradient overlay */}
//       <div className="absolute inset-0 opacity-30 animate-gradient-background"></div>
      
//       {/* Moving particles */}
//       <div className="particle-container">
//         {[...Array(15)].map((_, i) => (
//           <div 
//             key={i} 
//             className={`particle particle-${i + 1}`}
//             style={{
//               '--particle-size': `${10 + Math.random() * 10}px`,
//               '--particle-color': Math.random() > 0.5 ? '#FF5700' : '#8A2BE2',
//               '--particle-blur': `${Math.random() * 5}px`
//             } as React.CSSProperties}
//           ></div>
//         ))}
//       </div>
      
//       {/* Ambient light effects */}
//       <div className="light-effect light-effect-1"></div>
//       <div className="light-effect light-effect-2"></div>
//     </div>
//   );
// };

// export default SimpleVisibleBackground;