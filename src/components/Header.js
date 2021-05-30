// REACT
import React from 'react';
import {NavLink} from 'react-router-dom';  
// COMPONENT
import NavBar from './NavBar';
// IMAGE
import toogle from '../assets/img/toggle.png';

function Header() {
    return (
        <div className="header">

            <NavLink exact to="/" className="header-title" activeClassName="home-active">
                <span>C</span>oding<span> N</span>ature !
            </NavLink>

            <NavBar />

            <div className="toggle">
                <img src={toogle} alt=""/>
            </div>

        </div>
    )
}

export default Header;