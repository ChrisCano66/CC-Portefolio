// REACT
import React from 'react';
// COMPONENT
import TimelineItem from './TimelineItem';
// ASSETS
import dataExp from '../assets/datas/DataExp';

function Timeline() {

    console.log(dataExp);

    return (
        <div className="timeline-container">
            {dataExp.map((data, index) => (
                <TimelineItem data={data} index={index} key={index}/>
            ))};
        </div>
    );
};

export default Timeline;
