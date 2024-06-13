import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full font-medium text-lg dark:text-light sm:text-base">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 p-32 !bg-lameLight dark:!bg-totalDark">
                <div className="">Let&apos;s connect!</div>
                <div className="flex items-center lg:py-2">
                    {' '}
                    <span className="text-primary text-2xl px-1 dark:text-primaryDark"> ✉</span>
                    Email: &nbsp;
                    <Link
                        href="mailto:prashil.lonakar@gmail.com?subject=Refer%20from%20Portfolio&body=Hello,%20I%20would%20like%20to%20connect%20with%20you%20regarding%20you%20Job%20Application.%0D%0A%0D%0AThank%20you."
                        target={'_blank'}
                        className=""
                    >
                        prashil.lonakar@gmail.com
                    </Link>
                </div>
                <span className="">&copy; {new Date().getFullYear()} By Prashil Lonakar</span>
            </Layout>
        </footer>
    );
};

export default Footer;
