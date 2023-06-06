import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <Router>
                  <div>
                      <Link to="https://www.linkedin.com/in/koinyan-nelson-451769257/" target="_blank" rel="noopener noreferrer">
                           <BsLinkedin />
                      </Link>
                  </div>

                  <div>
                      <Link to="https://www.instagram.com/codewithnelsonhano/" target="_blank" rel="noopener noreferrer">
                           <BsInstagram />
                      </Link>
                  </div>

                  <div>
                      <Link to="https://twitter.com/koinyan_nelson" target="_blank" rel="noopener noreferrer">
                           <BsTwitter />
                      </Link>
                  </div>

                  <div>
                      <Link to="https://www.facebook.com/profile.php?id=100080007283949" target="_blank" rel="noopener noreferrer">
                           <FaFacebookF />
                      </Link>
                  </div>
            </Router>
        </div>
    )
}

export default SocialMedia;