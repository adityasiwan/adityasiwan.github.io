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
      Passionate about leveraging technology to drive innovation and create a positive impact on people's lives, I am a dedicated AI enthusiast with a deep-rooted interest in responsible AI practices. By day, I'm a data professional who thrives on working with data to uncover insights and inform decisions. In addition, I'm an avid .NET C# developer, continually exploring the realm of software development.
      <br /><br />When I'm not immersed in the world of technology, I channel my creativity as a writer and blogger during my spare time. I find joy in crafting narratives and sharing my thoughts with others. Beyond my professional pursuits, I lead an active lifestyle, engaging in sports and exercise to maintain a healthy balance. I'm also an avid reader of novels and enjoy spending quality time watching movies with family and friends.
      <br /><br />My passion for technology, data, and programming languages like Python and C# drives me to constantly learn and grow in this ever-evolving landscape. Let's connect and explore the possibilities together!
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