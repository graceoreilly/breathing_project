import './App.css'
import Homepage from '../Pages/MainPage/MainPage'
import NavBar from '../NavBar/NavBar';
//import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <NavBar />
    <Homepage />
    <div className="container">
      {/* <Routes>
    <Route path="/" element={<Homepage />} />
    </Routes> */}
    </div>
    </>
  );
}

export default App