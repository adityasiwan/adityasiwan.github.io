import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas'; 

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row 
      items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* The following two divs are for that purple circle and line */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/> 
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        {/* For the text beside it  */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white whitespace-nowrap`}>
            Hi! I'm <span className='text-[#915eff]'>Samyam</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            I am a data professional, .NET developer <br className='sm:block hidden' />and software engineer. 
          </p>
        </div>
      </div>

      <ComputersCanvas />

      {/* Div for the small framer motion animation to prompt users that we can scroll */}
      <div className='absolute xs:bottom-1 bottom-1 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
              animate={{
                y: [0, 24, 0],
              }}
              transition = {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-2 h-2 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>

      </div>
    </section>
  );
};

export default Hero;