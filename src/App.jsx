import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css'

import LandingPage from './LandingPage.jsx';
import HomePage from './HomePage';

function App() {
  return (
    <>
    <Router>
      <BackgroundChange />
    </Router>
    </>
  )
}

function BackgroundChange() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = "";
    if (location.pathname === "/") {
      document.body.classList.add("landing_bg");
    } else if (location.pathname === "/home") {
      document.body.classList.add("home_bg");
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App
