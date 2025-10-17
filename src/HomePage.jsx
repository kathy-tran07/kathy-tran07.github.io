import React from "react";

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

const HomePage = () => {
    return (
        <div className="home_page">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default HomePage;