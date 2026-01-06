import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router';
import { IoMenuSharp, IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Reusable style logic for NavLinks
  const getLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-[#161513] bg-white px-5 py-2 rounded-full font-medium shadow-[0_0_15px_rgba(255,255,255,0.3)]'
      : 'text-white/70 hover:text-white hover:bg-white/5 px-5 py-2 rounded-full transition-all duration-300';

  return (
    <nav
      className="
    fixed top-0 left-0 w-full z-50
    h-20
    flex items-center justify-between px-5
    bg-[#161513]/70 backdrop-blur-xl
    shadow-[0_8px_30px_rgba(0,0,0,0.35)]
    border-b border-white/10
    text-white
  "
    >
      <Link to="/" className="h-18.75" onClick={() => setMenuOpen(false)}>
        <img
          src="RayhanFSDev.png"
          alt="Logo"
          className="h-full object-contain"
        />
      </Link>

      {/* Mobile Icon Toggle */}
      <div
        className="md:hidden cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose size={30} /> : <IoMenuSharp size={30} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className={`
  absolute top-full left-0 w-full flex flex-col items-center gap-y-4 py-8 md:hidden z-40
  bg-[#161513]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300
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
