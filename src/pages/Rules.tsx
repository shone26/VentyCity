// src/pages/Rules.tsx
import React, { useState } from 'react';
import Hero from '../components/Hero';

const Rules: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  return (
    <div>
      <Hero 
        title="SERVER RULES" 
        subtitle="Please read and follow these rules to ensure a great roleplay experience for everyone"
        showButtons={false}
        backgroundImage="bg-[url('../assets/images/rules-bg.jpg')]"
      />
      
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Rule categories tabs */}
            <div className="overflow-x-auto py-2 mb-8 sm:mb-12">
              <div className="flex flex-nowrap min-w-max gap-2 justify-center sm:flex-wrap sm:min-w-0">
                <CategoryButton 
                  id="general" 
                  active={activeCategory === 'general'} 
                  onClick={() => setActiveCategory('general')}
                >
                  General Rules
                </CategoryButton>
                <CategoryButton 
                  id="roleplay" 
                  active={activeCategory === 'roleplay'} 
                  onClick={() => setActiveCategory('roleplay')}
                >
                  Roleplay Guidelines
                </CategoryButton>
                <CategoryButton 
                  id="police" 
                  active={activeCategory === 'police'} 
                  onClick={() => setActiveCategory('police')}
                >
                  Police & Criminal
                </CategoryButton>
                <CategoryButton 
                  id="vehicles" 
                  active={activeCategory === 'vehicles'} 
                  onClick={() => setActiveCategory('vehicles')}
                >
                  Vehicles & Properties
                </CategoryButton>
                <CategoryButton 
                  id="comms" 
                  active={activeCategory === 'comms'} 
                  onClick={() => setActiveCategory('comms')}
                >
                  Communication
                </CategoryButton>
              </div>
            </div>
            
            {/* Rules content */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 sm:p-6 md:p-8">
              {activeCategory === 'general' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    General Server Rules
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem 
                      number="1.1" 
                      title="Respect All Players" 
                      description="Treat all players with respect regardless of their role, experience level, or background. Discrimination, harassment, or bullying of any kind is strictly prohibited."
                    />
                    <RuleItem 
                      number="1.2" 
                      title="No Cheating or Exploiting" 
                      description="Use of cheats, mods, exploits, or any third-party tools to gain an unfair advantage is strictly prohibited and will result in a permanent ban."
                    />
                    <RuleItem 
                      number="1.3" 
                      title="Staff Decisions Are Final" 
                      description="Respect the decisions made by server staff. If you disagree with a decision, you may appeal through the proper channels on our Discord server."
                    />
                    <RuleItem 
                      number="1.4" 
                      title="One Character Per Person" 
                      description="You may create multiple characters, but only one character can be active at a time. Character switching to avoid RP consequences is prohibited."
                    />
                    <RuleItem 
                      number="1.5" 
                      title="Appropriate Character Names" 
                      description="Character names must be realistic and appropriate. No offensive, celebrity, or meme names are allowed."
                    />
                    <RuleItem 
                      number="1.6" 
                      title="No Combat Logging" 
                      description="Disconnecting from the server to avoid roleplay situations, especially during combat or police interactions, is prohibited."
                    />
                    <RuleItem 
                      number="1.7" 
                      title="Report Bugs" 
                      description="If you discover a bug or exploit, report it to staff immediately. Abuse of bugs for personal gain is prohibited."
                    />
                  </div>
                </div>
              )}
              
              {activeCategory === 'roleplay' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    Roleplay Guidelines
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem 
                      number="2.1" 
                      title="Value Your Life (VDM)" 
                      description="Always act as if your character values their life. Don't take unnecessary risks that no reasonable person would take in real life."
                    />
                    <RuleItem 
                      number="2.2" 
                      title="Fear Roleplay (FearRP)" 
                      description="When held at gunpoint or in other life-threatening situations, your character must show appropriate fear and compliance."
                    />
                    <RuleItem 
                      number="2.3" 
                      title="New Life Rule (NLR)" 
                      description="After your character dies, you must forget the circumstances of your death and cannot return to the same situation or location for 30 minutes."
                    />
                    <RuleItem 
                      number="2.4" 
                      title="No Random Death Match (RDM)" 
                      description="Do not kill players without proper roleplay interaction and reasonable cause. Random killing is strictly prohibited."
                    />
                    <RuleItem 
                      number="2.5" 
                      title="No Vehicle Death Match (VDM)" 
                      description="Do not use vehicles as weapons to kill or injure other players without proper roleplay justification."
                    />
                    <RuleItem 
                      number="2.6" 
                      title="Metagaming" 
                      description="Using information your character wouldn't know in-game (from Discord, streams, etc.) is prohibited."
                    />
                    <RuleItem 
                      number="2.7" 
                      title="Powergaming" 
                      description="Forcing scenarios on other players or performing impossible actions is prohibited. Your character has human limitations."
                    />
                  </div>
                </div>
              )}
              
              {activeCategory === 'police' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    Police & Criminal Rules
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem 
                      number="3.1" 
                      title="Police Response" 
                      description="Police must respond appropriately to calls and situations based on their severity. Follow department protocols and chains of command."
                    />
                    <RuleItem 
                      number="3.2" 
                      title="Robbery Cooldowns" 
                      description="Major robberies (banks, stores, etc.) have cooldown periods. Check Discord for the current cooldown timers."
                    />
                    <RuleItem 
                      number="3.3" 
                      title="Hostage Rules" 
                      description="Maximum of 5 hostages per robbery. Hostages must be given a fair chance to survive if they comply with demands."
                    />
                    <RuleItem 
                      number="3.4" 
                      title="Gang Territory" 
                      description="Gang wars over territory must be properly declared and roleplayed. Random attacks on other gangs without RP justification is prohibited."
                    />
                    <RuleItem 
                      number="3.5" 
                      title="Police Equipment" 
                      description="Police officers must use appropriate equipment based on their rank and the situation. No unauthorized weapons or vehicles."
                    />
                    <RuleItem 
                      number="3.6" 
                      title="Criminal Activities" 
                      description="All criminal activities must have proper roleplay leading up to them. No random crimes without context or preparation."
                    />
                    <RuleItem 
                      number="3.7" 
                      title="Negotiation" 
                      description="Both police and criminals must make a good faith effort to negotiate during hostage situations or standoffs."
                    />
                  </div>
                </div>
              )}
              
              {activeCategory === 'vehicles' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    Vehicles & Properties Rules
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem 
                      number="4.1" 
                      title="Vehicle Operation" 
                      description="Drive realistically and according to traffic laws when not in emergency situations. Reckless driving without RP justification is prohibited."
                    />
                    <RuleItem 
                      number="4.2" 
                      title="Vehicle Ownership" 
                      description="Do not steal or damage other players' personal vehicles without roleplay justification. Vehicle theft must be roleplayed properly."
                    />
                    <RuleItem 
                      number="4.3" 
                      title="Property Raiding" 
                      description="Raiding other players' properties requires proper roleplay and usually police involvement. Random raiding is prohibited."
                    />
                    <RuleItem 
                      number="4.4" 
                      title="Vehicle Modifications" 
                      description="Vehicle modifications must comply with server guidelines. Certain vehicles may have restrictions on modifications."
                    />
                    <RuleItem 
                      number="4.5" 
                      title="Parking" 
                      description="Park your vehicles appropriately. Blocking entrances, roads, or other players' vehicles without RP reason is prohibited."
                    />
                    <RuleItem 
                      number="4.6" 
                      title="Property Respect" 
                      description="Respect other players' property boundaries. Do not loiter or harass players at their homes or businesses without reason."
                    />
                    <RuleItem 
                      number="4.7" 
                      title="Vehicle Limits" 
                      description="Each character is limited to owning 8 vehicles. Vehicles unused for 30 days may be removed from your garage."
                    />
                  </div>
                </div>
              )}
              
              {activeCategory === 'comms' && (
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
                    Communication Rules
                  </h2>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <RuleItem 
                      number="5.1" 
                      title="Voice Chat" 
                      description="Use proximity voice chat appropriately. No voice changers, soundboards, or music playing through voice chat unless for RP purposes."
                    />
                    <RuleItem 
                      number="5.2" 
                      title="Out of Character (OOC)" 
                      description="Keep OOC chat to a minimum and use the designated OOC chat channels. Do not mix OOC and IC (In Character) communications."
                    />
                    <RuleItem 
                      number="5.3" 
                      title="Radio Communications" 
                      description="Only use radio channels your character would have access to. Police and emergency services have restricted channels."
                    />
                    <RuleItem 
                      number="5.4" 
                      title="Phone Usage" 
                      description="Use the in-game phone for calls, texts, and social media. External communication tools should not be used for in-game advantage."
                    />
                    <RuleItem 
                      number="5.5" 
                      title="Language" 
                      description="Excessive profanity, hate speech, or discriminatory language is prohibited in all communications."
                    />
                    <RuleItem 
                      number="5.6" 
                      title="Advertisements" 
                      description="In-game advertisements must be relevant to your character's business or activities. No spamming advertisements."
                    />
                    <RuleItem 
                      number="5.7" 
                      title="Emergency Channels" 
                      description="Do not abuse emergency channels (911) for non-emergency situations. False reports will be punished."
                    />
                  </div>
                </div>
              )}
              
              <div className="mt-6 sm:mt-10 p-4 sm:p-6 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-400 mb-2">Rule Enforcement</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Rules are enforced on a strike system. Repeated or severe violations may result in temporary or permanent bans from the server.
                </p>
                <p className="text-gray-300 text-sm sm:text-base">
                  If you have questions about any rules or need clarification, please contact our staff team on Discord.
                </p>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10 text-center">
              <a
                href="https://discord.gg/Pv77Upbptx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Join Our Discord for Full Rules Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const CategoryButton: React.FC<{
  id: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ id, active, onClick, children }) => (
  <button
    id={id}
    onClick={onClick}
    className={`px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
      active
        ? 'bg-gradient-to-r from-orange-500 to-purple-600 text-white'
        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
    }`}
  >
    {children}
  </button>
);

const RuleItem: React.FC<{
  number: string;
  title: string;
  description: string;
}> = ({ number, title, description }) => (
  <div className="border-b border-gray-700 pb-4">
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-purple-600 text-white font-bold px-2 py-1 text-xs sm:text-sm rounded mr-3">
        {number}
      </div>
      <div>
        <h3 className="text-base sm:text-xl font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  </div>
);

export default Rules;