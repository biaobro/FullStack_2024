import React from 'react';
import './button.css'

function Button({icon, name, bgColor='#ff3700', color='#FFFFFF'}) {
    return (
        <div className="mainBtn" style={{color: color, background: bgColor}}>
            {icon}
            {name}
        </div>
    );
}

export default Button;