import React from 'react'
import Typewriter from 'typewriter-effect';

const HomeContent = () => {
    return (
        <div className="home_content">
            <Typewriter
                options={{
                    strings: ['Kathy Tran—Software Engineer', 'Passionate about Technology & Media', 'Previously @ Amazon Web Services'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>
    )
}

export default HomeContent;