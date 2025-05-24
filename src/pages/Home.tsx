// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
// import axios from 'axios';

// Import community images
const communityImage1 = 'https://i.ibb.co/m7X3VXM/1.png';
const communityImage2 = 'https://i.ibb.co/svdvDVth/2.png';
const communityImage3 = 'https://i.ibb.co/TxDWNZVF/3.jpg';
const communityImage4 = 'https://i.ibb.co/fVcVWfKm/4.jpg';
const communityImage5 = 'https://i.ibb.co/zTK38mg1/5.png';
const communityImage6 = 'https://i.ibb.co/nNVT1615/6.jpg';

// interface ServerStatus {
//   status: 'online' | 'offline';
//   members: number;
//   membersOnline: number;
// }

const Home: React.FC = () => {

  // const [serverStatus, setServerStatus] = useState<ServerStatus>({
  //   status: 'offline',
  //   members: 0,
  //   membersOnline: 0
  // });
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchServerStatus = async () => {
  //     try {
  //       // Replace with your actual Discord server ID and bot token
  //       const response = await axios.get(
  //         `https://discord.com/api/v10/guilds/REPLACE_WITH_YOUR_SERVER_ID/widget.json`,
  //         {
  //           headers: {
  //             'Authorization': `Bot REPLACE_WITH_YOUR_BOT_TOKEN`
  //           }
  //         }
  //       );

    //     setServerStatus({
    //       status: 'online',
    //       members: response.data.member_count || 0,
    //       membersOnline: response.data.presence_count || 0
    //     });
    //   } catch (error) {
    //     console.error('Failed to fetch Discord server status:', error);
    //     setServerStatus({
    //       status: 'offline',
    //       members: 0,
    //       membersOnline: 0
    //     });
    //   } finally {
    //     setIsLoading(false);
  //    }
  // };

  // Fetch status every 5 minutes
//   fetchServerStatus();
//   const intervalId = setInterval(fetchServerStatus, 5 * 60 * 1000);

//   // Cleanup interval on component unmount
//   return () => clearInterval(intervalId);
// }, []);

  return (
    <div>
      <Hero />

      {/* Server Status Section */}
      {/* <section className="py-8 sm:py-12 bg-black">
        <div className="w-full" style={{ margin: 0, padding: '0 1rem', maxWidth: 'none' }}>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
              VENTY ROLEPLAY SERVER STATUS
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatusCard 
                label="Server Status" 
                value={isLoading ? 'Loading...' : serverStatus.status === 'online' ? 'Online' : 'Offline'}
                icon={serverStatus.status === 'online' ? '🟢' : '🔴'}
                loading={isLoading}
              />
              <StatusCard 
                label="Total Members" 
                value={isLoading ? 'Loading...' : serverStatus.members.toLocaleString()}
                icon="👥"
                loading={isLoading}
              />
              <StatusCard 
                label="Online Members" 
                value={isLoading ? 'Loading...' : serverStatus.membersOnline.toLocaleString()}
                icon="💻"
                loading={isLoading}
              />
              <StatusCard 
                label="Server Uptime" 
                value="24/7" 
                icon="⏳"
              />
            </div>
            
            <div className="mt-6 text-center">
              <a
                href="https://discord.gg/Pv77Upbptx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                Join Our Discord
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="w-full" style={{ margin: 0, padding: '0 1rem', maxWidth: 'none' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-10 sm:mb-16">
            EXPERIENCE THE NEXT LEVEL OF ROLEPLAY
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon="🚓"
              title="Police & Crime"
              description="Join the police force to protect and serve or build your criminal empire through heists, drug operations, and more."
            />
            <FeatureCard
              icon="🏙️"
              title="Civilian Life"
              description="Own properties, run businesses, work various jobs, and engage in a realistic economy with other players."
            />
            <FeatureCard
              icon="🏎️"
              title="Custom Vehicles"
              description="Over 500 custom vehicles including cars, motorcycles, planes, boats, and more with realistic handling."
            />
            <FeatureCard
              icon="💼"
              title="Jobs & Economy"
              description="Dozens of legal and illegal jobs, businesses to own, and a complex economy system that rewards roleplaying."
            />
            <FeatureCard
              icon="🏥"
              title="Emergency Services"
              description="Join the EMS or work as a mechanic to help the community and earn money."
            />
            <FeatureCard
              icon="🎮"
              title="Frequent Updates"
              description="Our dedicated development team releases new content, features, and optimizations every week."
            />
          </div>
        </div>
      </section>

      {/* Community Showcase */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="w-full" style={{ margin: 0, padding: '0 1rem', maxWidth: 'none' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-10 sm:mb-16">
            OUR COMMUNITY IN ACTION
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: communityImage1, caption: 'Server Event Meetup' },
              { src: communityImage2, caption: 'Roleplay Scenario' },
              { src: communityImage3, caption: 'Vehicle Showcase' },
              { src: communityImage4, caption: 'Emergency Services Training' },
              { src: communityImage5, caption: 'City Street Interaction' },
              { src: communityImage6, caption: 'Group Collaboration' }
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-video overflow-hidden rounded-lg relative group border border-purple-500/30 hover:border-purple-500/60 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/gallery#gallery"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* How to Join CTA - Updated with matching colors */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-purple-900/20 to-black relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="w-full relative z-10" style={{ margin: 0, padding: '0 1rem', maxWidth: 'none' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-4 sm:mb-6">
              READY TO JOIN THE ACTION?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              Follow our simple steps to join VENTY Roleplay and start your new life in Los Santos. Our community welcomes players of all experience levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/join#discord-community"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm sm:text-lg"
              >
                How To Join
              </Link>
              <a
                href="https://discord.gg/Pv77Upbptx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 bg-black/50 backdrop-blur-sm border-2 border-purple-500 text-white rounded-lg font-medium hover:bg-black/70 transition-colors text-sm sm:text-lg"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-12 sm:py-16 md:py-20 bg-black">
        <div className="w-full" style={{ margin: 0, padding: '0 1rem', maxWidth: 'none' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600 mb-10 sm:mb-16">
            LATEST SERVER UPDATES
          </h2>

          <div className="max-w-4xl mx-auto">
            <UpdateCard
              date="April 14, 2025"
              title="Apartment Update"
              description="Apartment has been updated with new lobby (Near Red-Parking). House Robbery difficulties reduced."
            />
            <UpdateCard
              date="March 29, 2025"
              title="Police Department Expansion"
              description="Added new petshop. Added new K9 unit for police."
            />
            <UpdateCard
              date="March 24, 2025"
              title="New Heist"
              description="Added new yacht heist. "
            />
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <a
              href="https://discord.gg/9f5wHbBD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-black/50 backdrop-blur-sm border-2 border-purple-500 text-white rounded-lg font-medium hover:bg-black/70 transition-colors text-sm sm:text-base"
            >
              Full Patch Notes on Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const FeatureCard: React.FC<{
  icon: string;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black p-5 sm:p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-colors group h-full">
    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{icon}</div>
    <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </div>
);

const UpdateCard: React.FC<{
  date: string;
  title: string;
  description: string;
}> = ({ date, title, description }) => (
  <div className="mb-6 sm:mb-8 border-l-4 border-purple-500 pl-4 sm:pl-6">
    <div className="text-xs sm:text-sm text-orange-400 mb-1">{date}</div>
    <h3 className="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-2">{title}</h3>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </div>
);

// const StatusCard: React.FC<{
//   label: string;
//   value: string;
//   icon: string;
//   loading?: boolean;
// }> = ({ label, value, icon, loading = false }) => (
//   <div className="bg-black/50 p-4 rounded-lg border border-purple-500/30 flex flex-col items-center">
//     <div className="text-3xl mb-2">{icon}</div>
//     <p className="text-gray-400 text-sm mb-1">{label}</p>
//     <p className={`font-bold text-lg ${loading ? 'animate-pulse text-gray-500' : 'text-white'}`}>
//       {value}
//     </p>
//   </div>
// );

export default Home;