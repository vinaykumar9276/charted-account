import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className=" shadow">
            <div className="container mx-auto flex items-center lg:justify-around sm:justify-between px-6 py-5">
                {/* Brand Name */}
                <NavLink className="text-lg font-semibold" to="/">
                    CA-Landing-Page
                </NavLink>

                {/* Hamburger Menu (Mobile) */}
                <button
                    onClick={toggleMenu}
                    className="block lg:hidden focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Links */}
                <div
                    className={`lg:flex items-center ${
                        isMenuOpen ? "block" : "hidden"
                    } w-full lg:w-auto`}
                >
                    <ul className="flex flex-col lg:flex-row lg:space-x-6 lg:justify-between">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 px-4 ${
                                        isActive
                                            ? "text-blue-800"
                                            : "hover:text-blue-800"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/accounts"
                                className={({ isActive }) =>
                                    `block py-2 px-4 ${
                                        isActive
                                            ? "text-blue-800"
                                            : "hover:text-blue-800"
                                    }`
                                }
                            >
                                Accounts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 px-4 ${
                                        isActive
                                            ? "text-blue-800"
                                            : "hover:text-blue-800"
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 px-4 ${
                                        isActive
                                            ? "text-blue-800"
                                            : "hover:text-blue-800"
                                    }`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;