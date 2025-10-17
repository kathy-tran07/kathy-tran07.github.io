import React from "react";

const Sidebar = ( {page, setPage} ) => {
    // Button components for each page
    const navOptions = {
        home: ["about", "coding", "media"],
        about: ["coding", "media"],
        coding: ["about", "media"],
        media: ["about", "coding"],
      };
    
      const buttons = navOptions[page] || [];

    return (
        <div className="sidebar">
          {buttons.map((target) => (
            <button key={target} onClick={() => setPage(target)}>
                {target.charAt(0).toUpperCase() + target.slice(1).replace("-", " ")}
            </button>
            ))}
        </div>
    );
}

export default Sidebar;