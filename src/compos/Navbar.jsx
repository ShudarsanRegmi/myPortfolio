import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";



import styles from './Navbar.module.css';
import { useEffect, useRef, useState } from "react";
import { useViewport } from "./utilities/useViewport";

export const Navbar = () => {

    const navul = useRef(null);
    const { width } = useViewport();
    const [nav, setNav] = useState(false);
    const toggleNavbar = () => {
        console.log("hello")
        if (nav) {
            navul.current.style.transform = "translate(0)";
        } else {
            navul.current.style.transform = "translateY(-300px)";

        }
        setNav(prev => !prev)
        
    }


    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.left}>
                    <span className={styles.enName}>Shudarsan Regmi</span>
                    <span className={styles.npName}>सुदर्शन रेग्मी</span>
                </div>
                <div className={styles.right}>
                    <ul ref={navul}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/resume.pdf" target='_blank'>Resume</a></li>
                    </ul>

                    {/* {width<650 && nav <FaBars onClick={()=>{toggleNavbar()}} />} */}
                    {width < 650 && nav ? (
                        <FaBars onClick={() => toggleNavbar()} />
                    ) : (
                        <ImCross onClick={() => toggleNavbar()} />
                    )}

                </div>
            </nav>
        </>
    );
}
