import React, { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/');

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleNavigation = (path) => {
    setActiveLink(path);
    window.location.href = path;
  };

  return (
    <nav className="fixed w-full bg-[#1a1f2e]/95 backdrop-blur-md px-6 py-4 flex justify-between items-center shadow-lg z-50 border-b border-white/5">
      
      {/* Logo pakai PNG */}
      <button onClick={() => handleNavigation('/')}>
        <img 
          src="/images/ptjg.jpeg"   
          alt="Profile Logo"
          className="w-10 h-10 rounded-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </button>
      
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.path}>
            <button
              onClick={() => handleNavigation(link.path)}
              className={`relative font-medium transition-all duration-300 hover:text-cyan-400 group ${
                activeLink === link.path ? 'text-cyan-400' : 'text-gray-300'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                  activeLink === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
