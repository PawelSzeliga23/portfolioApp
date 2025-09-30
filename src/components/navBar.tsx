import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
    const location = useLocation();
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 10) {
                setShow(false);
            } else {
                if (currentScroll == 0) {
                setShow(true);
                }
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll]);

    const widhth = window.innerWidth;
    const isMobile = widhth < 640;

    return (
        <nav
            className={`flex items-center justify-center py-5 fixed top-0 w-full z-20 sm:bg-transparent bg-white transition-transform duration-100 ${
                show ? 'translate-y-0' : '-translate-y-full'
            }`}
            role="navigation"
        >
            {!isMobile && (
                <div className="absolute left-0 flex items-center opacity-0 sm:opacity-100">
                    <img
                        src="/src/assets/ps-high-resolution-logo.png"
                        alt="avatar"
                        className="w-24 rounded-full"
                    />
                </div>
            )}
            <ul className="flex space-x-10">
                <li>
                    <Link
                        to="/"
                        className={`${
                            location.pathname === '/'
                                ? 'text-lime-500 hover:text-lime-600 underline'
                                : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={`${
                            location.pathname === '/about'
                                ? 'text-lime-500 hover:text-lime-600 underline'
                                : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/projects"
                        className={`${
                            location.pathname === '/projects'
                                ? 'text-lime-500 hover:text-lime-600 underline'
                                : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className={`${
                            location.pathname === '/contact'
                                ? 'text-lime-500 hover:text-lime-600 underline'
                                : 'text-gray-700 hover:text-gray-900'
                        }`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
