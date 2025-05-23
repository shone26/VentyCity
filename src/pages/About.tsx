// src/pages/About.tsx
import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const randy = 'https://i.ibb.co/0RGXLpmj/randi.png';
const sonu = 'https://i.ibb.co/rGTFFyXM/sonu.png';

const beastube = 'https://i.ibb.co/PZQL7WGh/beastube.png';
const beeztube = 'https://i.ibb.co/wrJ3Q025/beeztube.png';


const About: React.FC = () => {
  return (
    <div>
      <Hero
        title="ABOUT VENTY ROLEPLAY"
        subtitle="Discover what makes our GTA V roleplay server unique"
        showButtons={false}
        backgroundImage="bg-[url('../assets/images/about-bg.jpg')]"
      />

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Our Story */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-10">
                OUR STORY
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  Founded on June 19, 2024, VENTY Roleplay was created by the Venty Management Team, a group of passionate GTA V roleplayers who wanted to build a server that truly emphasized quality roleplay, immersion, and community. What started as a small project among friends quickly grew into one of the most respected roleplay communities in the FiveM ecosystem.
                </p>
                <p>
                  Our name "VENTY" represents the vibrant energy we bring to the roleplay experience—dynamic, exciting, and always evolving. From day one, our mission has been to create a roleplay environment where creativity, storytelling, and player interactions take center stage.
                </p>
                <p>
                  Today, VENTY Roleplay hosts hundreds of active players and continues to grow as we expand our features, improve our systems, and welcome new members to our community. Our dedicated development team, the Venty Dev Team, works tirelessly alongside our administration to ensure that VENTY remains at the cutting edge of GTA V roleplay. We are also proud to have the Stax Community as our main partner, helping us achieve our goals and enhance the overall experience for our players.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="mb-20">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-purple-500/30">
                <h2 className="text-2xl font-bold text-orange-400 mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg italic">
                  "To create the most immersive, inclusive, and innovative roleplay experience in the GTA V community, where players can truly live out their Los Santos stories and forge meaningful connections."
                </p>
              </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-10">
                WHAT SETS US APART
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureCard
                  title="Custom Framework"
                  description="Our development team has built a proprietary framework from the ground up, designed specifically for our roleplay vision. This allows for unique features you won't find on any other server."
                  icon="🔧"
                />
                <FeatureCard
                  title="Immersive Economy"
                  description="Experience a realistic economy with complex systems for jobs, businesses, real estate, and more. Every action has financial consequences in VENTY Roleplay."
                  icon="💰"
                />
                <FeatureCard
                  title="Custom Locations"
                  description="Explore dozens of custom-built interiors and locations that expand the Los Santos map and provide unique roleplay opportunities throughout the city."
                  icon="🏙️"
                />
                <FeatureCard
                  title="Active Development"
                  description="Our server receives weekly updates with new features, bug fixes, and improvements. We actively listen to community feedback to guide our development roadmap."
                  icon="📈"
                />
              </div>
            </div>

            {/* Server Statistics */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-10">
                SERVER STATISTICS
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <StatCard number="75+" label="Active Players" />
                <StatCard number="500+" label="Custom Vehicles" />
                <StatCard number="100+" label="Custom Jobs" />
                <StatCard number="50+" label="Custom Interiors" />
                <StatCard number="99.9%" label="Server Uptime" />
                <StatCard number="24/7" label="Active Staff" />
                <StatCard number="1,000+" label="Discord Members" />
                <StatCard number="Weekly" label="Content Updates" />
              </div>
            </div>

            {/* Our Community */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-10">
                OUR COMMUNITY
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  At the heart of VENTY Roleplay is our vibrant community of players, content creators, and staff members. We pride ourselves on fostering a welcoming environment where players of all backgrounds and experience levels can come together to create amazing roleplay stories.
                </p>
                <p>
                  Our Discord server serves as the hub of our community, where players can connect outside the game, participate in events, suggest ideas, and get help when needed. We regularly host community events both in-game and on Discord to strengthen our community bonds.
                </p>
                <p>
                  Many of our players also create content on platforms like Twitch, YouTube, and TikTok, showcasing their VENTY Roleplay experiences to audiences around the world. We actively support our content creators and feature their work on our social media channels.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={randy}
                    alt="Police roleplay scenario"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={beeztube}
                    alt="Community car meet event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={beastube}
                    alt="Nightclub scene"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={sonu}
                    alt="Street racing event"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={`@/assets/images/community/beach-party.jpg`}
                    alt="Beach party gathering"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={`@/assets/images/community/heist.jpg`}
                    alt="Heist planning scene"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={`@/assets/images/community/restaurant.jpg`}
                    alt="Roleplay at a restaurant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={`@/assets/images/community/city-skyline.jpg`}
                    alt="Los Santos skyline"
                    className="w-full h-full object-cover"
                  />
                </div> */}
              </div>
            </div>

            {/* Our Future */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-10">
                OUR FUTURE
              </h2>

              <div className="space-y-6 text-gray-300">
                <p>
                  VENTY Roleplay is constantly evolving, with an ambitious roadmap for future development. Our upcoming plans include:
                </p>

                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Expanded territory system with gang/faction mechanics</li>
                  <li>Advanced criminal enterprise features</li>
                  <li>More legal job paths and business opportunities</li>
                  <li>Enhanced emergency services systems</li>
                  <li>Additional custom locations throughout Los Santos</li>
                  <li>Improved character progression systems</li>
                </ul>

                <p>
                  We're committed to the long-term growth and improvement of VENTY Roleplay, and we invite you to be part of our journey as we continue to push the boundaries of what's possible in GTA V roleplay.
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-10">
                CONTACT US
              </h2>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-purple-500/30">
                <p className="text-gray-300 mb-6 text-center">
                  Have questions, suggestions, or want to get in touch with the VENTY Roleplay team? Here's how you can reach us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <ContactCard
                    icon="💬"
                    title="Discord"
                    description="Join our Discord server for the fastest support and to connect with our community."
                    link="https://discord.gg/Pv77Upbptx"
                    linkText="Join Discord"
                  />
                  <ContactCard
                    icon="📧"
                    title="Email"
                    description="For business inquiries, partnership opportunities, or formal communications."
                    link="mailto:contact@ventyrp.com"
                    linkText="contact@ventyrp.com"
                  />
                  <ContactCard
                    icon="🐦"
                    title="Social Media"
                    description="Follow us on social media for announcements, community spotlights, and updates."
                    link="https://mastodon.social/@ventycity"
                    linkText="@VENTYRoleplay"
                  />
                </div>

                <div className="text-center">
                  <Link
                    to="/join"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    Ready to Join? Get Started Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: string;
}> = ({ title, description, icon }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-colors">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-orange-400 mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const StatCard: React.FC<{
  number: string;
  label: string;
}> = ({ number, label }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-purple-500/30 flex flex-col items-center justify-center text-center">
    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-2">{number}</p>
    <p className="text-gray-400">{label}</p>
  </div>
);

const ContactCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}> = ({ icon, title, description, link, linkText }) => (
  <div className="bg-black/50 p-4 rounded-lg border border-purple-500/30 flex flex-col items-center text-center">
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4 text-sm">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
    >
      {linkText}
    </a>
  </div>
);

export default About;