import React from 'react';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
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
                    {type}&nbsp;
                </h3>
                <span className="capatalize text-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    );
};
const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    });
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
                    <Details
                        type="Bachelor Of Engineering (B.E)"
                        time="2012-2017"
                        place="Priyadarshini Bhagwati College of Engoneering (PBCOE)"
                        info="Completed B.E in Electronics and Telecommunication Engineering"
                    />
                    <Details
                        type="HSC/Intermediate in Science department. (Class 12th)"
                        time="2010-2012"
                        place="Nagpur University"
                        info="Completed a Higher Secondary School Certificate (HSC) and Intermediate (PUC)."
                    />
                    <Details
                        type="Secondary School Certificate (Class 10th)"
                        time="2009-2010"
                        place="Nagpur University"
                        info="Completed a Secondary School Certificate (SSC)."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
