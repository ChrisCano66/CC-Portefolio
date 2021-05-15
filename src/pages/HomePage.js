// REACT
import React from 'react'
import Typed from 'react-typed';
import {NavLink} from 'react-router-dom';  


function HomePage() {
    return (
        <div className="homepage">
            <div className="home-main-info">
                <h1>Developpement Web <br />et Data Sciences !</h1>
                <Typed
                    className="home-typed-text"
                    strings={["Developpement Web", "Web Design", "Data Science", "Développement Durable"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="home-btn">
                    <NavLink exact to="/contact" activeClassName="home-active">
                        Me Contacter !
                    </NavLink>
                </div>
            </div>
        </div>        
      );
}

export default HomePage;