import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-3.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};
const about = () => {
    return (
        <>
            <Head>
                <title>Prashlons | About Page</title>
                <meta name="description" content="any description"></meta>
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="👋 Hi, I'm Prashil Lonakar."
                        className="mb-16 !text-6xl lg:!text-5xl sm:!text-5xl xs:text-4xl sm:mb-8"
                    ></AnimatedText>
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            <p className="font-medium">
                                Hi, &nbsp;
                                <span className="text-primary dark:text-primaryDark">
                                    I&apos;m Prashlons aka Prashil Lonakar
                                </span>
                                , a Software Developer Engineer with 5 years of experience in
                                designing, developing, building, unit-testing, optimizing effective
                                web applications and Project Managements. Possesses expertise in
                                efficient development processes by creating user-friendly,
                                responsive UI and minimizing bug count by 40% within the last
                                quarter.
                            </p>
                            <p className="font-medium my-4">
                                I am always looking for new and innovative ways to bring my
                                client&apos;s visions to life and dedicated to creating elegant and
                                visually appealing user experiences that elevate complex workflows.I
                                believe in solving problems and creating intuitive, enjoyable
                                experiences for users.
                            </p>

                            <p className="font-medium my-4">
                                I always bring my commitment to design excellence and user-centered
                                thinking to every project I work on. I look forward to the
                                opportunity to bring my skills and passion to your next project.
                            </p>

                            <p className="font-medium">
                                Currently I m working as a Web-Developer at &nbsp;
                                <span className="text-primary dark:text-primaryDark">
                                    Orangebits software technology
                                </span>
                                &nbsp; helping them to build their creative and innovative web
                                applications.
                            </p>
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid p-8 bg-light border-dark dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image
                                src={profilePic}
                                alt="Codebucks"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            ></Image>
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={15} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={18} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed
                                </h2>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default about;
