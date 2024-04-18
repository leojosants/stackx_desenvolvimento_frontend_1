import React from 'react';

function Button(props) {
    const { onClick, text } = props;

    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;