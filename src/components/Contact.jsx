import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { CatCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('lucy-email-service', 
      'lucy-email-template', 
      {
        from_name: form.name,
        to_name: 'Lucy',
        from_email: form.email,
        to_email: 'lucy.lou@berkeley.edu',
        message: form.message
      },
      '-S-IcFIkv6tH4ucYw'
    ).then(() => {
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden mb-10">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-white-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-black-100 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white-100 py-4 px-6 text-black-100 rounded-lg 
              border-2 border-tertiary font-medium"
            >
            </input>
          </label>
          <label className="flex flex-col">
            <span className="text-black-100 font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-white-100 py-4 px-6 text-black-100 rounded-lg 
                border-2 border-tertiary font-medium"
            >
            </input>
          </label>
          <label className="flex flex-col">
            <span className="text-black-100 font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-white-100 py-4 px-6 text-black-100 rounded-lg 
              border-2 border-tertiary font-medium"
            >
            </textarea>
          </label>

          <button
            type="submit"
            className="bg-black-100 py-3 px-8 outline-none w-fit 
              text-white-100 font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"> */}
        <motion.div
          variants={slideIn('right', "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <CatCanvas />
        </motion.div>
        {/* <div className="text-black-100"><a href="https://sketchfab.com/3d-models/dingus-the-cat-2ca7f3c1957847d6a145fc35de9046b0">Dingus the Cat</a> is a placeholder before I 3D scan my cat Margo</div> */}
      {/* </div> */}
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")