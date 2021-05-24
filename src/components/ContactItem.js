// REACT
import React from 'react';

function ContactItem({icon, title, text}) {
    return (
        <div className="contact-item">
            <img src={icon} alt=""/>
            <div className="contact-item-info">
                <h5>{title}</h5>
                <h6>{text}</h6>
            </div>
        </div>
    )
}

export default ContactItem;
