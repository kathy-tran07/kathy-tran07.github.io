import React from "react";

import EmailIcon from '../icons/email.svg';
import GithubIcon from '../icons/github.svg';
import LinkedInIcon from '../icons/linkedin.svg';

const Header = () => {
    const Socials = () => {
        return (
            <div className="socials">
                <a href="mailto:kathy.htrann@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={EmailIcon} alt="Email" className="social_button" />
                </a>

                <a href="https://github.com/kathy-tran07" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="Github" className="social_button" />
                </a>

                <a href="https://www.linkedin.com/in/kathytran07/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt="LinkedIn" className="social_button" />
                </a>
            </div>
        );
    }

    return (
        <div className="header">
            <h1 className="name">kathy tran.</h1>
           <Socials />
        </div>
    );
}

export default Header;