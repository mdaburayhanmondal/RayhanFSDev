import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router';
import { IoMenuSharp, IoClose, IoSunny, IoMoon } from 'react-icons/io5';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Navlink style
  const getLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-white bg-gray-900 hover px-5 py-2 rounded-full font-medium shadow-sm dark:text-[#161513] dark:bg-white dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
      : 'text-gray-600 hover:text-black hover:bg-black/50 hover:text-white px-5 py-2 rounded-full transition-all duration-300 dark:text-gray-900 dark:text-gray-600 dark:text-white/70 dark:hover:text-black/50 dark:text-white dark:hover:bg-white/50 bg-black/5';

  return (
    <nav
      className="
  fixed top-0 left-0 w-full z-50 h-20
  flex items-center justify-between px-5
  bg-white/70 backdrop-blur-xl shadow-sm border-b border-black/5
  dark:bg-[#161513]/70 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] dark:border-white/10
  transition-colors duration-300
"
    >
      <Link
        to="/"
        className="h-12 md:h-18.75"
        onClick={() => setMenuOpen(false)}
      >
        {/* ✅ DYNAMIC LOGO SWITCHING */}
        <img
          src={theme === 'dark' ? 'RayhanFSDev.png' : 'RayhanFSDev_Light.png'}
          alt="Logo"
          className="h-full object-contain transition-opacity duration-300"
        />
      </Link>

      {/* 🟡 Theme Toggle - Centered Absolute */}
      <button
        onClick={toggleTheme}
        className="
          absolute left-1/2 -translate-x-1/2 
          p-2 rounded-full 
          bg-gray-100 text-orange-500 hover:bg-orange-100 hover:scale-110 
          dark:bg-white/10 dark:text-yellow-400 dark:hover:bg-white/20
          transition-all duration-300 shadow-sm
        "
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <IoSunny size={20} /> : <IoMoon size={20} />}
      </button>

      {/* Mobile Icon */}
      <div
        className="md:hidden cursor-pointer z-50 dark:text-white text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose size={30} /> : <IoMenuSharp size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`
          absolute top-full left-0 w-full flex flex-col items-center gap-y-4 py-8 md:hidden z-40
          bg-white/95 border-b border-black/10 shadow-xl
          dark:bg-[#161513]/85 dark:border-white/10
          transition-all duration-300
          ${
            menuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-10 pointer-events-none'
          }
        `}
      >
        <NavLink
          onClick={() => setMenuOpen(false)}
          to="/"
          className={getLinkStyle}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setMenuOpen(false)}
          to="/projects"
          className={getLinkStyle}
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() => setMenuOpen(false)}
          to="/contact"
          className={getLinkStyle}
        >
          Contact
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-x-4 items-center">
        <NavLink to="/" className={getLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/projects" className={getLinkStyle}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={getLinkStyle}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
