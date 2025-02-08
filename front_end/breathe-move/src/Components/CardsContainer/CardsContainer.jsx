import InspirationalQuotesCard from '../InspirationalQuotesCard/InspirationalQuotesCard'
import GratefulForm from '../GratefulForm/GratefulForm'
import styles from './CardsContainer.module.css'



function CardsContainer() {
    return (
        <>
        <div className={styles.container}>
        <InspirationalQuotesCard className={styles.quotesCard}/>
        <GratefulForm className={styles.gratefulForm} />
        </div>
        </>
    )
}

export default CardsContainer;