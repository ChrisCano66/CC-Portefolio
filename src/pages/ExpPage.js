// REACT
import React from 'react';
// COMPONENT
import Title from '../components/Title';
import Timeline from '../components/Timeline';

function ExpPage() {

    return (
        <div className="exp-page">
            <Title lettre1={'M'} reste1={'on '} lettre2={'E'} reste2={'xperience'}/>
            <Timeline/>
        </div>
    )
}

export default ExpPage;
