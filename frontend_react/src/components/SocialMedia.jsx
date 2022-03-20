import React from 'react';
import { BsTwitter, BsInstagram, BsSlack, BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <a href="https://github.com/Shahreyar00" target="_blank" rel="noopener noreferrer">
            <div>
                <BsGithub />
            </div>
        </a>
        <a href="https://www.linkedin.com/in/md-shahreyar-arif-278b541b8/" target="_blank" rel="noopener noreferrer">
            <div>
                <BsLinkedin />
            </div>
        </a>
        <div>
            <BsSlack />
        </div>
    </div>
);

export default SocialMedia;