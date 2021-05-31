// REACT
import React from 'react';

function SkillsSection({skill, progress, project}) {
    return (
        <div className="skills-section">
            <div className="skills-container">
                <h6 className="skill-title">{skill}</h6>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-progress" style={{width: progress}}></div>
                        </div>
                    </div>
                    <p className="skill-text-project">({project} projets)</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;
