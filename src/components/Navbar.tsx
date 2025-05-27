// src/components/Navbar.tsx - Fixed version with proper z-index and mobile handling
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Responsive breakpoints state
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsTabletView(width >= 750 && width <= 768 && height <= 650);
    };

    const checkLightbox = () => {
      setIsLightboxOpen(document.body.classList.contains('lightbox-open'));
    };
    
    // Initial checks
    handleResize();
    checkLightbox();
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // MutationObserver for lightbox
    const observer = new MutationObserver(checkLightbox);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen && (isMobile || isTablet)) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen, isMobile, isTablet]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Hide navbar when lightbox is open
  if (isLightboxOpen) {
    return null;
  }

  // Determine if we should show mobile menu
  const showMobileMenu = isMobile || isTablet || isTabletView;

  return (
    <>
      <header
        className={`fixed w-full transition-all duration-300 ${
          scrolled || isTabletView 
            ? 'bg-black/95 backdrop-blur-md shadow-xl' 
            : 'bg-black/20 backdrop-blur-sm'
        }`}
        style={{ 
          zIndex: 9999, // Higher than Discord widget (usually 1000)
          top: 0,
          left: 0,
          right: 0
        }}
      >
        <div className="w-full px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0 relative z-50">
              <img
                src={logo}
                alt="VENTY Roleplay"
                className={`transition-all duration-300 ${
                  isTabletView 
                    ? 'h-8' 
                    : isMobile 
                      ? 'h-8 sm:h-10' 
                      : 'h-10 lg:h-12'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className={`hidden ${showMobileMenu ? 'hidden' : 'lg:flex'} items-center space-x-8`}>
              <NavLink to="/" isActive={isActive("/")}>Home</NavLink>
              <NavLink to="/about" isActive={isActive("/about")}>About</NavLink>
              <NavLink to="/rules" isActive={isActive("/rules")}>Rules</NavLink>
              <NavLink to="/join" isActive={isActive("/join")}>Join</NavLink>
              <NavLink to="/staff" isActive={isActive("/staff")}>Staff</NavLink>
{/*               <NavLink to="/gallery" isActive={isActive("/gallery")}>Gallery</NavLink> */}
            </nav>

            {/* Desktop Discord Button */}
            <div className={`hidden ${showMobileMenu ? 'hidden' : 'lg:flex'} items-center`}>
              <a
                href="https://discord.gg/Pv77Upbptx"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Join Discord
              </a>
            </div>

            {/* Mobile/Tablet Controls */}
            <div className={`${showMobileMenu ? 'flex' : 'hidden'} items-center space-x-2 relative z-50`}>
              
              {/* Mobile Discord Button */}
              <a
                href="https://discord.gg/Pv77Upbptx"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-2 py-1.5 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-md font-medium hover:opacity-90 transition-opacity ${
                  isTabletView ? 'text-xs px-2' : 'text-sm px-3'
                }`}
              >
                {isTabletView ? 'Discord' : isMobile ? 'Discord' : 'Join Discord'}
              </a>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none p-2 rounded-md hover:bg-white/10 transition-colors relative z-50"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                style={{ minWidth: '40px', minHeight: '40px' }} // Better touch target
              >
                <div className="flex flex-col justify-center items-center w-5 h-5">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Fixed positioning and z-index */}
      {showMobileMenu && (
        <div
          className={`fixed inset-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'visible' : 'invisible'
          }`}
          style={{ 
            zIndex: 9998, // Just below header
            top: isTabletView ? '56px' : '56px', // Account for navbar height
          }}
        >
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div
            className={`absolute inset-x-0 top-0 bottom-0 bg-black/98 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              
              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="space-y-2">
                  <MobileNavLink to="/" isActive={isActive("/")} onClick={() => setIsOpen(false)}>
                    🏠 Home
                  </MobileNavLink>
                  <MobileNavLink to="/about" isActive={isActive("/about")} onClick={() => setIsOpen(false)}>
                    ℹ️ About
                  </MobileNavLink>
                  <MobileNavLink to="/rules" isActive={isActive("/rules")} onClick={() => setIsOpen(false)}>
                    📋 Rules
                  </MobileNavLink>
                  <MobileNavLink to="/join" isActive={isActive("/join")} onClick={() => setIsOpen(false)}>
                    🚀 How to Join
                  </MobileNavLink>
                  <MobileNavLink to="/staff" isActive={isActive("/staff")} onClick={() => setIsOpen(false)}>
                    👥 Staff
                  </MobileNavLink>
{/*                   <MobileNavLink to="/gallery" isActive={isActive("/gallery")} onClick={() => setIsOpen(false)}>
                    🖼️ Gallery
                  </MobileNavLink> */}

                  {/* Divider */}
                  <div className="border-t border-gray-700 my-4"></div>

                  
                  <a
                    href="https://venty-web-portal.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-white rounded-lg hover:bg-purple-500/20 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    📝 Application Portal
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-700 p-4">
                <div className="text-center space-y-3">
                  <p className="text-gray-400 text-sm">
                    Join our community of 75+ active players
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://discord.gg/Pv77Upbptx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors p-2"
                      aria-label="Discord"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </a>
                    
                    {/* <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors p-2"
                      aria-label="YouTube"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a> */}
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    © 2025 VENTY Roleplay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Desktop Navigation Link Component
const NavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}> = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`text-sm lg:text-base font-medium transition-all duration-200 relative hover:text-orange-400 ${
      isActive ? 'text-orange-400' : 'text-white'
    }`}
  >
    {children}
    {isActive && (
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full"></span>
    )}
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ to, children, isActive, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-200 min-h-[48px] ${
      isActive
        ? 'bg-gradient-to-r from-orange-500/20 to-purple-600/20 text-orange-400 border-l-4 border-orange-500'
        : 'text-white hover:bg-white/10 hover:text-orange-400'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
