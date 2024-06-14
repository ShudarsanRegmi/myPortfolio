import SliderNumber from "./utilities/SliderNumber"
import styles from './Social.module.css'
import { FaFigma, FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';



export const Social = () => {
    return <>
        <div className={styles.con}>
            <SliderNumber />
            <div className={styles.linksCon}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30}/>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30}/>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30}/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30}/>
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <FaDiscord size={30}/>
                </a>
            </div>
        </div>
    </>
}
