// REACT
import React from 'react' 
// COMPONENT
import NavBar from './NavBar';
// IMAGE
import avatar from '../assets/img/avatar.png'
import toogle from '../assets/img/toggle.png'

function Header() {
    return (
        <div className="header">

            <div className="profile">
                <img src={avatar} alt=""/>
            </div>

            <h1 className="header-title">
                <span>C</span>oding 
                <span> N</span>ature !
            </h1>

            <NavBar />

            <div className="toggle">
                <img src={toogle} alt=""/>
            </div>

        </div>
    )
}

export default Header;