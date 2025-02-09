import styles from "../Footer/Footer.module.css"

function Footer() {
    return (
    <div className={styles.container}>
    <p className={styles.text}>Created by Grace O Reilly  <a href="https://github.com/graceoreilly"><img src="/src/Images/github-logo.png" alt="github logo" className={styles.githubLogo} /></a></p>
    </div>
    )
}

export default Footer;