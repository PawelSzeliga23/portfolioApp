import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './languageToggle';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AnimatePresence, MotionConfig } from 'framer-motion';


const NavBar: React.FC = () => {
    const location = useLocation();
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const { t } = useTranslation();
    const widhth = window.innerWidth;
    const isMobile = widhth < 640;
    const [isMobileView] = useState(isMobile);
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

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

    return (
        <div>
            {!isMobileView && <div>
                <nav
                    className={`flex items-center justify-center py-5 fixed top-0 w-full z-20 sm:bg-transparent bg-transparent transition-transform duration-100 ${show ? 'translate-y-0' : '-translate-y-full'
                        }`}
                    role="navigation"
                >
                    <ul className="flex space-x-10">
                        <li>
                            <Link
                                to="/"
                                className={`${location.pathname === '/'
                                    ? 'text-lime-500 hover:text-lime-600 underline dark:text-purple-500 dark:hover:text-purple-600'
                                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white'
                                    }`}
                            >
                                {t('nav.home')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={`${location.pathname === '/about'
                                    ? 'text-lime-500 hover:text-lime-600 underline dark:text-purple-500 dark:hover:text-purple-600'
                                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white'
                                    }`}
                            >
                                {t('nav.about')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/projects"
                                className={`${location.pathname === '/projects'
                                    ? 'text-lime-500 hover:text-lime-600 underline dark:text-purple-500 dark:hover:text-purple-600'
                                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white'
                                    }`}
                            >
                                {t('nav.projects')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={`${location.pathname === '/contact'
                                    ? 'text-lime-500 hover:text-lime-600 underline dark:text-purple-500 dark:hover:text-purple-600'
                                    : 'text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white'
                                    }`}
                            >
                                {t('nav.contact')}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>}
            {isMobileView && <div>
                <header className="sticky top-0 inset-x-0 p-6 bg-transparent z-20">
                    <nav className="container mx-auto">
                        <motion.button
                            initial="hide"
                            animate={mobileNav ? "show" : "hide"}
                            onClick={toggleMobileNav}
                            className="flex flex-col space-y-1 relative z-10"
                        >
                            <motion.span
                                variants={{
                                    hide: {
                                        rotate: 0,
                                    },
                                    show: {
                                        rotate: 45,
                                        y: 5,
                                    },
                                }}
                                className="w-6 bg-black h-px block"
                            ></motion.span>
                            <motion.span
                                variants={{
                                    hide: {
                                        opacity: 1,
                                    },
                                    show: {
                                        opacity: 0,
                                    },
                                }}
                                className="w-6 bg-black h-px block"
                            ></motion.span>
                            <motion.span
                                variants={{
                                    hide: {
                                        rotate: 0,
                                    },
                                    show: {
                                        rotate: -45,
                                        y: -5,
                                    },
                                }}
                                className="w-6 bg-black h-px block"
                            ></motion.span>
                        </motion.button>
                        <AnimatePresence>
                            {mobileNav && (
                                <MotionConfig
                                    transition={{
                                        type: "spring",
                                        bounce: 0.1,
                                        duration: 0.1,
                                    }}
                                >
                                    <motion.div
                                        key="mobile-nav"
                                        variants={{
                                            hide: {
                                                x: "-100%",
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0.1,
                                                    when: "afterChildren",
                                                    staggerChildren: 0.1,
                                                    duration: 0.3,
                                                },
                                            },
                                            show: {
                                                x: "0%",
                                                transition: {
                                                    type: "spring",
                                                    bounce: 0.1,
                                                    when: "beforeChildren",
                                                    staggerChildren: 0.1,
                                                    duration: 0.3,
                                                },
                                            },
                                        }}
                                        initial="hide"
                                        animate="show"
                                        exit="hide"
                                        className="fixed inset-0 bg-lime-500 dark:bg-purple-500 p-6 flex flex-col justify-center space-y-10 lg:hidden"
                                    >
                                        <motion.ul
                                            variants={{
                                                hide: {
                                                    y: "25%",
                                                    opacity: 0,
                                                },
                                                show: {
                                                    y: "0%",
                                                    opacity: 1,
                                                },
                                            }}
                                            className="list-none space-y-6"
                                        >
                                            <li>
                                                <Link
                                                    to="/"
                                                    className={`${location.pathname === '/'
                                                        ? 'text-white'
                                                        : 'text-black'
                                                        } text-5xl font-bold`}
                                                    onClick={() => setMobileNav(false)}
                                                >
                                                    {t('nav.home')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/about"
                                                    className={`${location.pathname === '/about'
                                                        ? 'text-white'
                                                        : 'text-black'
                                                        } text-5xl font-bold`}
                                                    onClick={() => setMobileNav(false)}
                                                >
                                                    {t('nav.about')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/projects"
                                                    className={`${location.pathname === '/projects'
                                                        ? 'text-white'
                                                        : 'text-black'
                                                        } text-5xl font-bold`}
                                                    onClick={() => setMobileNav(false)}
                                                >
                                                    {t('nav.projects')}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/contact"
                                                    className={`${location.pathname === '/contact'
                                                        ? 'text-white'
                                                        : 'text-black'
                                                        } text-5xl font-bold`}
                                                    onClick={() => setMobileNav(false)}
                                                >
                                                    {t('nav.contact')}
                                                </Link>
                                            </li>
                                        </motion.ul>
                                    </motion.div>
                                </MotionConfig>
                            )}
                        </AnimatePresence>
                    </nav>
                </header>
            </div>}
            <div className={`${!mobileNav ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
                <LanguageToggle />
                <ThemeToggle />
            </div>
        </div >

    );
};

export default NavBar;
