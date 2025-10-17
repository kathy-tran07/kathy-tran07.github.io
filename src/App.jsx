import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

import LandingPage from './LandingPage.jsx';
import HomePage from './HomePage';

function App() {

  return (
    <>
    <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
    </Router>
    </>
  )
}

export default App
