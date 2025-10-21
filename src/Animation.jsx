import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

const Animation = ( {setPart} ) => {
    const dialogueLines = [
        "Hello! I'm Kathy Tran. At least I'm a mini, digital version of Kathy.",
        "I see that you are interested in my work. <strong>YIPPPPEEEE</strong>",
        "I'll be here to provide you more information while you browse through my portfolio.",
        "...",
        "...",
        "...",
        "Oh I should take you to the next page. Give me a second."
      ];

    const [currentLine, setCurrentLine] = useState(0);
    const [video, setVideo] = useState(0);
    
    const videoSrc = [
        <video key="0" src="/animation/introPartOne.mp4" autoPlay muted onEnded={() => handleVideoEnd(0)}/>,
        <video key="1" src="/animation/introPartTwo.mp4" autoPlay loop={true} muted />,
        <video key="2" src="/animation/introPartThree.mp4" autoPlay muted onEnded={() => setPart("loading")}/>,
    ]

    const [nextVideoReady, setNextVideoReady] = useState(false);
    const preloadedVideoRef = useRef(null);

    useEffect(() => {
    const nextIndex = video + 1;
    if (videoSrc[nextIndex]) {
        const next = document.createElement("video");
        next.src = videoSrc[nextIndex].props.src;
        next.preload = "auto";
        next.oncanplaythrough = () => {
        setNextVideoReady(true);
        preloadedVideoRef.current = next;
        };
    }
    }, [video]);

    const handleVideoEnd = () => {
        if (nextVideoReady) {
          setVideo((prev) => prev + 1);
        } else {
          setTimeout(() => setVideo((prev) => prev + 1), 300);
        }
      };
    
    const handleNextLine = () => {
        if (currentLine < dialogueLines.length - 1) {
          setCurrentLine(currentLine + 1);
        } else {
            if (video === 1) {
                handleVideoEnd();
            }
        }
      };

    return (
        <div className="animation_part">
            <div className="animation_cont">
                <div className="animation_box">
                    {videoSrc[video]}
                </div>
                <button className="dialogue_box" onClick={handleNextLine}>
                    <p>
                        <Typewriter
                            key={currentLine}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString(dialogueLines[currentLine])
                                .start();
                            }}
                            options={{
                                autoStart: true,
                                delay: 30,
                                cursor: " ",
                                html: true,
                            }}
                        />
                    </p>
                    <h3> Click to continue </h3>
                </button>
            </div>
        </div>
    );
}

export default Animation;