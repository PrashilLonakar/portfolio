import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const HireME = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-content overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0">
            <div className="w-48 h-auto flex item-center justify-center relative md:w-24">
                <CircularText
                    className={'fill-dark animate-spin-slow dark:fill-light'}
                    colorClass={'fill-dark animate-spin-slow dark:fill-light'}
                ></CircularText>
                <Link
                    href="mailto:prashil.lonakar@gmail.com?subject=Refer%20from%20Portfolio&body=Hello,%20I%20would%20like%20to%20connect%20with%20you%20regarding%20your%20Job%20Application.%0D%0A%0D%0AThank%20you."
                    className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:text-dark dark:bg-light hover:dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light md:w-12 md:h-12 md:text-[10px]"
                >
                    Hire me
                </Link>
            </div>
        </div>
    );
};

export default HireME;
