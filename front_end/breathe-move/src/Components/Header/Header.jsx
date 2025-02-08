import styles from "../Header/Header.module.css";
import Button from '../../Components/Button/Button.jsx';

function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Breathe. Move. Repeat.</h1>
        <div className={styles.buttonContainer}>
        <Button buttonText="Breathwork" />
        <Button buttonText="Build a yoga flow" />
        </div>
      </div>
    </>
  );
}

export default Header;
