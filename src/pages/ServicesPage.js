// REACT
import React from 'react';
// COMPONENT
import Title from '../components/Title';
import ServiceCard from '../components/ServiceCard';
// Images
import DevWeb from '../assets/img/dev-web.png';
import WebDesign from '../assets/img/web-design.png';
import DataScience from '../assets/img/data-science.png';


function ServicesPage() {
    return (
        <div className="services-page">
            <Title lettre1={'M'} reste1={'es '} lettre2={'S'} reste2={'ervices'}/>
            <div className="services-container">
                <ServiceCard 
                    title={'Developpement Web'} 
                    img={DevWeb} 
                    text={'Développement d\'application et de site web adaptés à vos besoin.'}
                />
                <ServiceCard 
                    title={'Web Design'} 
                    img={WebDesign} 
                    text={'Design de vos application et site web afin d\'apporter une ergonomie à vos client.'}
                />
                <ServiceCard 
                    title={'Data Science'} 
                    img={DataScience} 
                    text={'Exploitation et transformation de données scientifiques afin de permettre leurs analyse et en tirer des résultats scientifiques.'}
                />
            </div>
        </div>
    )
}

export default ServicesPage;
