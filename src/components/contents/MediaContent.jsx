import React, { useState } from "react";
import { useAppContext } from "../../context/useAppContext.jsx";

const MediaContent = () => {
    const projects = {
        m_project1: {
            title: "In Universe 907 (2025)",
            description: "Short Film",
            role: "Director, Writer, Producer, Editor",
            img: "./thumbnails/inuniverse907.png"
        },
        m_project2: {
            title: "Annabel Lee (2025)",
            description: "Animated Short Film",
            role: "3D Artist, Modeler and Rigger",
            img: "./thumbnails/annabellee.png"
        },
    };

    const {activeProject, setActiveProject} = useAppContext();

    const projectObjects = Object.entries(projects).map(([key, project]) => {
        const isActive = activeProject === key;
            
        return (
            <div 
                key={key} 
                className={`project_cont ${isActive ? "active" : ""}`}
                onClick={() => setActiveProject(isActive ? null : key)}
            >
                <div className="thumbnail_cont"> <img src={project.img} alt={project.title} className="thumbnail_image" /> </div>
                <div className="project_desc">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>{project.role}</p>
                </div>
            </div>
            )
        });

    return (
        <div className="media_content">
            {projectObjects}
        </div>
    );
}

export default MediaContent;