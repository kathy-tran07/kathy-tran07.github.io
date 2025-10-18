import React from "react";

const Sidebar = ( {page, setPage} ) => {
    // Comments
    const comments = () => {
        return (
            <div className="comments_cont">
                I'm here if you need me!
            </div>
        )
    }

    // Avatar
    const avatarAnimation = () => {
        return (
            <div className="avatar_container">
                <img src="/avatar/avatar.gif" alt="avatar" className="avatar_image"/>
            </div>
        )
    }

    // Buttons
    const navOptions = {
        home: ["about", "coding", "media"],
        about: ["about", "coding", "media"],
        coding: ["about", "coding", "media"],
        media: ["about", "coding", "media"],
    };
    
    const buttons = navOptions[page] || [];

    const navButtons = buttons.map((target) => {
        const isActive = target === page;
        return (
            <button key={target} 
                onClick={!isActive ? () => setPage(target) : undefined}
                className={isActive ? "nav_button_active" : "nav_button_inactive"}
                disabled={isActive}>
                {target.charAt(0).toUpperCase() + target.slice(1).replace("-", " ")}
            </button> 
        )
    })

    return (
        <div className="sidebar">
            <div className="sidebar_cont"> 
                {comments()}
                {avatarAnimation()}
                <div className="nav_button">
                    {navButtons}
                </div>
            </div>
             
        </div>
    );
}

export default Sidebar;