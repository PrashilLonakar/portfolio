import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { FacebookIcon, GithubIcon, LinkedInIcon, MoonIcon, SunIcon, XIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    router.asPath === href ? 'w-full' : 'w-0'
                } dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
    const router = useRouter();
    const handleCMClick = () => {
        toggle();
        router.push(href);
    };
    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleCMClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    router.asPath === href ? 'w-full' : 'w-0'
                } dark:bg-dark`}
            >
                &nbsp;
            </span>
        </button>
    );
};

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();
    const currentPath = router.pathname.replace('/', '') || 'home';

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:p-12 sm:px-8 sm:py-[2.75rem]">
            <button
                className="flex-col justify-center items-center hidden lg:flex"
                onClick={handleClick}
            >
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
                        isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                        isOpen ? 'hidden' : 'block my-0.5'
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
                        isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                ></span>
            </button>
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink
                        href={{
                            pathname: '/home',
                            query: { backTo: currentPath }, // Dynamically add query param
                        }}
                        title="Home"
                        className="mr-4"
                    />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
                </nav>
                <nav className="flex items-center justify-center flex-wrap mt-2">
                    <motion.a
                        href="https://x.com/Prashlons"
                        target='{"_blank"}'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="mr-3 sm:mx-1"
                    >
                        <XIcon />
                    </motion.a>
                    <motion.a
                        href="https://github.com/PrashilLonakar"
                        target='{"_blank"}'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3 sm:mx-1"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/prashil-lonakar-82b604130/"
                        target='{"_blank"}'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3 sm:mx-1"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.facebook.com/prashil.lonkar"
                        target='{"_blank"}'
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 ml-3 sm:mx-1"
                    >
                        <FacebookIcon />
                    </motion.a>

                    <button
                        style={{ width: '1.68rem' }}
                        onClick={() => setMode(mode == 'light' ? 'dark' : 'light')}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                            mode == 'light'
                                ? 'bg-nightSky text-moonWhite'
                                : 'bg-daySky text-sunnyYellow'
                        }`}
                    >
                        {mode == 'dark' ? (
                            <MoonIcon
                                height={'1.25rem'}
                                width={'1.25rem'}
                                className={'fill-dark'}
                            />
                        ) : (
                            <SunIcon height={'1.25rem'} width={'1.25rem'} className={'fill-dark'} />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen ? (
                <motion.div
                    className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
                    initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <nav className="flex flex-col items-center justify-center">
                        <CustomMobileLink
                            href={{
                                pathname: '/home',
                                query: { backTo: currentPath }, // Dynamically add query param
                            }}
                            title="Home"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/about"
                            title="About"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/projects"
                            title="Projects"
                            className=""
                            toggle={handleClick}
                        />
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap ">
                        <motion.a
                            href="https://x.com/Prashlons"
                            target='{"_blank"}'
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="mr-3"
                        >
                            <XIcon className="!text-light dark:!text-dark" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/PrashilLonakar"
                            target='{"_blank"}'
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/prashil-lonakar-82b604130/"
                            target='{"_blank"}'
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mx-3"
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.facebook.com/prashil.lonkar"
                            target='{"_blank"}'
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 ml-3"
                        >
                            <FacebookIcon />
                        </motion.a>

                        <button
                            style={{ width: '1.68rem' }}
                            onClick={() => setMode(mode == 'light' ? 'dark' : 'light')}
                            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                                mode == 'light'
                                    ? 'bg-nightSky text-moonWhite'
                                    : 'bg-daySky text-sunnyYellow'
                            }`}
                        >
                            {mode == 'dark' ? (
                                <MoonIcon
                                    height={'1.2rem'}
                                    width={'1.2rem'}
                                    className={'fill-dark'}
                                />
                            ) : (
                                <SunIcon
                                    height={'1.2rem'}
                                    width={'1.2rem'}
                                    className={'fill-dark'}
                                />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

export default NavBar;
