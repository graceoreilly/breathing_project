import styles from "../Header/Header.module.css";
import Button from '../../Components/Button/Button.jsx';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Breathe. Move. Repeat.</h1>
        <div className={styles.buttonContainer}>
          <Link to="/breathwork">
        <Button buttonText="Breathwork" />
        </Link>
        <Link to="/yoga">
        <Button buttonText="Build a yoga flow" />
        </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
