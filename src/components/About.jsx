import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon  }) => {
  return (
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full pink-green-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-white-100 rounded-[20px] py-5 px-12 min-h-[280px] flex
          justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-black-100 text-[20px] font-bold text-center"> {title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I graduated from UC Berkeley with a major in computer science and the 
        Berkeley Certificate of Design Innovation. I’m interested in full stack engineering 
        to utilize both my software expertise and UI/UX design knowledge to create 
        accessible, enjoyable, and innovative products. I'm passionate and bold; 
        I strive to develop things I'm proud of and am not afraid to be different.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")