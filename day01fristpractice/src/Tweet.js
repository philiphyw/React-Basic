import React from 'react';
import './App.css';

function Tweet(a) {
    return(
        <div className="tweet">
            <h3>{a.name}</h3>
            <p>{a.message}</p>
            <h5>{a.like}</h5>
        </div>
    );
}

export default Tweet;