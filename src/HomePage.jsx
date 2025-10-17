import React from "react";

import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

const HomePage = () => {
    return (
        <div className="home_page">
            <Header />
            <div className="main">
                <Content />
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;