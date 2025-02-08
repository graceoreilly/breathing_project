import hero from '/Images/hero-image.jpg';
import styles from "../Header/Header.module.css"

function Header() {
return (
    <>
    <div className={styles.container}>
{/* <img src={hero} alt="a person sitting on a rock with knees crossed" className={styles.hero} /> */}
<h2>Breathe and Move</h2>
</div>
</>
)
}

export default Header;