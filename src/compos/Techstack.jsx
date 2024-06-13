import styles from './Techstack.module.css'
// import Techcard from './Card'



export const Techstack = ()=> {
    return <>
    <div className="con">
        <div className="webTech">
            <h1>Web Technologies</h1>
            <div>
                <div className="frontEnd">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    
                    <hr />
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                        <li>Tailwind CSS</li>
                        <li>React</li>
                </div>
                <div className={styles.backEnd}>
                    <li>PHP</li>
                    <li>Node JS</li>
                    <li>Django</li>
                    <li>Python-FastAPI</li>
                </div>
                <div className={styles.databases}>
                    <li>SQL</li>
                    <li>Mysql/Maria DB</li>
                    <li>Mongo DB</li>
                    <li>SQlite</li>
                    <li>Oracle DB</li>
                    <li>Postgres</li>
                </div>
                <div className={styles.tools}>
                    <li>Postman</li>
                    <li>Webpack</li>
                    <li>Vite</li>   
                </div>
            </div>
        </div>
        <div className="coreProgramming">
            <h1>Core Programming</h1>
            <div className="progs">
                <ul>
                    <li>C Programming</li>
                    <li>Python</li>
                </ul>
            </div>
        </div>
        <div className="Networking">
            <h1>Networking</h1>
            <div className="progs">
                <ul>
                    <li>Core Networking Concepts</li>
                    <li>Network Programming With Python</li>
                    <li>Cisco Packet Tracker</li>
                    <li>Wireshark</li>  
                    <li>Scapy</li>
                    <li>nmap</li>
                </ul>
            </div>
        </div>
        <div className="cyobsec">
            <h1>Cyber Security</h1>
            <div className="progs">
                <ul>
                    <li>Basic Web App Pentesting</li>
                    <li>DVWA</li>
                    <li>PortSwigger</li>
                    <li>Try Hack Me</li>
                    <li>Hack The Box</li>
                </ul>
            </div>
        </div>
    </div>
    <Techcard />
    <h1>Hello</h1>
    </>
}