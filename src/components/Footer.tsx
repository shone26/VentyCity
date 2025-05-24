// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-purple-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="VENTY Roleplay" className="h-20" />
            </Link>
            <p className="text-gray-400 mb-4">
              Experience the ultimate GTA V roleplay server with immersive gameplay and a vibrant community.
            </p>
            <div className="flex space-x-4">
              {/* <SocialLink href="https://discord.gg/Pv77Upbptx" icon="discord" /> */}
              {/* <SocialLink href="#" icon="twitter" />
              <SocialLink href="#" icon="youtube" />
              <SocialLink href="#" icon="instagram" />
              <SocialLink href="#" icon="tiktok" /> */}
            </div>
          </div>

          {/* Contact and Server Info */}
          {/* <div>
            <h3 className="text-white font-bold mb-4 text-lg">Connect With Us</h3>
            <p className="text-gray-400 mb-2">
              <strong className="text-orange-400">Discord:</strong> discord.gg/venty
            </p>
            <p className="text-gray-400 mb-2">
              <strong className="text-orange-400">Email:</strong> contact@ventyrp.com
            </p>
            <p className="text-gray-400 mb-2">
              <strong className="text-orange-400">Server IP:</strong> cfx.re/join/venty
            </p>
            <p className="text-gray-400 mb-6">
              <strong className="text-orange-400">Players:</strong> <span className="text-green-500">150+</span> online
            </p>
            <a
              href="https://discord.gg/Pv77Upbptx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm inline-block"
            >
              Join Our Discord
            </a>
          </div> */}

          {/* Empty spacer for better spacing */}
          <div className="hidden md:block"></div>
          

          <div className="md:col-start-6">
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/rules">Server Rules</FooterLink>
              <FooterLink to="/join">How to Join</FooterLink>
              <FooterLink to="/staff">Our Team</FooterLink>
              <FooterLink to="/gallery">Gallery</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            {/* &copy; {currentYear} VENTY Roleplay. All rights reserved. */}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <Link to="https://discord.gg/CJA3AbyA" className="hover:text-gray-300 transition-colors">Content Policy</Link>
            <a
              href="https://fivem.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              Powered by FiveM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
// const SocialLink: React.FC<{
//   href: string;
//   icon: string;
// }> = ({ href, icon }) => {
//   // Simple function to get the appropriate icon
//   const getIcon = () => {
//     switch (icon) {
//       case 'discord':
//         return (
//           <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
//           </svg>
//         );
//       // case 'twitter':
//       //   return (
//       //     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       //       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//       //     </svg>
//       //   );
//       // case 'youtube':
//       //   return (
//       //     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       //       <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//       //     </svg>
//       //   );
//       // case 'instagram':
//       //   return (
//       //     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       //       <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
//       //     </svg>
//       //   );
//       // case 'tiktok':
//       //   return (
//       //     <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//       //       <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
//       //     </svg>
//       //   );
//       default:
//         return null;
//     }
//   };

//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="bg-gray-800 text-gray-400 hover:text-white p-2 rounded-full transition-colors"
//       aria-label={`Follow us on ${icon}`}
//     >
//       {getIcon()}
//     </a>
//   );
// };

const FooterLink: React.FC<{
  to: string;
  children: React.ReactNode;
  external?: boolean;
}> = ({ to, children, external = false }) => {
  if (external) {
    return (
      <li>
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-orange-400 transition-colors"
        >
          {children}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link to={to} className="text-gray-400 hover:text-orange-400 transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;