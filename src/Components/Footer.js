import React from "react";
import './Footer.css';


const Footer = () =>{
    return(
        <div>
            <footer>
                <p>&copy; {new Date().getFullYear()} Katleho Victor. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;