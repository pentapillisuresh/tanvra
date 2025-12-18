// components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Industries', 'Jobs', 'Insights', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#003366] shadow-lg text-white'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-3 py-2">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="h-20 flex items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="TANVARA Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
        
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-medium">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className={`transition-colors duration-300 hover:text-[#EECE69] ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <button
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 border-2 ${
                isScrolled
                  ? 'bg-[#EECE69] text-white border-[#EECE69] hover:bg-[#d4b952]'
                  : 'bg-[#EECE69] text-white border-[#EECE69] hover:bg-[#d4b952]'
              }`}
            >
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-white hover:bg-[#002244]'
                : 'text-white hover:bg-[#003366]/80'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-3 py-4 rounded-lg border ${
              isScrolled
                ? 'bg-[#003366] border-[#002244]'
                : 'bg-[#003366]/90 border-[#002244]'
            }`}
          >
            <div className="flex flex-col space-y-4 px-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className={`py-2 border-b transition-colors duration-300 ${
                    isScrolled
                      ? 'border-[#002244] text-white hover:text-[#EECE69]'
                      : 'border-[#002244] text-white hover:text-[#EECE69]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-2">
                <button
                  className="w-full px-4 py-3 rounded-full bg-[#EECE69] text-white font-semibold hover:bg-[#d4b952] transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-[#EECE69]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Get Started</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;