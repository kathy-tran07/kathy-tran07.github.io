import React, { use, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Animation from "./Animation";

const LandingPage = () => {
    const [part, setPart] = useState("starting");
    
    // Starting Part
    const starting = () => {
        return (
            <div className="starting_part">
                <h1>You are about to enter Kathy Tran's Portfolio Website</h1>
                <p>This experience is best on desktop.</p>
                <button onClick={() => setPart('animation')}>Continue?</button>
            </div>
        );
    }
       
    // Loading Part
    const navigate = useNavigate();
    const goToHome = () => {
    navigate('/home');
    };

    const loading = () => {
        const timer = setTimeout(() => {
            goToHome();
          }, 5000);
        
        return (
            <div className="loading_part">
                <video src="/animation/loading.mp4" autoPlay muted loop={true} />
            </div>
        );
    }

    return (
        <div className="landing_page">
            {part === "starting" && starting()}
            {part === "animation" && <Animation setPart={setPart}/>}
            {part === "loading" && loading()}
        </div>
    );
}

export default LandingPage;