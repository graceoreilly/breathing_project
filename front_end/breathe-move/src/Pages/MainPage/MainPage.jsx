import Footer from '../../Components/Footer/Footer.jsx'
import Header from '../../Components/Header/Header'
import InspirationalQuotesCard from '../../Components/InspirationalQuotesCard/InspirationalQuotesCard'
import GratefulForm from '../../Components/GratefulForm/GratefulForm'
import NavBar from '../../NavBar/NavBar'
//import { Route, Routes } from 'react-router-dom'

function Homepage() {

  return (
    <>
    <Header />
    <NavBar />
    <InspirationalQuotesCard />
    <GratefulForm />
    <Footer />
    </>
  )
}

export default Homepage