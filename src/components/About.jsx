import React from 'react'
import Tilt from 'react-parallax-tilt';
// import Tilt from 'react-tilt' This import is not working idk why, so imported alternate above
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { sectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options = {{
          max: 45,
          scale:1, 
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
        flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
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

      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I am a machine learning engineer. I graduated from University of Petroleum and Energy Studies in May 2018 majoring in Computer Science with concentration in Machine Intelligence. I love coding and solving mathematical problems.
      <br /><br />I work on building Machine Learning Models to support various business objectives and decisions. Further, I am also involved in contributing to open source projects for different communities.
      <br /><br />To-DO
      </motion.p>

      {/* For the title cards in about section */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))
        }
      </div>
    </>
  )
}

// export default About    we wrap this around a sectionWrapper that we created 
export default sectionWrapper(About, "about");