import styles from './About.module.css'

export const About = () =>  {
    return <>
        <article id='about'>
            <h1 className='text-green-600'>About me</h1>
            <div className={styles.con}>
                <div className={styles.imgCon}>
                    <img src="/img2.png" alt="Image of Shudarsan Regmi" />
                </div>
                <p>
                Namaste🙏! I'm Shudarsan Regmi, a web developer with a focus on full-stack development and a passion for security. I work with technologies like HTML, CSS, JavaScript, React, NextJS, PHP, and databases such as MySQL, MariaDB, and SQLite3.
                Proficient in C and Python, I enjoy automating tasks using python and reading code in various languages. I actively explore web security through penetration testing on platforms like DVWA, PortSwigger, TryHackMe, and HackTheBox.
                I prefer delving into low-level tasks rather than navigating through numerous layers of abstraction where the underlying processes are not entirely clear to me.
                </p>
            </div>
            
        </article>
    </>
}