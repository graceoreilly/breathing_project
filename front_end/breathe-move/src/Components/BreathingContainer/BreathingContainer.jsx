import styles from './BreathingContainer.module.css'
import BreathworkList from '../BreathworkList/BreathworkList';



function BreathingContainer() {
    return (
        <>
        <div className={styles.container}>
        <BreathworkList />
        </div>
        </>
    )
}



export default BreathingContainer;