// REACT
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
// IMAGE
import toggle from '../assets/img/toggle.png';

function Header() {

    // hook permettant l'ouverture/fermeture de la navbar lorsque le Toggle est en place.
    const [navOpen, setNavOpen] = useState("nav");

    //
    const handleChangeToggle = () => {
        if (navOpen === "nav open") {
            setNavOpen("nav");
        } else {
            setNavOpen("nav open");
        }
        
    }

    return (
        <div className="header">

            <NavLink exact to="/" className="header-title" activeClassName="home-active">
                <span>C</span>oding<span> N</span>ature !
            </NavLink>

            <nav 
                className={navOpen}>
                <div className="nav-item">
                    <NavLink exact to="/" activeClassName="active" onClick={handleChangeToggle}>
                        Accueil
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink exact to="/services" activeClassName="active" onClick={handleChangeToggle}>
                        Services
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink exact to="/about" activeClassName="active" onClick={handleChangeToggle}>
                        A propos
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink exact to="/skills" activeClassName="active" onClick={handleChangeToggle}>
                        Competences
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink exact to="/experiences" activeClassName="active" onClick={handleChangeToggle}>
                        Experiences
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink exact to="/projects" activeClassName="active" onClick={handleChangeToggle}>
                        Projets
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink exact to="/contact" activeClassName="active" onClick={handleChangeToggle}>
                        Contact
                    </NavLink>
                </div>
            </nav>

            <div 
                className="toggle"
                onClick={handleChangeToggle}
            >
                <img src={toggle} alt=""/>
            </div>

        </div>
    )
}

export default Header;