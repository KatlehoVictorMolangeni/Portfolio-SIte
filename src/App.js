import React from 'react';
import './Portfolio.css';
import picture from './profile.png'; 
import Typewriter from 'typewriter-effect';
import Contact from './Components/Contact';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaWhatsapp, FaDownload , FaEnvelope} from 'react-icons/fa';
import resume from './Katleho victor molangeni Resume .pdf';
//import {Link as ScrollLink} from 'react-scroll';
import Heading from './Components/Navbar';
import About from './Components/About';
import Me from './Components/Katleho';
import Portfolio from './Components/Work';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="home" id='home'>
      <Heading/>
      <div className="background">
        <div className="smoke"></div>
       

        <section className="main-section">
          <div className="intro">
            <h1>Hi there,</h1>
            <h1>
              I'm Katleho Victor, a{' '}
              <span className="typewriter-effect">
                <Typewriter
                  options={{
                    strings: ['Software Engineer', 'Web Developer', 'Freelancer'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 80,
                    pauseFor: 1500,
                  }}
                />
              </span>
            </h1>
            <p>
              I am a <strong className="highlight">dedicated</strong> and <strong className="highlight">passionate</strong> final year ICT student who loves to invest time in perfecting his work.
            </p>
            <div class="buttons">
              <a href={resume} class="btn" view>View Resume</a><a style={{cursor:'pointer', color:'#fff'}} href={resume} download><FaDownload/></a>
            </div>
            {/* Social Icons */}
            <ul className="social-icons">
              <li><a href="mailto:molangenikatleho00@gmail.com" target='_blank'><FaEnvelope /></a></li>
              <li><a href="https://wa.me/27694414727" target='_blank'><FaWhatsapp /></a></li>
              <li><a href="https://www.linkedin.com/in/katleho-victor-molangeni-080500313/" target='_blank'><FaLinkedin /></a></li>
              <li><a href="https://github.com/KatlehoVictorMolangeni" target='_blank'><FaGithub /></a></li>
            </ul>
          </div>
          <div className="profile-picture">
            <img src={picture} alt="Katleho Victor" />
          </div>
        </section>

        
      </div>
      
      <section>
        <About/>
      </section>
      <section>
        <Portfolio/>
      </section>
      <section className='contact-me'>
        <Contact/>
      </section>
      <section className='footer'>
                <Footer/>
      </section>
    </div>

   
  );
}

export default App;
