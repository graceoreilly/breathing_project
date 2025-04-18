import styles from "../Footer/Footer.module.css"
import logo from "../../Images/github-logo.png"

function Footer() {
    return (
    <footer className={styles.container}>
    <p className={styles.text}>Created by Grace O Reilly  <a href="https://github.com/graceoreilly"><img src={logo} alt="github logo" className={styles.githubLogo} /></a></p>
    </footer>
    )
}

export default Footer;