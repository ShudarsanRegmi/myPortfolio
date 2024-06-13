import styles from './Herosection.module.css';

export const Herosection = () => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.sectionCon}>
                    <div className={styles.left}>
                        <div>
                        <h1>Shudarsan Regmi</h1>
                        <h3>॥ सुदर्शन रेग्मी ॥</h3>
                        </div>
                        <h2>Full Stack Web Developer</h2>
                        <p>I'm a full stack web developer with a passion for creating dynamic and responsive web applications. I enjoy working with both frontend and backend technologies, including React, Node.js, and MongoDB. In addition to web development, I'm deeply interested in cybersecurity and strive to implement secure coding practices in my projects. My goal is to build robust and secure applications that deliver a great user experience.</p>
                    </div>
                    
                    <div className={styles.right}>
                        <img src="/profile.jpeg" alt="Profile photo of Shudarsan Regmi" />
                    </div>
                </div>
            </section>
        </>
    );
}
