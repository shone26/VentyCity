// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Check for lightbox class on body
    const checkLightbox = () => {
      setIsLightboxOpen(document.body.classList.contains('lightbox-open'));
    };
    
    // Initial check
    checkLightbox();
    
    // Create a MutationObserver to watch for class changes on body
    const observer = new MutationObserver(checkLightbox);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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

  // Hide navbar when lightbox is open
  if (isLightboxOpen) {
    return null;
  }

  return (
    <header
      className={`fixed w-full transition-all duration-300 ${scrolled || isTabletView ? 'bg-black/80 backdrop-blur-md py-1' : 'bg-transparent py-2 sm:py-4'
        } navbar-container`}
      style={{ zIndex: 1000 }}
    >
      <div className="w-full" style={{ margin: 0, padding: '0 1rem', maxWidth: 'none' }}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="VENTY Roleplay"
              className={`h-8 sm:h-10 md:h-12 navbar-logo ${isTabletView ? 'h-8' : ''}`}
            />
          </Link>

          {/* Mobile Menu Button (show on tablet view too) */}
          <div className={`${isTabletView ? 'block' : 'lg:hidden'}`}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu - Hide on tablet view */}
          <nav className={`hidden ${isTabletView ? 'hidden' : 'lg:flex'} items-center space-x-3 md:space-x-6`}>
            <NavLink to="/" isActive={isActive("/")}>Home</NavLink>
            <NavLink to="/about" isActive={isActive("/about")}>About</NavLink>
            <NavLink to="/rules" isActive={isActive("/rules")}>Rules</NavLink>
            <NavLink to="/join" isActive={isActive("/join")}>Join</NavLink>
            <NavLink to="/staff" isActive={isActive("/staff")}>Staff</NavLink>
            <NavLink to="/gallery" isActive={isActive("/gallery")}>Gallery</NavLink>
          </nav>
          
          <a
            href="https://discord.gg/Pv77Upbptx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-sm bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Join Discord
          </a>
        </div>

        {/* Mobile Menu (including tablet view) */}
        <div
          className={`${isTabletView ? '' : 'lg:hidden'} fixed inset-0 top-[56px] bg-black/95 backdrop-blur-md transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
            } pt-6 z-40`}
        >
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto">
              <div className="flex flex-col space-y-2 items-center px-4 py-4">
                <MobileNavLink to="/" isActive={isActive("/")}>Home</MobileNavLink>
                <MobileNavLink to="/about" isActive={isActive("/about")}>About</MobileNavLink>
                <MobileNavLink to="/rules" isActive={isActive("/rules")}>Rules</MobileNavLink>
                <MobileNavLink to="/join" isActive={isActive("/join")}>How to Join</MobileNavLink>
                <MobileNavLink to="/staff" isActive={isActive("/staff")}>Staff</MobileNavLink>
                <MobileNavLink to="/gallery" isActive={isActive("/gallery")}>Gallery</MobileNavLink>
              </div>
            </div>
            <div className="p-4 border-t border-gray-800">
              <a
                href="https://discord.gg/Pv77Upbptx"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Helper components for nav links
const NavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}> = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`text-sm lg:text-base font-medium transition-colors relative ${isActive
        ? 'text-[#646cff]'
        : 'hover:text-orange-400'
      }`}
  >
    {children}
    {isActive && (
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-purple-600"></span>
    )}
  </Link>
);

const MobileNavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}> = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`text-white text-lg font-medium w-full text-center py-2 border-b border-gray-800 ${isActive ? 'text-orange-400' : 'hover:text-orange-400'
      } transition-colors`}
  >
    {children}
  </Link>
);

export default Navbar;