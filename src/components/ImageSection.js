// REACT
import React from 'react';
// ASSETS
import photo from '../assets/img/photo-cv.jpg'

function ImageSection() {
    return (
        <div className="image-section">
            <div className="img">
                <img src={photo} alt=""/>
            </div>    
            <div className="about-text">
                <h3>Bonjour, je suis <span>C</span>hristophe <span>C</span>anovas</h3>
                <p>
                    Ancien Enseignant-Formateur durant 8 ans dans le domaine scientifique et de la Fabrication Additive. 
                    Je me suis récemment tourné vers le domaine du Développement Web et la Data Science afin d'appuyer 
                    des projets scientifiques personnels et de retranscrire la nature sous forme de code afin de mieux la comprendre.
                    <br/><br/>
                    De plus, je souhaite apporter des outils numériques et pédagogiques autour de l'écologie, l'ago-écologie et la 
                    permaculture afin d'aider ceux qui le souhaite à avancer vers cette transition de la société.
                    <br/><br/>
                    <strong>Je suis aussi Développeur Web Junior Full-Stack et Développeur Python pour accompagner vos projets de développement.</strong>
                </p>
                <div className="about-btn">
                    <div><a href="../assets/files/CV Christophe Canovas Développeur (abrégé).pdf" download>
                        CV Abrégé
                    </a></div>
                    <div><a href="../assets/files/CV Christophe Canovas Développeur Web (complet).pdf" download>
                        CV Complet
                    </a></div>
                </div>
            </div>            
        </div>
    )
}

export default ImageSection;
