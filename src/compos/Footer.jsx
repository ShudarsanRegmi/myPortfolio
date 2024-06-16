import {  FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import styles from './Footer.module.css'


export const Footer =()=> {
    return <>
        <div className={styles.con}>
            <h1 className='text-4xl font-bold pb-9 pt-6'>Thanks for your visit</h1>
            <div className={styles.linksCon}>
                <a href="https://twitter.com/ShudarsanRegmi" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30}/>
                </a>
                <a href="https://github.com/ShudarsanRegmi" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30}/>
                </a>
                <a href="https://www.instagram.com/shudarsanregmi/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30}/>
                </a>
                <a href="https://www.linkedin.com/in/ShudarsanRegmi/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30}/>
                </a>
            </div>
        </div>
    </>
}