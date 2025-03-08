import Footer from '../../Components/Footer/Footer.jsx'
import Header from '../../Components/Header/Header.jsx'
import CardsContainer from '../../Components/CardsContainer/CardsContainer.jsx'
import styles from './Homepage.module.css'

function Homepage() {

  return (
    <>
     <div className={styles.mainContainer} >
    <Header />
    <CardsContainer />
    <Footer />
    </div>
    </>
  )
}

export default Homepage