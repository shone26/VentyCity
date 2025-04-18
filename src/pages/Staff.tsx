// src/pages/Staff.tsx
import React from 'react';
import Hero from '../components/Hero';
import StaffCard from '../components/StaffCard';

const Staff: React.FC = () => {
  return (
    <div>
      <Hero
        title="OUR STAFF TEAM"
        subtitle="Meet the dedicated team behind VENTY Roleplay"
        showButtons={false}
        backgroundImage="bg-[url('../assets/images/staff-bg.jpg')]"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
                Our staff team works tirelessly to ensure VENTY Roleplay provides the best experience possible. 
                From server development to player support, each member plays a vital role in our community.
              </p>
            </div>

            {/* Server Owners */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                SERVER OWNERS
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <StaffCard
                  name="NightHawk"
                  role="Founder & Lead Developer"
                  description="Founded VENTY Roleplay in 2023 and leads the development team. Specializes in core systems and optimization."
                  discord="NightHawk#1337"
                  joinDate="January 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-orange-500 to-purple-600"
                />
                <StaffCard
                  name="Phoenix"
                  role="Co-Owner & Community Manager"
                  description="Oversees the community, staff team, and server operations. The friendly face of VENTY leadership."
                  discord="Phoenix#8642"
                  joinDate="February 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-orange-500 to-purple-600"
                />
              </div>
            </div>

            {/* Development Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                DEVELOPMENT TEAM
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <StaffCard
                  name="CodeMaster"
                  role="Lead Script Developer"
                  description="Creates and maintains custom scripts and game mechanics that make VENTY unique."
                  discord="CodeMaster#4521"
                  joinDate="March 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-blue-500 to-purple-600"
                />
                <StaffCard
                  name="Pixelized"
                  role="UI/UX Designer"
                  description="Designs all in-game user interfaces and ensures smooth player experience through intuitive design."
                  discord="Pixelized#7890"
                  joinDate="April 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-blue-500 to-purple-600"
                />
                <StaffCard
                  name="MapMaker"
                  role="Map & Asset Developer"
                  description="Creates custom buildings, interiors, and map modifications to enhance the city environment."
                  discord="MapMaker#2468"
                  joinDate="May 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-blue-500 to-purple-600"
                />
              </div>
            </div>

            {/* Administration Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                ADMINISTRATION TEAM
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <StaffCard
                  name="Justice"
                  role="Head Administrator"
                  description="Leads the admin team and handles major server decisions, disputes, and policy enforcement."
                  discord="Justice#6352"
                  joinDate="March 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-red-500 to-purple-600"
                />
                <StaffCard
                  name="Enforcer"
                  role="Senior Administrator"
                  description="Oversees rule enforcement, handles appeals, and manages the moderation team."
                  discord="Enforcer#1122"
                  joinDate="April 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-red-500 to-purple-600"
                />
                <StaffCard
                  name="Harmony"
                  role="Community Administrator"
                  description="Manages community events, coordinates between departments, and oversees server activities."
                  discord="Harmony#3344"
                  joinDate="June 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-red-500 to-purple-600"
                />
              </div>
            </div>

            {/* Moderation Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                MODERATION TEAM
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StaffCard
                  name="Guardian"
                  role="Senior Moderator"
                  description="Oversees the moderation team and handles escalated player reports."
                  discord="Guardian#5566"
                  joinDate="July 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Sentinel"
                  role="Senior Moderator"
                  description="Specializes in anti-cheat monitoring and technical issues resolution."
                  discord="Sentinel#7788"
                  joinDate="August 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Peacekeeper"
                  role="Moderator"
                  description="Handles player reports, resolves conflicts, and enforces server rules."
                  discord="Peacekeeper#9900"
                  joinDate="September 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Watcher"
                  role="Moderator"
                  description="Monitors in-game activity and assists players with immediate issues."
                  discord="Watcher#1234"
                  joinDate="October 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-green-500 to-blue-600"
                  compact
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6">
                <StaffCard
                  name="Observer"
                  role="Junior Moderator"
                  description="Assists with player tickets and basic moderation duties."
                  discord="Observer#5678"
                  joinDate="November 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Protector"
                  role="Junior Moderator"
                  description="Handles routine moderation tasks and newcomer assistance."
                  discord="Protector#9012"
                  joinDate="December 2023"
                  avatar="/api/placeholder/200/200"
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Keeper"
                  role="Junior Moderator"
                  description="Focuses on ensuring a positive community atmosphere and player experience."
                  discord="Keeper#3456"
                  joinDate="January 2024"
                  avatar="/api/placeholder/200/200"
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Guardian2"
                  role="Junior Moderator"
                  description="Specializes in helping new players and answering common questions."
                  discord="Guardian2#7890"
                  joinDate="February 2024"
                  avatar="/api/placeholder/200/200"
                  gradient="from-green-500 to-blue-600"
                  compact
                />
              </div>
            </div>

            {/* Support Team */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                SUPPORT TEAM
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <StaffCard
                  name="Helper"
                  role="Lead Support"
                  description="Manages the support team and handles complex technical issues."
                  discord="Helper#1357"
                  joinDate="January 2024"
                  avatar="/api/placeholder/200/200"
                  gradient="from-yellow-500 to-orange-600"
                  compact
                />
                <StaffCard
                  name="Guide"
                  role="Technical Support"
                  description="Provides assistance with connection issues and client-side problems."
                  discord="Guide#2468"
                  joinDate="February 2024"
                  avatar="/api/placeholder/200/200"
                  gradient="from-yellow-500 to-orange-600"
                  compact
                />
                <StaffCard
                  name="Mentor"
                  role="New Player Support"
                  description="Helps new players learn the server systems and roleplaying basics."
                  discord="Mentor#3579"
                  joinDate="March 2024"
                  avatar="/api/placeholder/200/200"
                  gradient="from-yellow-500 to-orange-600"
                  compact
                />
                <StaffCard
                  name="Assistant"
                  role="Community Support"
                  description="Assists with Discord management and community engagement."
                  discord="Assistant#4680"
                  joinDate="April 2024"
                  avatar="/api/placeholder/200/200"
                  gradient="from-yellow-500 to-orange-600"
                  compact
                />
              </div>
            </div>

            {/* Join the Team */}
            <div className="mt-12 sm:mt-16 md:mt-20 p-4 sm:p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-purple-500/30">
              <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-3 sm:mb-4 text-center md:text-left">Want to Join Our Team?</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base text-center md:text-left">
                    We're always looking for passionate and dedicated individuals to join our staff team. If you love VENTY Roleplay and want to help make it even better, consider applying for a staff position!
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 sm:space-y-2 text-sm sm:text-base text-center md:text-left">
                    <li>Gain valuable experience in server management</li>
                    <li>Work with a friendly and supportive team</li>
                    <li>Help shape the future of VENTY Roleplay</li>
                    <li>Exclusive staff perks and recognition</li>
                  </ul>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <a
                    href="https://discord.gg/Pv77Upbptx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-base sm:text-lg whitespace-nowrap"
                  >
                    Apply Now on Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;