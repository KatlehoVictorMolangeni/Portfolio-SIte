import React from "react";
import Logo from './Loogo.png';
import {Link as ScrollLink} from 'react-scroll';

const Heading = () => {
    return(
        <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        <ul>
          {/* <li><ScrollLink to="home" smooth={true} duration={500} style={{cursor:'pointer'}}>Home</ScrollLink></li> */}
           <li><ScrollLink to="about-me" smooth={true} duration={500} style={{cursor:'pointer'}}>About</ScrollLink></li>
           <li><ScrollLink to="work" smooth={true} duration={500} style={{cursor:'pointer'}}>Projects</ScrollLink></li>
           <li><ScrollLink to="contact" smooth={true} duration={500} style={{cursor:'pointer'}}>Contact</ScrollLink></li>
           
        </ul>
      </nav>
    )
}

export default Heading;