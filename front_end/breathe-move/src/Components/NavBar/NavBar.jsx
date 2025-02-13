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
                <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
                    Home
                    </NavLink>
                    </li>
                <li className={styles.listItem}>
                <NavLink
            to="/breathwork"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
                    Breathing Techniques
                    </NavLink>
                    </li>
                <li className={styles.listItem}>
                <NavLink
            to="/yoga"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
                    Yoga Flow
                    </NavLink>
                    </li>
            </ul>
        </nav>
        </div>
        </>
    )
}

export default NavBar;