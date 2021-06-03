import React from 'react';

function ProjectCard({title, img, text, githubLink}) {
    return (
        <div className="project-card">
            <img  className="project-img" src={img} alt=""/>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="github-btn">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    Projet GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;