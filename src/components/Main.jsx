import React from "react";

import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';

const Main = () => {
    return (
        <div className="main">
            <Content />
            <Sidebar />
        </div>
    )
}

export default Main;