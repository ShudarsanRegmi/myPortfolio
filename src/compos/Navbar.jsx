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
                        <li><a href="">Home</a></li>
                        <li><a href="">About me</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Resume</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
