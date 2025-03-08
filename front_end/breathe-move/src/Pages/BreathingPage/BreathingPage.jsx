import Footer from "../../Components/Footer/Footer";
import styles from "./BreathingPage.module.css"
import BreathingContainer from "../../Components/BreathingContainer/BreathingContainer";

function BreathingPage() {
    return (
    <>
    <div className={styles.mainContainer} >
    <h1>Breath Work</h1>
    <BreathingContainer />
    <Footer />
    </div>
    </>
    )
}

export default BreathingPage;