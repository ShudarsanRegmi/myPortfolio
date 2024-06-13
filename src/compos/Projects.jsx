import styles from './Projects.module.css'

import sniffer from '/sniffer.png'

export const Projects = ()=> {
    return <>
        <div className={styles.con}>
            <div className={styles.body}>
            <div className={styles.title}>Network Packet Sniffer</div>
                <div className={styles.contentCon}>
                <div className={styles.leftCon}>
                    <img src={sniffer} alt="" />
                </div>
                <div className={styles.rightCon}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure, voluptatum, dolorem,! ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus iure, voluptatum, dolorem,! 
                    </p>
                </div>
                </div>
            </div>
        </div>
    </>
}