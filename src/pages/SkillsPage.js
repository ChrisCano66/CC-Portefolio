// REACT
import React from 'react';
// COMPONENT
import Title from '../components/Title';
import SkillsSection from '../components/SkillsSection';

function SkillsPage() {
    return (
        <div className="skillpage">
            <Title lettre1={'M'} reste1={'es '} lettre2={'C'} reste2={'ompetences'}/>

            <h3><span>C</span>ompétences <span>I</span>nformatiques</h3>
            <div className="coding-skills">
                <div className="skills">
                    <h4>Developpement Web</h4>
                    <div className="skill-list">
                        <SkillsSection skill="HTML5" progress="60%" project="7"/>
                        <SkillsSection skill="CSS3" progress="70%" project="7"/>
                        <SkillsSection skill="SASS / SCSS" progress="60%" project="2"/>
                        <SkillsSection skill="JavaScript / ES6" progress="40%" project="5"/>
                        <SkillsSection skill="React" progress="40%" project="4"/>
                        <SkillsSection skill="PHP" progress="50%" project="4"/>
                        <SkillsSection skill="Symfony" progress="30%" project="3"/>
                    </div>
                </div>
                <div className="skills">
                    <h4>Data Science</h4>
                    <div className="skill-list">
                        <SkillsSection skill="Python" progress="40%" project="2"/>
                        <SkillsSection skill="QtDesigner / PySide2" progress="50%" project="2"/>
                        <SkillsSection skill="Panda" progress="10%" project="0"/>
                        <SkillsSection skill="Matplotlib" progress="20%" project="0"/>
                        <SkillsSection skill="R / MathLab" progress="50%" project="0"/>
                        <SkillsSection skill="SQL" progress="60%" project="4"/>
                    </div>
                </div>
            </div>

            <h3><span>A</span>utres <span>C</span>ompetences</h3>
            <div className="more-skills">
                <div className="skills">
                    <h4>Autres Competences</h4>
                    <div  className="skill-list">
                        <p>Modélisation 3d (Fusion 360, Blender)</p>
                        <p>Logiciels d’Impression 3D</p>
                        <p>Montage Vidéo/Photo</p>
                        <p>Ingénierie de Formation</p>
                        <p>Conduite de Projet</p>
                        <p>Habilitation éléctrique B0/BS/BE</p>
                    </div>
                </div>
                <div className="skills">
                    <h4>Langues</h4>
                    <div className="skill-list"><p>Français </p><p>Anglais</p><p>Espagnol</p></div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage;
