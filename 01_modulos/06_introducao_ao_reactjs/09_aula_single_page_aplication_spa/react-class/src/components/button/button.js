import React from 'react';
import './button.css';

function Button(props) {
    const { className, onClick, text } = props;

    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;