import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, resume, linkedin } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center 
      py-5 fixed top-0 z-20 bg-white`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-secondary text-[18px] font-bold cursor-pointer">Lucy Lou</p>
        </Link>

        <div className="hidden sm:flex flex-row gap-10 items-center">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${active === link.title ? "text-black-100" : "text-secondary"}
                  hover:text-black-100 text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex flex-row gap-2">
            <a href="/files/LucyLou_Resume.pdf" target="_blank">
              <img src={resume} alt="logo" className="w-8 h-8 object-contain hover:fill-black-100" />
            </a>
            <a href="https://www.linkedin.com/in/lucy-lou/">
              <img src={linkedin} alt="logo" className="w-8 h-8 object-contain hover:fill-black-100" />
            </a>
          </div>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-white absolute top-20 
            right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-black-100" : "text-secondary"}
                  hover:text-black-100 font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}>
                <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="text-secondary hover:text-black-100 font-poppins font-medium cursor-pointer text-[16px]">
                <a href="/files/LucyLou_Resume.pdf">Resume</a>
              </li>
              <li className="text-secondary hover:text-black-100 font-poppins font-medium cursor-pointer text-[16px]">
                <a href="https://www.linkedin.com/in/lucy-lou/">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar