import InspirationalQuotesCard from '../InspirationalQuotesCard/InspirationalQuotesCard'
import GratefulForm from '../GratefulForm/GratefulForm'
import styles from './CardsContainer.module.css'



function CardsContainer() {
    return (
        <>
        <div className={styles.container}>
        <InspirationalQuotesCard className={styles.quotesCard}/>
        <div className={styles.card}><GratefulForm className={styles.gratefulForm} /></div>
        </div>
        </>
    )
}



export default CardsContainer;