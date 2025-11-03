import React, { useState, useEffect } from 'react';
import logo from "../assests/logo.png";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/past-projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
          ${scrolled
            ? 'shadow-2xl bg-gradient-to-r from-green-900 via-green-800 to-amber-900/95 backdrop-blur-md'
            : 'bg-gradient-to-r from-green-900 via-green-800 to-amber-900/90 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo and Brand */}
            <Link
              to="/"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={logo}
                alt="GRPS Logo"
                className="w-14 h-14 object-contain rounded-md shadow-md bg-white p-1"
              />
              <div>
                <h1 className="text-2xl font-extrabold text-white tracking-wide leading-tight">
                  GRPS
                </h1>
                <p className="text-xs font-medium text-amber-300 tracking-wide">
                  Plywood & Laminates
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative text-white text-lg transition-all duration-300 
                      after:content-[''] after:block after:w-0 after:h-0.5 after:bg-amber-400 after:transition-all after:duration-300 
                      hover:after:w-full hover:text-amber-200 ${isActive(link.path)
                        ? 'text-amber-300 after:w-full'
                        : ''
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white md:hidden focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen
            ? 'max-h-60 opacity-100'
            : 'max-h-0 opacity-0'
            }`}
        >
          <ul className="flex flex-col items-center bg-gradient-to-b from-green-900/95 to-amber-900/95 backdrop-blur-md border-t border-amber-600/30 py-3 space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block text-lg text-white hover:text-amber-300 transition-all duration-300 ${isActive(link.path)
                    ? 'text-amber-300 font-semibold'
                    : ''
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Border Glow */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 shadow-[0_0_10px_2px_rgba(251,191,36,0.5)]"></div>
      </nav>

      {/* Padding for fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Navbar;
