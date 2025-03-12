/* eslint-disable react/prop-types */
import BreathingCard from "../BreathingCard/BreathingCard"
import styles from './BreathworkList.module.css'

export default function BreathworkList( { breathingCards }) {
  return (
    <div className={styles.grid}>
      {breathingCards.map(breathingCard => {
        return <BreathingCard breathingCard={breathingCard} key={breathingCard.id} />
      })}
    </div>
  )
}