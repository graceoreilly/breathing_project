import { NavLink } from "react-router-dom";
 import styles from '..//NavBar/NavBar.module.css';
 import Logo from '../Logo/Logo';

function NavBar() {
    return (
        <>
        <div className={styles.container}>
            <Logo className={styles.logo} />
        <nav className={styles.navBar}>
            <ul className={styles.navContainer}>
                <li className={styles.listItem}>
                    <NavLink to="/" activeClassName="active">
                    Home
                    </NavLink>
                    </li>
                <li className={styles.listItem}>
                <NavLink to="/breathwork" activeClassName="active">
                    Breathing Techniques
                    </NavLink>
                    </li>
                <li className={styles.listItem}>Yoga Flow</li>
            </ul>
        </nav>
        </div>
        </>
    )
}

export default NavBar;