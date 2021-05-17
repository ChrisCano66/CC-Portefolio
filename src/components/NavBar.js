// REACT
import React from 'react'
import {NavLink} from 'react-router-dom';  


function NavBar() {
    return (
        <nav className="nav">
            <div className="nav-item">
                <NavLink exact to="/" activeClassName="active">
                    Accueil
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/services" activeClassName="active">
                    Services
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/about" activeClassName="active">
                    A propos
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/skills" activeClassName="active">
                    Competences
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/experiences" activeClassName="active">
                    Experiences
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/projects" activeClassName="active">
                    Projets
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink exact to="/contact" activeClassName="active">
                    Contact
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;
