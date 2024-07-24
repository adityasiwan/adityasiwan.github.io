// hoc stands for higher order component

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const sectionWrapper = (Component, idName) =>
function HOC() {
    {/*  this function takes in the component that we passed in nothing else and renders them center */}
    return (
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        // viewport={{once:true, amount: 0.25}}
        viewport={0}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            {/* This span is for the scroll button in the middle of the screen */}
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}

export default sectionWrapper