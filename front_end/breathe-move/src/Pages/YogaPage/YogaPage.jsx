import Footer from '../../Components/Footer/Footer';
import styles from './YogaPage.module.css'

function YogaPage () {
    return (
    <>
    <div className={styles.mainContainer}>
    <h1>Yoga Flow</h1>
    <p className={styles.comingSoon}>A gentle sequence builder is on its way. Soon you'll be able to craft a calming flow tailored to how you feel today.</p>
    <Footer />
    </div>
    </>
    )
}

export default YogaPage;
