// REACT
import React from 'react'
import {NavLink} from 'react-router-dom';  

// IMAGE
import avatar from '../assets/img/avatar.png'

function NavBar() {
    return (
        <div className="navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active">
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/about" activeClassName="active">
                            A propos de moi
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/services" activeClassName="active">
                            Mes Services
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/experience" activeClassName="active">
                            Expériences
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/portefolio" activeClassName="active">
                            Porte-Folio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>@2021 Christophe Canovas</p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar;
