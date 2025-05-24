// src/pages/JoinUs.tsx
import React, { useEffect } from 'react';
import Hero from '../components/Hero';

const JoinUs: React.FC = () => {
  // Handle anchor scrolling when component mounts
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page is fully rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div>
      <Hero
        title="HOW TO JOIN VENTY ROLEPLAY"
        subtitle="Follow these simple steps to start your new life in Los Santos"
        showButtons={false}
        backgroundImage="bg-[url('../assets/images/join-bg.jpg')]"
      />

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Getting Started Steps */}
            <div className="space-y-16">
              {/* Step 1 - Discord Community (with anchor ID) */}
              <StepItem
                number="01"
                title="Join Our Discord Community"
                description="Our Discord server is the central hub for all VENTY Roleplay activities, announcements, and support."
                id="discord-community" // Add anchor ID here
              >
                <div className="space-y-4 mt-6">
                  <p className="text-gray-400">
                    Click the button below to join our Discord server. Once there, you'll need to:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Read and accept our server rules</li>
                    <li>Complete the verification process</li>
                    <li>Introduce yourself in the #introductions channel</li>
                  </ul>
                  <div className="pt-4">
                    <a
                      href="https://discord.gg/kmNHZUDg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      Join Discord
                    </a>
                  </div>
                </div>
              </StepItem>

              <StepItem
                number="02"
                title="Install GTA V and FiveM"
                description="You'll need a legitimate copy of GTA V and the FiveM client to connect to our server."
              >
                <div className="space-y-4 mt-6">
                  <h4 className="text-orange-400 font-semibold">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>A legal copy of GTA V for PC (Steam, Epic Games, or Rockstar)</li>
                    <li>The latest version of FiveM client</li>
                    <li>At least 120GB of free disk space</li>
                    <li>Recommended: 12GB RAM and a quad-core processor</li>
                  </ul>
                  <div className="pt-4">
                    <a
                      href="https://fivem.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                    >
                      Download FiveM
                    </a>
                  </div>
                </div>
              </StepItem>

              <StepItem
                number="03"
                title="Complete the Whitelist Application"
                description="We have a streamlined whitelist process to ensure quality roleplay on our server."
              >
                <div className="space-y-4 mt-6">
                  <p className="text-gray-400">
                    Submit your whitelist application through our dedicated web portal. Simply visit the link below and navigate to the <strong>Applications</strong> section in the navigation bar to find the <strong>Whitelist Application</strong>.
                  </p>
                  <h4 className="text-orange-400 font-semibold">The application includes:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Basic information about you and your RP experience</li>
                    <li>A few roleplay scenarios to assess your RP skills</li>
                    <li>Character backstory creation</li>
                    <li>Understanding of server rules</li>
                  </ul>
                  <p className="text-gray-400 pt-2">
                    Applications are typically reviewed within 24-48 hours by our staff team.
                  </p>
                  <div className="pt-4">
                    <a
                      href="https://venty-web-portal.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      Access Application Portal
                    </a>
                  </div>
                </div>
              </StepItem>

              <StepItem
                number="04"
                title="Connect to the Server"
                description="Once whitelisted, you can connect to VENTY Roleplay directly through FiveM."
              >
                <div className="space-y-4 mt-6">
                  <h4 className="text-orange-400 font-semibold">Connection Steps:</h4>
                  <ol className="list-decimal list-inside text-gray-400 space-y-2">
                    <li>Open FiveM client</li>
                    <li>Click on "Favorites" tab</li>
                    <li>Click "Add Server" and enter: <span className="bg-gray-800 px-2 py-1 rounded">https://cfx.re/join/zeex4p</span></li>
                    <li>Or search for "VENTY Roleplay" in the server browser</li>
                    <li>Click Connect and wait for resources to download</li>
                  </ol>
                  <div className="p-4 mt-2 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-orange-400">Note:</strong> The first time you connect, you'll need to download approximately 5GB of custom assets. This might take some time depending on your internet connection speed.
                    </p>
                  </div>
                </div>
              </StepItem>

              <StepItem
                number="05"
                title="Create Your Character"
                description="Design your character and create their backstory in our character creation system."
              >
                <div className="space-y-4 mt-6">
                  <p className="text-gray-400">
                    When you first join, you'll be taken to our character creation screen where you can:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Customize your character's appearance</li>
                    <li>Choose starting clothing options</li>
                    <li>Enter your character's basic information</li>
                    <li>Select a spawn location to begin your journey</li>
                  </ul>
                  <p className="text-gray-400 pt-2">
                    Take your time creating your character - this will be your identity in Los Santos!
                  </p>
                </div>
              </StepItem>
            </div>

            {/* Additional Resources */}
            <div className="mt-20 p-8 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-purple-500/30">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Additional Resources</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResourceCard
                  title="Rule Guide"
                  description="A comprehensive guide to the community rules and guidelines to ensure a respectful and enjoyable experience for all members"
                  link="/rules#rules"
                  linkText="View Rules"
                />
              </div>
            </div>

            {/* Community Support */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4">
                Need Help?
              </h3>
              <p className="text-gray-300 mb-6">
                Our community is here to help you every step of the way. If you have any questions or need assistance, don't hesitate to reach out!
              </p>
              <a
                href="https://discord.gg/kmNHZUDg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-black/50 backdrop-blur-sm border-2 border-orange-500 text-white rounded-lg font-medium hover:bg-black/70 transition-colors"
              >
                Get Support on Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const StepItem: React.FC<{
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
  id?: string; // Add optional id prop
}> = ({ number, title, description, children, id }) => (
  <div className="flex flex-col md:flex-row gap-6" id={id}> {/* Add id to the div */}
    <div className="flex-shrink-0 flex items-start md:items-start">
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-full">
        {number}
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-xl text-orange-400">{description}</p>
      {children}
    </div>
  </div>
);

const ResourceCard: React.FC<{
  title: string;
  description: string;
  link: string;
  linkText: string;
}> = ({ title, description, link, linkText }) => (
  <div className="p-4 bg-black/50 border border-purple-500/30 rounded-lg hover:border-purple-500/60 transition-colors">
    <h4 className="text-lg font-semibold text-orange-400 mb-2">{title}</h4>
    <p className="text-gray-400 mb-4">{description}</p>
    <a
      href={link}
      className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
    >
      {linkText} →
    </a>
  </div>
);

export default JoinUs;