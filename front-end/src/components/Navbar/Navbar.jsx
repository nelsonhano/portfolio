import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
    return (
      <nav className="app__navbar">
        <div className='app__navbar-logo'> 
            <h2>codeWithNelson</h2>
        </div>
        <ul className='app__navbar-links'>
          {['home', 'about', 'contact','work', 'skill'].map((item) =>(
            <li className='app__flex p-text' key={`link-{item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 className='open' onClick={() => setToggle(true)}/>
          {/* <span className='open'  onClick={() => setToggle(true)}>open</span> */}

          {toggle && (
            <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}
            >
              {/* <span className="close"  onClick={() => setToggle(false)}> x</span> */}
              <HiX className='close' onClick={() => setToggle(false)}/>
              <ul>
              {['home', 'about', 'contact','work', 'skill'].map((item) =>(
                    <li key={item}>
                      <a  onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                    </li>
                  ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    );
}

export default Navbar;