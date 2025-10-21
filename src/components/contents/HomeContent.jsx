import React from 'react'
import Typewriter from 'typewriter-effect';

const HomeContent = () => {
    return (
        <div className='home_content_cont'>
            <div className="home_content">
                <Typewriter
                    options={{
                        strings: ['Kathy Tran—Technology and Media', 'Software Engineer & Filmmaker', 'Previously @ Amazon Web Services'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
    )
}

export default HomeContent;