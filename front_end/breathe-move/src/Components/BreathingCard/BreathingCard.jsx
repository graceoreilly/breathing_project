/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react"
import styles from './BreathingCard.module.css'

export default function BreathingCard({ breathingCard }) {
  const [flipped, setFlipped] = useState(false)
  const [height, setHeight] = useState('initial')
  
  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height
    const backHeight = backEl.current.getBoundingClientRect().height
    //sets the height to whichever is the largest, front, back or 100px
    setHeight(Math.max(frontHeight, backHeight, 500))
  }

  useEffect(setMaxHeight, [breathingCard.name, breathingCard.description])
  useEffect(()=> {
    window.addEventListener('resize', setMaxHeight)
    return () => window.removeEventListener('resize', setMaxHeight)
  })

  return (
    <div onClick={() => setFlipped(!flipped)}
     style={{height: height}}
      className={`${styles.card} ${flipped ? styles.flip : styles.flipped}`}
    >
      <div className={styles.front} ref={frontEl}>
        {breathingCard.name}
      </div>
      <div className={styles.back} ref={backEl}>
        {breathingCard.description}
      </div>
    </div>
  )
}
