import React from 'react';
import { useScroll, motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark absolute py-3 px-6 dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:px-3 md:py-1.5 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

function Skills() {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="Javascript" x="-24vw" y="10vw" />
                <Skill name="Typescript" x="0vw" y="12vw" />
                <Skill name="ExpressJs" x="20vw" y="-15vw" />
                <Skill name="NodeJs" x="15vw" y="-12vw" />
                <Skill name="NestJs" x="32vw" y="-5vw" />
                <Skill name="Angular" x="0vw" y="-20vw" />
                <Skill name="Material" x="-15vw" y="-17vw" />
                <Skill name="NextJs" x="27vw" y="13vw" />
                <Skill name="ReactJs" x="20vw" y="7vw" />
                <Skill name="Figma" x="-28vw" y="-8vw" />
                <Skill name="Tailwind CSS" x="-10vw" y="18vw" />
            </div>
        </>
    );
}

export default Skills;
