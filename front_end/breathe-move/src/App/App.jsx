import './App.css'
import Homepage from '../Pages/Homepage/Homepage'
import BreathingPage from '../Pages/BreathingPage/BreathingPage';
import NavBar from '../Components/NavBar/NavBar';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
    <NavBar />
    <div className="container">
      <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/breathwork" element={<BreathingPage />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App
