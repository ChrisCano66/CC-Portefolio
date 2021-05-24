// REACT
import React from 'react';

function ServiceCard({title, img, text}) {
    return (
        <div className="services-card">
            <img  className="services-img" src={img} alt=""/>
            <div className="services-content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ServiceCard;
