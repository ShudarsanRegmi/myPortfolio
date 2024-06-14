import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <span className={styles.enName}>Shudarsan Regmi</span>
                    <span className={styles.npName}>सुदर्शन रेग्मी</span>
                </div>
                <div className={styles.right}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/resume.pdf" target='_blank'>Resume</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
