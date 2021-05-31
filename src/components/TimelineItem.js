// REACT
import React from 'react';

function TimelineItem({data}) {

    return (
        <div className="timeline-item">
            <div className="timeline-item-container">
                <h3 className="item-date">{data.date}</h3>
                <h4 className="item-title">{data.title}</h4>
                <p className="item-text">{data.text}</p>
                <p className="item-text">{data.text2}</p>
                <span className="circle"></span>
            </div>
        </div>
    );
};

export default TimelineItem;
