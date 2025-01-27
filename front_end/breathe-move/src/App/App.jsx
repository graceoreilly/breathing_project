import './App.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
//import YogaCardHolder from '../YogaCardHolder/YogaCardHolder'
import InspirationalQuotesCard from '../InspirationalQuotesCard/InspirationalQuotesCard'
import GratefulForm from '../GratefulForm/GratefulForm'

function App() {

  return (
    <>
    <Header />
    <InspirationalQuotesCard />
    <GratefulForm />
    {/* //<YogaCardHolder /> */}
    <Footer />
    </>
  )
}

export default App