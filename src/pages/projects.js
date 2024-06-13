import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import featureProject1 from '../../public/images/projects/E-commerse-web-app-frontend-client.png';
import featureProject2 from '../../public/images/projects/Mean-web-chat-socket.io.png';
import featureProject3 from '../../public/images/projects/Cinema-web-app_using_NgRx.png';
import project1 from '../../public/images/projects/E-commerse-web-app-frontend-admin-frontend.png';
import project2 from '../../public/images/projects/E-commerse-web-app-frontend-admin-backend.png';
import project3 from '../../public/images/projects/Angular-todo-app.png';
import project4 from '../../public/images/projects/Linkedin-clone.png';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeatureProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-96"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                ></FramerImage>
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10 dark:text-light">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light dark:text-dark dark:bg-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col justify-center items-center rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <Image src={img} alt={title} className="w-full h-80"></Image>
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
                        {title}
                    </h2>
                </Link>
                <div className="mt-2 flex items-center justify-between w-full dark:text-light">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline md:text-base"
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};
const projects = () => {
    return (
        <>
            <Head>
                <title>Prashlons | Projects Page</title>
                <meta name="description" content="any description"></meta>
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="View My Work 👇"
                        className="mb-16 !text-6xl lg:!text-6xl sm:!text-6xl xs:text-4xl sm:mb-8"
                    ></AnimatedText>
                    <p className="font-medium text-dark/75 dark:text-light/75 py-3">
                        <span className="text-primary dark:text-primaryDark">[ Note:</span>&nbsp;
                        This are my personal projects which I have work on, in my free time. you can
                        check out my resume from home page which contain all the Client projects
                        which i work on. Some of the client like Flipkart, Pfizer, Humanest,
                        Haldiram etc. &nbsp;
                        <span className="text-primary dark:text-primaryDark">]</span>
                    </p>
                    <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeatureProject
                                title="E-commerse Application"
                                summary="A feature-rich E-commerse App using React, Material Ui. It shows products list and details with multiple categories and filter options. User can checkout there orders and pay using credit card."
                                link="https://ama-john-ecomm.netlify.app/"
                                github="https://github.com/PrashilLonakar/mern__e-commerse-gadgets__frontend"
                                type="Featured Project"
                                img={featureProject1}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="E-commerse Admin panel (Frontend)"
                                summary="A feature-rich E-commerse Admin panel App using React, Material Ui. Admin user can add, edit and delete product, blog, category, brand, coupon etc. Basically it contain all the businees logic of all the product present in E-commerse application."
                                link="https://github.com/PrashilLonakar/mern__e-commerse-gadgets__frontend-admin"
                                github="https://github.com/PrashilLonakar/mern__e-commerse-gadgets__frontend-admin"
                                type="Featured Project"
                                img={project1}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="E-commerse Admin panel (Backend)"
                                summary="A Business logic of all the server side data present in the application"
                                link="https://github.com/PrashilLonakar/mern__e-commerse-gadgets__backend"
                                github="https://github.com/PrashilLonakar/mern__e-commerse-gadgets__backend"
                                type="Featured Project"
                                img={project2}
                            />
                        </div>
                        <div className="col-span-12">
                            <FeatureProject
                                title="Web-chatting Application"
                                summary="A professional web-chatting website using Angular, Node.js and Socket.io. It has smooth chatting feature between users or groups/rooms (you can create room or group where 2 or more users can join to chat with each other and this chat only visible to group member only). It is mobile responsive."
                                link="https://github.com/PrashilLonakar/MEAN__Socket.io__Web-chatting-app"
                                github="https://github.com/PrashilLonakar/MEAN__Socket.io__Web-chatting-app"
                                type="Featured Project"
                                img={featureProject2}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="task App Application"
                                summary="A Task App using Angular, Material Ui. Here you assign task to different users."
                                link="https://github.com/PrashilLonakar/Angular__tasks-app"
                                github="https://github.com/PrashilLonakar/Angular__tasks-app"
                                type="Featured Project"
                                img={project3}
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Linkedin Clone Application"
                                summary="Its a Clone app of Linkedin made using Reacjs, Material Ui."
                                link="https://github.com/PrashilLonakar/React__Redux__Linkedin-clone-web-app"
                                github="https://github.com/PrashilLonakar/React__Redux__Linkedin-clone-web-app"
                                type="Featured Project"
                                img={project4}
                            />
                        </div>
                        <div className="col-span-12">
                            <FeatureProject
                                title="Cinema Web Application"
                                summary="A Cinema web application using Angular, NgRx, Material Ui, Rxjs. It has features like add, edit, delete, search movie functionality. It also has movie detail, movie list and movie genre. Its mobile reponsive. The whole application uses NgRx store to store and retrieve data and state management. It is hosted on firebase."
                                link="https://github.com/PrashilLonakar/Angular__NGRX__cinema-web-app"
                                github="https://github.com/PrashilLonakar/Angular__NGRX__cinema-web-app"
                                type="Featured Project"
                                img={featureProject3}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
