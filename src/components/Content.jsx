import React from "react";

import HomeContent from './contents/HomeContent.jsx';
import AboutContent from './contents/AboutContent.jsx';
import CodingContent from './contents/CodingContent.jsx';

const Content = ( {page} ) => {
    return (
        <div className="content">
            {page === "home" && <HomeContent />}
            {page === "about" && <AboutContent />}
            {page === "coding" && <CodingContent />}
            {page === "media" && <div className="media_content"><h2>Film & Media Projects</h2><p>Details about film and media projects will go here.</p></div>}
        </div>
    );
}

export default Content;