import React from 'react';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-left justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
            >
                <h3 className="capatalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        className="text-primary dark:text-primaryDark capatalize"
                    >
                        @{company}
                    </a>
                </h3>
                <span className="capatalize text-medium text-dark/75 dark:text-light/75 xs:text-sm ">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};
const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
                    <Details
                        position="Senior Software Engineer"
                        company="Orangebits"
                        time="june 2023 - Present"
                        address="Nagpur, Maharastra."
                        work="Worked and leaded on a team, responsible for developing new application for orangebits client. Ensure seamless communication between client-side and server-side with provided bugless, better efficiency and high quality products."
                    />
                    <Details
                        position="Software Engineer"
                        company="Orangebits"
                        time="jan 2021 - june 2023"
                        address="Nagpur, Maharastra."
                        work="Develop user interfaces using Angular or React. Implement client-side logic for interactive web applications, Design and develop RESTful APIs using Express.js. Write server-side logic to handle business processes and Ensure data security and integrity"
                    />
                    <Details
                        position="Junior Software Engineer"
                        company="Orangebits"
                        time="june 2019 - dec 2020"
                        address="Nagpur, Maharastra."
                        work="Design and Develop user interfaces using Angular, Html, Css, Typescript. Create reausable components, Integrate Api's using express.js & hapi.js and consume Api's in the application using Angular."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Experience;
