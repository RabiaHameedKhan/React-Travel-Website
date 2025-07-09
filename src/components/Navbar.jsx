import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-10">
                <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="text-2xl font-bold text-blue-600 cursor-pointer">WANDERWAVE</div>
                    <ul className="flex space-x-6 text-gray-700 font-medium">
                        <li >
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 underline px-2"
                                        : "text-gray-700 hover:text-blue-600 px-2"
                                }
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/destination"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 underline px-2"
                                        : "text-gray-700 hover:text-blue-600 px-2"
                                }
                            >
                                DESTINATION
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 underline px-2"
                                        : "text-gray-700 hover:text-blue-600 px-2"
                                }
                            >
                                ABOUT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 underline px-2"
                                        : "text-gray-700 hover:text-blue-600 px-2"
                                }
                            >
                                CONTACT US
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Navbar;