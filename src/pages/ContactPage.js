// REACT
import React from 'react';
// COMPONENT
import Title from '../components/Title';
import ContactItem from '../components/ContactItem';
// Images
import Mail from '../assets/img/mail.png';
import Adress from '../assets/img/adress.png';

function ContactPage() {
    return (
        <div className="contact-page">
            <Title lettre1={'M'} reste1={'e '} lettre2={'C'} reste2={'ontacter'}/>
            <div className="contact-container">
                <div className="contact-map">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.7003700488344!2d6.151571215832341!3d48.672972821697826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794a27cfd1702c1%3A0xf967c2f8c275bcad!2sBoulevard%20des%20Aiguillettes%2C%20Villers-l%C3%A8s-Nancy!5e0!3m2!1sfr!2sfr!4v1621871699715!5m2!1sfr!2sfr" width="500" height="400" style={{border:0, borderRadius:10}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-info">
                    <ContactItem icon={Mail} title={'Email :'} text={'christophecanovas66@gmail.com'}/>
                    <ContactItem icon={Adress} title={'Adresse :'} text={'Laxou, Fr'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
