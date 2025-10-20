import React, {useState} from "react";
import Typewriter from 'typewriter-effect';
import { useAppContext } from "./context/useAppContext.jsx";

/* Stores comments comments for the sidebar */

const Comments = () => {
    const {page, comment, setComment, activeProject} = useAppContext();

    // Comments data
    const commentsData = {
        home: "<strong>Phew!</strong> Sorry about that. Here is my website! I'll be here the entire time. Feel free to browse away now!",

        about1: "<strong>OMGGGGG. IT'S ME!</strong> You want to learn more about me? Aren't I cool? You know I'm cool. Hehe... ",
        about2: "Fun Fact: This photo was taken the first time I went to Seattle in 2023. I went there during Fall Break my sophomore year. Seattle is so pretty. <strong>You're so pretty</strong> hehe...",
        about3: "Outside of work, I like to crochet, listen to audiobook, and journal about anything I can think of! I'm currently listening to the Percy Jackson series!",
        about4: "Look at how cool and nonchalant I look. Just kidding! I am a very chalant person.",

        coding: "Ooooh! Time to show off my technical skills! Here are some of my projects I've worked on, ranging from game development to GPT Wrappers. Which one do you want to learn more about?",
        c_project1: "As the Tools TA for Data Structures and Algorithms, I am in charge of maintaining our visualization website. I begin working on this project since <strong>September 2024</strong> and started off by implementing a new home page design and filter system. You can check out the website <a href='https://csvistool.com/' target='blank' rel='noopener noreferrer'>here</a>.",
        c_project2: "During <strong>August 2024 to May 2025</strong>, I work on this as a part of my research with the AI and Art VIP at Georgia Tech. I improved particle generator to be more responsive to the input pitch frequency and added perlin noise to make the shape more dynamic. Feel free to take a look at the codebase <a href='https://github.com/xintongj/VIP2024Fall' target='blank' rel='noopener noreferrer'>here</a>!",
        c_project3: "I worked on this project during  <strong>January 2025 to May 2025</strong> for the Mobile Apps and Services course at Georgia Tech. I worked on implementing game setup page, chat rooms, and native calendar synchronization. I also deployed it to Android devices. Check out the codebase <a href='https://github.gatech.edu/Team-JKCT/PUGPortal' target='blank' rel='noopener noreferrer'>here</a>!",
        c_project4: "This project was made during the <strong>Unity workshop</strong>, hosted by Georgia Tech's Video Game Development Club (VGDev). During my 3rd year in undergrad, I decided to join VGDev, so I could broaden my skills as a programmer.",
        c_project5: "I created Eleusis during the second Hackathon I attended, <strong>HackGTX</strong>. For this project, I worked on implementing 2D graphics and animations for each question. Learn more about the project <a href='https://devpost.com/software/eleusis?ref_content=my-projects-tab&ref_feature=my_projects' target='blank' rel='noopener noreferrer'>here</a>!",
        c_project6: "I worked on this GUI in <strong>November 2024</strong> for the Introduction to Databases course at Georgia Tech. I connecting the SQL Database, implementing backend Development, and creating navigation bar. Check out the codebase <a href='https://github.com/kathy-tran07/cs4400_team50_phaseIV' target='blank' rel='noopener noreferrer'>here</a>!",

        media: "<strong>Look look look!</strong> These are some of my film and media projects I've worked on through the years. I hope you enjoy them. <strong>YIPPPPPEEEEE!!!!!</strong>",
        m_project1: "<strong>In Universe 907</strong> is about Ella, who has an strained relationship with her father, chats with an alternate version of him from a different universe. This was the first short film I've ever wrote and directed! You can watch it <a href='https://youtu.be/lJPXPuQWYRo' target='blank' rel='noopener noreferrer'>here</a>!",
        m_project2: "This animated short film is an adaptation of Edgar Allan Poe's poem, Annabel Lee. This is a part of Georgia Tech Animation Club's Multi-Animator Project. Check out the full animation <a href='https://www.youtube.com/watch?v=EoMGmAuklaE' target='blank' rel='noopener noreferrer'>here</a>!",
    };

    // Determine current comment
    let currentComment = commentsData[page] || "";

    if (page === "about") {
        const aboutComments = [commentsData["about1"], commentsData["about2"], commentsData["about3"], commentsData["about4"]];
        const randomIndex = Math.floor(Math.random() * aboutComments.length);
        currentComment = aboutComments[randomIndex];
    }

    if (page === "coding" && activeProject) {
        currentComment = commentsData[activeProject] || currentComment;
    }

    if (page === "media" && activeProject) {
        currentComment = commentsData[activeProject] || currentComment;
    }

    // Update comment state when page or activeProject changes
    React.useEffect(() => {
        if (comment !== currentComment) {
            setComment(currentComment);
        }
    }, [page, activeProject, setComment]);

    return (
        <div className="comments_cont">
        {page === "home" ? (
             <div dangerouslySetInnerHTML={{ __html: comment }}/>
        ) : (
            <Typewriter
                key={comment} 
                onInit={(typewriter) => {
                    typewriter
                    .typeString(comment)
                    .start();
                }}
                options={{
                    autoStart: true,
                    delay: 30,
                    cursor: " ",
                    html: true,
                }}
            />
        )}
        </div>
    );
}

export default Comments;