import Footer from '../../Components/Footer/Footer.jsx'
import Header from '../../Components/Header/Header'
import InspirationalQuotesCard from '../../Components/InspirationalQuotesCard/InspirationalQuotesCard'
import GratefulForm from '../../Components/GratefulForm/GratefulForm'
//import { Route, Routes } from 'react-router-dom'

function Homepage() {

  return (
    <>
    <Header />
    <InspirationalQuotesCard />
    <GratefulForm />
    <Footer />
    </>
  )
}

export default Homepage