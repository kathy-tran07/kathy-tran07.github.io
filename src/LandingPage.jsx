import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    // Navigation for home page
    const navigate = useNavigate();
    const goToHome = () => {
      navigate('/home');
    };

    return (
        <div className="landing-page">
        <h1>This is best experience on a desktop </h1>
        <button onClick={goToHome}>
            Begin Experience!
        </button>
        </div>
    );
}

export default LandingPage;