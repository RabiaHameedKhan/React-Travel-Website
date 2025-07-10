import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white px-6 py-4 shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-orange-400">WANDERWAVE</h1>

        {/* Hamburger Icon */}
        <div className="lg:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links */}
        <ul className="hidden lg:flex gap-6">
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'text-orange-400' : 'hover:text-orange-400'
              }
            >
              HOME
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'text-orange-400' : 'hover:text-orange-400'
              }
            >
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/destination"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'text-orange-400' : 'hover:text-orange-400'
              }
            >
              DESTINATIONS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'text-orange-400' : 'hover:text-orange-400'
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col gap-6 items-center py-8 lg:hidden">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-orange-400' : 'hover:text-orange-400'
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-orange-400' : 'hover:text-orange-400'
                }
              >
                DESTINATIONS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-orange-400' : 'hover:text-orange-400'
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-orange-400' : 'hover:text-orange-400'
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
