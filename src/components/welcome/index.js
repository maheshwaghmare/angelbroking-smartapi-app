import React from 'react';
import './style.css';

const Welcome = ( {user} ) => {
    return (
        <div className="ab-api-welcome">
            <h2>Welcome {user.name}</h2>
        </div>
    )
}

export default Welcome;
