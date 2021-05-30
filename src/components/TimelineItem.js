// REACT
import React from 'react';

function TimelineItem({data}) {

    console.log(data);

    return (
        <div className="timeline-item">
            <div className="timeline-item-container">
                <h4 className="item-date">{data.date}</h4>
                <h4 className="item-title">{data.title}</h4>
                <p className="item-text">{data.text}</p>
                <span className="circle"></span>
            </div>
        </div>
    );
};

export default TimelineItem;
