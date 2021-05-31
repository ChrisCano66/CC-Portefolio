// REACT
import React from 'react';
// Images
import linkedin from '../assets/img/linkedin.png';
import jdn from '../assets/img/jdn-viadeo.png';
import codeur from '../assets/img/codeur-com.jpg';
import wld from '../assets/img/we-love-devs.png';
import GitHub from '../assets/img/github.png';
import CodingGame from '../assets/img/coding-game.png';
import fcc from '../assets/img/free-code-camp.jpg';



function Footer() {
    return (
        <footer className="footer">
        <p>Copyright@2021, Christophe Canovas.</p>
        <div className="footer-links">
            <h4>CV en ligne :</h4>
            <div className="img-links">
                <a href="/"><img src={linkedin} alt="Linkedin"/></a>
                <a href="/"><img src={jdn} alt="JDN-Viadeo"/></a>
                <a href="/"><img src={codeur} alt="Codeur.com"/></a>
                <a href="/"><img src={wld} alt="WeLoveDev"/></a>
            </div>           
        </div>
        <div className="footer-links">
            <h4>Code en ligne :</h4>
            <div className="img-links">
                <a href="/"><img src={GitHub} alt="Github"/></a>
                <a href="/"><img src={CodingGame} alt="CodingGame"/></a>
                <a href="/"><img src={fcc} alt="FreeCodeCamp"/></a>
            </div>            
        </div>
        <p>" Apprendre et Concevoir autrement ! "</p>
      </footer>
    )
}

export default Footer
