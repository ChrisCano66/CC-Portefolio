// REACT
import React from 'react';

function Title({lettre1, reste1, lettre2, reste2}) {
    return (
        <div className="title-page">
            <span>{lettre1}</span>{reste1}<span>{lettre2}</span>{reste2}           
        </div>
    )
}

export default Title;
