// REACT
import React from 'react';
// COMPONENT
import Title from '../components/Title';
import SkillsSection from '../components/SkillsSection';

function SkillsPage() {
    return (
        <div className="skillpage">
            <Title lettre1={'M'} reste1={'es '} lettre2={'C'} reste2={'ompetences'}/>

            <div className="skillpage-container">

                <div className="coding-skills">
                    <div className="skills-container">
                        <div className="skills">
                            <h4>Developpement Web</h4>
                            <div className="skill-list">
                                <div className="category list">
                                    <h5>Basics</h5>
                                    <div>
                                        <SkillsSection skill="HTML5" progress="60%" project="7"/>
                                        <SkillsSection skill="CSS3" progress="70%" project="7"/>
                                        <SkillsSection skill="SASS/SCSS" progress="60%" project="2"/>
                                    </div>
                                </div>
                                <div className="category-end">
                                    <div className="category list">
                                        <h5>Front-end</h5>
                                        <div>
                                            <SkillsSection skill="JavaScript" progress="40%" project="5"/>
                                            <SkillsSection skill="React" progress="40%" project="4"/>
                                        </div>
                                    </div>
                                    <div className="category list">
                                    <h5>Back-end</h5>
                                        <div>
                                            <SkillsSection skill="PHP" progress="50%" project="4"/>
                                            <SkillsSection skill="Symfony" progress="30%" project="2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <h4>Data Science</h4>
                            <div className="skill-list">
                                <div className="category list">
                                    <h5>Langages</h5>
                                    <div>
                                        <SkillsSection skill="Python" progress="40%" project="2"/>
                                        <SkillsSection skill="R/MathLab" progress="50%" project="1"/>
                                    </div>                            
                                </div>
                                <div className="category list">
                                    <h5>Design</h5>
                                    <div>
                                        <SkillsSection skill="QtDesigner /PySide2" progress="50%" project="2"/>    
                                        <SkillsSection skill="Matplotlib" progress="20%" project="0"/>
                                    </div>                            
                                </div>
                                <div className="category list">
                                    <h5>Base de Donn??es</h5>
                                    <div>
                                        <SkillsSection skill="Panda" progress="20%" project="0"/>
                                        <SkillsSection skill=" SQL " progress="60%" project="4"/>
                                        <SkillsSection skill="No-SQL" progress="20%" project="1"/>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="more-skills">
                    <div className="skills-container">
                        <div className="skills">
                            <h4>Autres Competences</h4>
                            <div className="skill-list">
                                <p>Mod??lisation 3d (Fusion 360, Blender)</p>
                                <p>Logiciels d???Impression 3D</p>
                                <p>Montage Vid??o/Photo</p>
                                <p>Ing??nierie de Formation</p>
                                <p>Conduite de Projet</p>
                                <p>Habilitation ??l??ctrique B0/BS/BE</p>
                            </div>
                        </div>
                        <div className="skills">
                            <h4 className="langues">Langues</h4>
                            <div className="skill-list">
                                <p>Fran??ais</p>
                                <p>Anglais</p>
                                <p>Espagnol</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default SkillsPage;
