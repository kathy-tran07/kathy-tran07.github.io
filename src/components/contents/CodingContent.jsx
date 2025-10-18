import React, { useState } from "react";

const CodingContent = () => {
    const projects = {
        Project1: {
            title: "CsVistool",
            description: "A visualization tool for DSA concepts.",
            tools: "React, Figma, Web Development",
            img: "./projects/csvistool.png"
        },
        Project2: {
            title: "ChatGPT Voice Visualizer",
            description: "Computer graphics that visually respond to user input and ChatGPT’s AI-generate responses",
            tools: "React, THREE.js, OpenAI",
            img: "./projects/chatgptvoicevisualizer.png"
        },
        Project3: {
            title: "PUGPortal",
            description: "Mobile app to organize causal sports games.",
            tools: "ExpoGo, Figma, Mobile App Development",
            img: "./projects/pugportal.png"
        },
        Project4: {
            title: "Basic FPS Game",
            description: "Shoot enemies and survive as long as you can!",
            tools: "Unity, C#, Game Development",
            img: "./projects/basicfpsgame.png"
        },
        Project5: {
            title: "Eleusis",
            description: "Online daily quizzes to help you reflect on your day.",
            tools: "React, Firebase, Web Development",
            img: "./projects/eleusis.png"
        },
        Project6: {
            title: "Business Supply CRUD System",
            description: "Database for a bussiness supply chain.",
            tools: "React, Node.js, SQL",
            img: "./projects/businesscrud.png"
        },
    };

    const [activeProject, setActiveProject] = useState(null);

    const projectObjects = Object.entries(projects).map(([key, project]) => {
        const isActive = activeProject === key;
            
        return (
            <div 
                key={key} 
                className={`project_cont ${isActive ? "active" : ""}`}
                onClick={() => setActiveProject(isActive ? null : key)}
            >
                <div className="project_img_cont"> <img src={project.img} alt={project.title} className="project_image" /> </div>
                <div className="project_desc">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.tools}</p>
                </div>
            </div>
            )
        });

    return (
        <div className="coding_content">
            {projectObjects}
        </div>
    );
}

export default CodingContent;