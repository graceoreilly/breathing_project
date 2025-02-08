import Footer from '../../Components/Footer/Footer.jsx'
import Header from '../../Components/Header/Header'
import InspirationalQuotesCard from '../../Components/InspirationalQuotesCard/InspirationalQuotesCard'
import GratefulForm from '../../Components/GratefulForm/GratefulForm'
//import HeroImage from '../../Components/HeroImage/HeroImage.jsx'
import Button from '../../Components/Button/Button.jsx'
//import { Route, Routes } from 'react-router-dom'

function Homepage() {

  return (
    <>
    <Header />
    {/* <HeroImage /> */}
    <Button buttonText="Breathwork" />
    <Button buttonText="Build a yoga flow" />
    <InspirationalQuotesCard />
    <GratefulForm />
    <Footer />
    </>
  )
}

export default Homepage