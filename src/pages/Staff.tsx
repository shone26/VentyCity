
import React from 'react';
import Hero from '../components/Hero';
import StaffCard from '../components/StaffCard';

const randy = 'https://i.ibb.co/0RGXLpmj/randi.png';
const dk = 'https://i.ibb.co/7d28hfJn/dk.gif';
const soul = 'https://i.ibb.co/xSkLKZhg/soul.gif';
const wije = 'https://i.ibb.co/5hhWqtRQ/wade.gif';
const shiran = 'https://i.ibb.co/JjYrkvj0/shiran.gif';
const shone = 'https://i.ibb.co/GQ1XmVjR/shone.jpg';
const error = 'https://i.ibb.co/RpWxhpPZ/error.png';
const pancha = 'https://i.ibb.co/0jkPHVbY/pancha.jpg';
const beast = 'https://i.ibb.co/PZQL7WGh/beastube.png';
const chanux = 'https://i.ibb.co/dJ3LgZ1R/chanux.png';
const pheonix = 'https://i.ibb.co/pjgFC4S2/phenix.png';
const sparrow = 'https://i.ibb.co/Xfy2thhh/sparrow.png';
const costa = 'https://i.ibb.co/VcHTXfnY/costa.png';
const clouds = 'https://i.ibb.co/mCgrY7zX/clouds.png';
const designer = 'https://i.ibb.co/v4Nmt0gv/designer.png';
const j7 = 'https://i.ibb.co/VcHTXfnY/g7.png';  // Note: Check if this is the correct g7.png
const sonu = 'https://i.ibb.co/rGTFFyXM/sonu.png';



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

              <div className="flex justify-center">
                <div className="max-w-md">
                  <StaffCard
                    name="ⓥ RanDiNeX"
                    role="Founder & Lead Developer"
                    description="Founded VENTY Roleplay in 2023 and leads the development team. Specializes in core systems and optimization."
                    discord={{ username: "randinex", link: "https://discordapp.com/users/812379890883887124" }}
                    joinDate="March 2025"
                    avatar={randy}
                    gradient="from-orange-500 to-purple-600"
                  />
                </div>
              </div>
            </div>

            

            {/* Management Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                MANAGEMENT TEAM 
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <StaffCard
                  name="D_D_K"
                  role="Lead Script Developer"
                  description="Creates and maintains custom scripts and game mechanics that make VENTY unique."
                  discord={{ username: "dk.kratos", link: "https://discordapp.com/users/828968509420732446" }}
                  joinDate="June 2024"
                  avatar={dk}
                  gradient="from-orange-500 to-purple-600"
                />
                <StaffCard
                  name="DevsDoOpStuff"
                  role="Lead Anti-Cheat Master"
                  description="Develops and implements advanced anti-cheat systems to ensure a fair and secure gaming environment."
                  discord={{ username: "wijest_18995", link: "https://discordapp.com/users/1246333985597161472" }}
                  joinDate="January 2025"
                  avatar={wije}
                  gradient="from-orange-500 to-purple-600"
                />
                <StaffCard
                  name="soul"
                  role="Lead Map & Asset Developer"
                  description="Creates custom buildings, interiors, and map modifications to enhance the city environment."
                  discord={{ username: "darksoulbestt", link: "https://discordapp.com/users/1046107593501851788" }}
                  joinDate="July 2024"
                  avatar={soul}
                  gradient="from-orange-500 to-purple-600"
                />
              </div>
            </div>

            {/* Administration Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                ADMINISTRATION TEAM
              </h2>

              <div className="flex justify-center mb-8 sm:mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                  <StaffCard
                    name="ꌗꃅꀤꋪꍏꈤ"
                    role="Head Administrator"
                    description="Leads the admin team and handles major server decisions, disputes, and policy enforcement."
                    discord={{ username: "shiran8999", link: "https://discordapp.com/users/1107929243830194236" }}
                    joinDate="April 2025"
                    avatar={shiran}
                    gradient="from-red-500 to-purple-600"
                  />
                                    <StaffCard
                    name="Cari Nariya"
                    role="Head Administrator"
                    description="Leads the admin team and handles major server decisions, disputes, and policy enforcement."
                    discord={{ username: "naripencha", link: "https://discordapp.com/users/1228046867645075488" }}
                    joinDate="April 2025"
                    avatar={pancha}
                    gradient="from-red-500 to-purple-600"
                  />
                  
                </div>
              </div>

              {/* Junior Administrators */}
              <h3 className="text-xl sm:text-2xl font-bold text-center text-orange-400 mb-6 sm:mb-8">
                Junior Administrators
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                <StaffCard
                  name="AdminHelper"
                  role="Junior Administrator"
                  description="Assists with administrative duties, handles player appeals, and supports the Head Administrator in daily operations."
                  discord="adminhelper#1234"
                  joinDate="May 2024"
                  avatar={beast}
                  gradient="from-red-500 to-purple-600"
                />
                <StaffCard
                  name="RuleKeeper"
                  role="Junior Administrator"
                  description="Focuses on rule enforcement, policy implementation, and ensuring fair gameplay across all server activities."
                  discord="rulekeeper#5678"
                  joinDate="June 2024"
                  avatar={chanux}
                  gradient="from-red-500 to-purple-600"
                />
              </div>
            </div>

            {/* Web Development Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                WEB DEVELOPMENT TEAM
              </h2>

              <div className="flex justify-center">
                <div className="max-w-md">
                  <StaffCard
                    name="24 - DAVID"
                    role="Web Developer"
                    description="Develops and maintains our website, community portals, and online infrastructure to enhance the player experience."
                    discord={{ username: "shone4105", link: "https://discordapp.com/users/1060249054111613048" }}
                    joinDate="July 2024"
                    avatar={shone}
                    gradient="from-blue-500 to-cyan-600"
                  />
                </div>
              </div>
            </div>

            {/* Moderation Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                MODERATION TEAM
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <StaffCard
                  name="SONU-ソヌ"
                  role="Moderator"
                  description="Specializes in helping new players and answering common questions."
                  discord={{ username: "pnx_17", link: "https://discordapp.com/users/1017906707252383764" }}
                  joinDate="April 2025"
                  avatar={sonu}
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="𝙴𝚁𝚁𝙾𝚁_404"
                  role="Moderator"
                  description="Oversees the moderation team and handles escalated player reports."
                  discord={{ username: "draven_fd", link: "https://discordapp.com/users/1338938971790774283" }}
                  joinDate="July 2024"
                  avatar={error}
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Ⓥ AllClouds.lk"
                  role="Moderator"
                  description="Handles player reports, resolves conflicts, and enforces server rules."
                  discord={{ username: "spblacka", link: "https://discordapp.com/users/848736173643137094" }}
                  joinDate="August 2024"
                  avatar={clouds}
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Sparrow"
                  role="Moderator"
                  description="Monitors in-game activity and assists players with immediate issues."
                  discord={{ username: "sparrow1090", link: "https://discordapp.com/users/1141023705355522088" }}
                  joinDate="April 2025"
                  avatar={sparrow}
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Ⓥ Costa"
                  role="Moderator"
                  description="Assists with player tickets and basic moderation duties."
                  discord={{ username: "draven_fd", link: "https://discordapp.com/users/353133769395404800" }}
                  joinDate="May 2025"
                  avatar={costa}
                  gradient="from-green-500 to-blue-600"
                  compact
                />

                <StaffCard
                  name="Ⓥ Designer"
                  role="Moderator"
                  description="Handles routine moderation tasks and newcomer assistance."
                  discord={{ username: "gaming_sidu_95316", link: "https://discordapp.com/users/1306106958570459141" }}
                  joinDate="February 2025"
                  avatar={designer}
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="Ⓥg7.streams"
                  role="Moderator"
                  description="Focuses on ensuring a positive community atmosphere and player experience."
                  discord={{ username: "g7.streams", link: "https://discordapp.com/users/774833437520953354" }}
                  joinDate="September 2024"
                  avatar={j7}
                  gradient="from-green-500 to-blue-600"
                  compact
                />
                <StaffCard
                  name="PhoeNiX 𖤍"
                  role="Moderator"
                  description="Specializes in helping new players and answering common questions."
                  discord={{ username: "pnx_17", link: "https://discordapp.com/users/773202221109477386" }}
                  joinDate="April 2025"
                  avatar={pheonix}
                  gradient="from-green-500 to-blue-600"
                  compact
                />
              </div>
            </div>

            {/* Support Team
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
            </div> */}

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
                    <li>Opportunities in web development, game development, and community management</li>
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