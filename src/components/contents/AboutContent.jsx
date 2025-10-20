import React from "react";

import EmailIcon from '../../icons/email.svg';
import GithubIcon from '../../icons/github.svg';
import LinkedInIcon from '../../icons/linkedin.svg';

const AboutContent = () => {
    return (
        <div className="about_content">
            <div className="about_section">
                <h2>About Me</h2>
                <p>
                    Hello! I'm Kathy, I'm currently a student at the Georgia Institute of Technology studying Computer Science with concetrations in Internetworks and
                    Media and minoring in Film & Media Studies. Previously, I interned at Amazon Web Services as a Software Development Engineer Intern 
                    on their Generative AI team. During the school year, I work as a TA for Data Structure and Algorithms where I help maintain our visualization website, 
                    CsVistool. I am incredibly passionate about technology and media and love to find ways to combine the two.
                </p>
                <p>Feel free to reach out to me for anything!</p>
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
            </div>
            <img src='../profilephoto.JPG' alt="Personal_Photo"></img>
        </div>
    )
}

export default AboutContent;