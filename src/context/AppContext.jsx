import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [page, setPage] = useState("home");
    const [activeProject, setActiveProject] = useState(null);
    const [comment, setComment] = useState("home");

    return (
        <AppContext.Provider
            value={{ page, setPage, activeProject, setActiveProject, comment, setComment }}>
            {children}
        </AppContext.Provider>
    );
}