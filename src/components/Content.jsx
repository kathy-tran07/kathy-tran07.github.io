import React from "react";

import HomeContent from './contents/HomeContent.jsx';
import AboutContent from './contents/AboutContent.jsx';
import CodingContent from './contents/CodingContent.jsx';
import MediaContent from './contents/MediaContent.jsx';

const Content = ( {page} ) => {
    return (
        <div className="content">
            {page === "home" && <HomeContent />}
            {page === "about" && <AboutContent />}
            {page === "coding" && <CodingContent />}
            {page === "media" && <MediaContent />}
        </div>
    );
}

export default Content;