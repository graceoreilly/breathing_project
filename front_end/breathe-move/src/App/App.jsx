import { useState } from 'react'
import './App.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
//import YogaCardHolder from '../YogaCardHolder/YogaCardHolder'
import InspirationalQuotesCard from '../InspirationalQuotesCard/InspirationalQuotesCard'

function App() {

  return (
    <>
    <Header />
    <InspirationalQuotesCard />
    {/* //<YogaCardHolder /> */}
    <Footer />
    </>
  )
}

export default App
