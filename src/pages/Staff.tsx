import React, { useState } from 'react';
import Hero from '../components/Hero';
import StaffCard from '../components/StaffCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

const randy = 'https://i.ibb.co/0RGXLpmj/randi.png';
const dk = 'https://i.ibb.co/7d28hfJn/dk.gif';
const soul = 'https://i.ibb.co/xSkLKZhg/soul.gif';
const wije = 'https://i.ibb.co/5hhWqtRQ/wade.gif';
const shiran = 'https://i.ibb.co/JjYrkvj0/shiran.gif';
const shone = 'https://i.ibb.co/GQ1XmVjR/shone.jpg';
const pancha = 'https://i.ibb.co/0jkPHVbY/pancha.jpg';
const beast = 'https://i.ibb.co/PZQL7WGh/beastube.png';
const chanux = 'https://i.ibb.co/dJ3LgZ1R/chanux.png';
const pheonix = 'https://i.ibb.co/pjgFC4S2/phenix.png';
const sparrow = 'https://i.ibb.co/Xfy2thhh/sparrow.png';
const costa = 'https://i.ibb.co/VcHTXfnY/costa.png';
const clouds = 'https://i.ibb.co/mCgrY7zX/clouds.png';
const designer = 'https://i.ibb.co/v4Nmt0gv/designer.png';

const sonu = 'https://i.ibb.co/rGTFFyXM/sonu.png';

const Staff: React.FC = () => {
  const [showAllModerators, setShowAllModerators] = useState(false);


    // Define all server owners
    const allServerOwners = [
      {
        name: "ⓥ RanDiNeX",
        role: "Founder & Lead Developer",
        description: "Founded VENTY Roleplay in 2023 and leads the development team. Specializes in core systems and optimization.",
        discord: { username: "randinex", link: "https://discordapp.com/users/812379890883887124" },
        joinDate: "March 2025",
        avatar: randy,
        gradient: "from-orange-500 to-purple-600"
      }
    ];
  
    // Define all management team members
    const allManagementTeam = [
      {
        name: "D_D_K",
        role: "Lead Script Developer",
        description: "Creates and maintains custom scripts and game mechanics that make VENTY unique.",
        discord: { username: "dk.kratos", link: "https://discordapp.com/users/828968509420732446" },
        joinDate: "June 2024",
        avatar: dk,
        gradient: "from-orange-500 to-purple-600"
      },
      {
        name: "DevsDoOpStuff",
        role: "Lead Anti-Cheat Master",
        description: "Develops and implements advanced anti-cheat systems to ensure a fair and secure gaming environment.",
        discord: { username: "wijest_18995", link: "https://discordapp.com/users/1246333985597161472" },
        joinDate: "January 2025",
        avatar: wije,
        gradient: "from-orange-500 to-purple-600"
      },
      {
        name: "soul",
        role: "Lead Map & Asset Developer",
        description: "Creates custom buildings, interiors, and map modifications to enhance the city environment.",
        discord: { username: "darksoulbestt", link: "https://discordapp.com/users/1046107593501851788" },
        joinDate: "July 2024",
        avatar: soul,
        gradient: "from-orange-500 to-purple-600"
      }
    ];
  
    // Define all head administrators
    const allHeadAdministrators = [
      {
        name: "ꌗꃅꀤꋪꍏꈤ",
        role: "Head Administrator",
        description: "Leads the admin team and handles major server decisions, disputes, and policy enforcement.",
        discord: { username: "shiran8999", link: "https://discordapp.com/users/1107929243830194236" },
        joinDate: "April 2025",
        avatar: shiran,
        gradient: "from-red-500 to-purple-600"
      },
      {
        name: "Cari Nariya",
        role: "Head Administrator",
        description: "Leads the admin team and handles major server decisions, disputes, and policy enforcement.",
        discord: { username: "naripencha", link: "https://discordapp.com/users/1228046867645075488" },
        joinDate: "April 2025",
        avatar: pancha,
        gradient: "from-red-500 to-purple-600"
      }
    ];
  
    // Define all junior administrators
    const allJuniorAdministrators = [
      {
        name: "AdminHelper",
        role: "Junior Administrator",
        description: "Assists with administrative duties, handles player appeals, and supports the Head Administrator in daily operations.",
        discord: "adminhelper#1234",
        joinDate: "May 2024",
        avatar: beast,
        gradient: "from-red-500 to-purple-600"
      },
      {
        name: "RuleKeeper",
        role: "Junior Administrator",
        description: "Focuses on rule enforcement, policy implementation, and ensuring fair gameplay across all server activities.",
        discord: "rulekeeper#5678",
        joinDate: "June 2024",
        avatar: chanux,
        gradient: "from-red-500 to-purple-600"
      }
    ];
  
    // Define all web development team members
    const allWebDevelopers = [
      {
        name: "24 - DAVID",
        role: "Web Developer",
        description: "Develops and maintains our website, community portals, and online infrastructure to enhance the player experience.",
        discord: { username: "shone4105", link: "https://discordapp.com/users/1060249054111613048" },
        joinDate: "July 2024",
        avatar: shone,
        gradient: "from-blue-500 to-cyan-600"
      }
    ];

  // Define all moderators
  const allModerators = [
    {
      name: "SONU-ソヌ",
      role: "Moderator",
      description: "Specializes in helping new players and answering common questions.",
      discord: { username: "pnx_17", link: "https://discordapp.com/users/1017906707252383764" },
      joinDate: "April 2025",
      avatar: sonu,
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Ⓥ AllClouds.lk",
      role: "Moderator",
      description: "Handles player reports, resolves conflicts, and enforces server rules.",
      discord: { username: "spblacka", link: "https://discordapp.com/users/848736173643137094" },
      joinDate: "August 2024",
      avatar: clouds,
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Sparrow",
      role: "Moderator",
      description: "Monitors in-game activity and assists players with immediate issues.",
      discord: { username: "sparrow1090", link: "https://discordapp.com/users/1141023705355522088" },
      joinDate: "April 2025",
      avatar: sparrow,
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Ⓥ Costa",
      role: "Moderator",
      description: "Assists with player tickets and basic moderation duties.",
      discord: { username: "draven_fd", link: "https://discordapp.com/users/353133769395404800" },
      joinDate: "May 2025",
      avatar: costa,
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Ⓥ Designer",
      role: "Moderator",
      description: "Handles routine moderation tasks and newcomer assistance.",
      discord: { username: "gaming_sidu_95316", link: "https://discordapp.com/users/1306106958570459141" },
      joinDate: "February 2025",
      avatar: designer,
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Ⓥg7.streams",
      role: "Moderator",
      description: "Focuses on ensuring a positive community atmosphere and player experience.",
      discord: { username: "g7.streams", link: "https://discordapp.com/users/774833437520953354" },
      joinDate: "September 2024",
      avatar: "https://cdn.discordapp.com/avatars/774833437520953354/98b4804116ef993ae2bfd6e7b3f93b16.png?size=4096&ignore=true).",
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "PhoeNiX 𖤍",
      role: "Moderator",
      description: "Specializes in helping new players and answering common questions.",
      discord: { username: "pnx_17", link: "https://discordapp.com/users/773202221109477386" },
      joinDate: "April 2025",
      avatar: pheonix,
      gradient: "from-green-500 to-blue-600"
    },



    {
      name: "Yakari",
      role: "Moderator",
      description: "Specializes in helping new players and answering common questions.",
      discord: { username: "kalana9234", link: "https://discordapp.com/users/872784932437630997" },
      joinDate: "April 2025",
      avatar: "https://cdn.discordapp.com/avatars/872784932437630997/7fba91a309249cfc2cf278e47064302d.png?size=4096&ignore=true).",
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Ⓥ Harry Hart",
      role: "Moderator",
      description: "Specializes in helping new players and answering common questions.",
      discord: { username: "sl_darkhero", link: "https://discordapp.com/users/741257749404581909" },
      joinDate: "March 2025",
      avatar: "https://cdn.discordapp.com/avatars/741257749404581909/b8f69d93b9ab723c4e011eff0c67fbdc.png?size=4096&ignore=true).",
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Ⓥ chamuthu sanahas",
      role: "Moderator",
      description: "Specializes in helping new players and answering common questions.",
      discord: { username: "chamuthu", link: "https://discordapp.com/users/952184532134686730" },
      joinDate: "April 2025",
      avatar: "https://cdn.discordapp.com/avatars/952184532134686730/775626d889192d8e822d096392410a20.png?size=4096&ignore=true).",
      gradient: "from-green-500 to-blue-600"
    },
    {
      name: "Ⓥ EvOn",
      role: "Moderator",
      description: "Specializes in helping new players and answering common questions.",
      discord: { username: "evonxgamer", link: "https://discordapp.com/users/952184532134686730" },
      joinDate: "October 2024",
      avatar: "https://cdn.discordapp.com/avatars/1201830266050715698/5237444c4868fee271800e1c12e1eb56.png?size=4096&ignore=true).",
      gradient: "from-green-500 to-blue-600"
    }
  ];

  // Calculate visible moderators (2 rows = 8 moderators for lg:grid-cols-4)
  const moderatorsPerRow = 4;
  const initialRows = 2;
  const initialModerators = moderatorsPerRow * initialRows;
  
  const visibleModerators = showAllModerators 
    ? allModerators 
    : allModerators.slice(0, initialModerators);

  const hasMoreModerators = allModerators.length > initialModerators;

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
                  {allServerOwners.map((owner, index) => (
                    <StaffCard
                      key={index}
                      name={owner.name}
                      role={owner.role}
                      description={owner.description}
                      discord={owner.discord}
                      joinDate={owner.joinDate}
                      avatar={owner.avatar}
                      gradient={owner.gradient}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Management Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                MANAGEMENT TEAM 
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                {allManagementTeam.map((member, index) => (
                  <StaffCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    description={member.description}
                    discord={member.discord}
                    joinDate={member.joinDate}
                    avatar={member.avatar}
                    gradient={member.gradient}
                  />
                ))}
              </div>
            </div>

            {/* Administration Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                ADMINISTRATION TEAM
              </h2>

              <div className="flex justify-center mb-8 sm:mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                  {allHeadAdministrators.map((admin, index) => (
                    <StaffCard
                      key={index}
                      name={admin.name}
                      role={admin.role}
                      description={admin.description}
                      discord={admin.discord}
                      joinDate={admin.joinDate}
                      avatar={admin.avatar}
                      gradient={admin.gradient}
                    />
                  ))}
                </div>
              </div>

              {/* Junior Administrators */}
              <h3 className="text-xl sm:text-2xl font-bold text-center text-orange-400 mb-6 sm:mb-8">
                Junior Administrators
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                {allJuniorAdministrators.map((admin, index) => (
                  <StaffCard
                    key={index}
                    name={admin.name}
                    role={admin.role}
                    description={admin.description}
                    discord={admin.discord}
                    joinDate={admin.joinDate}
                    avatar={admin.avatar}
                    gradient={admin.gradient}
                  />
                ))}
              </div>
            </div>

            {/* Web Development Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-8 sm:mb-12">
                WEB DEVELOPMENT TEAM
              </h2>

              <div className="flex justify-center">
                <div className="max-w-md">
                  {allWebDevelopers.map((developer, index) => (
                    <StaffCard
                      key={index}
                      name={developer.name}
                      role={developer.role}
                      description={developer.description}
                      discord={developer.discord}
                      joinDate={developer.joinDate}
                      avatar={developer.avatar}
                      gradient={developer.gradient}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Moderation Team */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <div className="flex flex-col items-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4">
                  MODERATION TEAM
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>Showing {visibleModerators.length} of {allModerators.length} moderators</span>
                </div>
              </div>

              {/* Moderators Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {visibleModerators.map((moderator, index) => (
                  <StaffCard
                    key={index}
                    name={moderator.name}
                    role={moderator.role}
                    description=""
                    discord={moderator.discord}
                    joinDate={moderator.joinDate}
                    avatar={moderator.avatar}
                    gradient={moderator.gradient}
                    compact
                  />
                ))}
              </div>

              {/* View More/Less Button */}
              {hasMoreModerators && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setShowAllModerators(!showAllModerators)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {showAllModerators ? (
                      <>
                        <ChevronUp className="w-5 h-5" />
                        View Less Moderators
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-5 h-5" />
                        View More Moderators ({allModerators.length - initialModerators} more)
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Optional: Smooth transition effect */}
              <style>
                {`
                  .grid {
                    transition: all 0.3s ease-in-out;
                  }
                `}
              </style>
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