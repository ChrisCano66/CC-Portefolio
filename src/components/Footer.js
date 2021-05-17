// REACT
import React from 'react';
function Footer() {
    return (
        <footer className="footer">
        <p>Copyright@2021, Christophe Canovas.</p>
        <div className="footer-links">
            <h4>CV en ligne :</h4>
            <div className="img-links">
                <a href="/">img Linkedin</a>
                <a href="/">img JDN-Viadeo</a>
                <a href="/">img Codeur.com</a>
                <a href="/">img WeLoveDev</a>
                <a href="/">img MaddyJobs</a> 
            </div>           
        </div>
        <div className="footer-links">
            <h4>Code en ligne :</h4>
            <div className="img-links">
                <a href="/">img Github</a>
                <a href="/">img CodingGame</a>
                <a href="/">img FreeCodeCamp</a>
            </div>            
        </div>
        <p>" Apprendre et Concevoir autrement ! "</p>
      </footer>
    )
}

export default Footer
