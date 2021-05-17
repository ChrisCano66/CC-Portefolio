// REACT
import React from 'react';
// COMPONENT
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';

function AboutPage() {
    return (
        <div className="aboutpage">
            <Title lettre1={'A'} reste1={' propos de '} lettre2={'M'} reste2={'oi'}/>
            <ImageSection/>
        </div>
    )
}

export default AboutPage;
