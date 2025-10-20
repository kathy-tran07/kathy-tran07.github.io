import React, { useState } from "react";

import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';
import { useAppContext } from "../context/useAppContext.jsx";

const Main = () => {
    const {page, setPage} = useAppContext();

    return (
        <div className="main">
            <Content page={page}/>
            <Sidebar page={page} setPage={setPage}/>
        </div>
    )
}

export default Main;