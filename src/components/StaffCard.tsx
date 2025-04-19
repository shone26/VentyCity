// src/components/StaffCard.tsx
import React, { useEffect, useState } from 'react';

// Update the interface to support both string and object for discord
interface StaffCardProps {
  name: string;
  role: string;
  description: string;
  discord: string | { username: string; link: string };
  joinDate: string;
  avatar: string;
  gradient: string;
  compact?: boolean;
}

const StaffCard: React.FC<StaffCardProps> = ({
  name,
  role,
  description,
  discord,
  joinDate,
  avatar,
  gradient,
  compact = false
}) => {
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

  // Force compact view for tablet view
  const useCompactView = compact || isTabletView;

  // Determine discord username and link
  const discordUsername = typeof discord === 'object' ? discord.username : discord;
  const discordLink = typeof discord === 'object' ? discord.link : null;

  return (
    <div className={`bg-gradient-to-br from-gray-900 to-black ${isTabletView ? 'p-3' : 'p-4 sm:p-6'} rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-colors h-full staff-card`}>
      <div className="flex flex-col items-center h-full">
        <div className={`${useCompactView ? 'w-12 h-12' : 'w-20 h-20 sm:w-24 sm:h-24'} rounded-full overflow-hidden ${isTabletView ? 'mb-2' : 'mb-3 sm:mb-4'} p-1 bg-gradient-to-r ${gradient} staff-avatar`}>
          <img src={avatar} alt={name} className="w-full h-full rounded-full object-cover" />
        </div>
        <h3 className={`${isTabletView ? 'text-base' : 'text-lg sm:text-xl'} font-bold text-white mb-1 staff-name`}>{name}</h3>
        <p className={`text-orange-400 font-medium ${useCompactView ? 'text-xs' : 'text-sm sm:text-base'} mb-${useCompactView ? '1' : '4'} staff-role`}>{role}</p>
        
        {!useCompactView && (
          <p className={`text-gray-400 text-center ${isTabletView ? 'text-xs' : 'text-sm sm:text-base'} mb-4 staff-description`}>{description}</p>
        )}
        
        {useCompactView && (
          <p className="text-gray-400 text-center text-xs line-clamp-2 mb-2 staff-description">{description}</p>
        )}
        
        <div className={`w-full pt-${useCompactView ? '1' : '4'} border-t border-gray-800 mt-auto`}>
          <div className="flex flex-col gap-1">
            <p className={`text-gray-500 ${isTabletView ? 'text-xs' : 'text-xs sm:text-sm'}`}>
              <span className="text-purple-400">Discord:</span>{" "}
              {discordLink ? (
                <a 
                  href={discordLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {discordUsername}
                </a>
              ) : (
                discordUsername
              )}
            </p>
            <p className={`text-gray-500 ${isTabletView ? 'text-xs' : 'text-xs sm:text-sm'}`}>
              <span className="text-purple-400">Joined:</span> {joinDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;