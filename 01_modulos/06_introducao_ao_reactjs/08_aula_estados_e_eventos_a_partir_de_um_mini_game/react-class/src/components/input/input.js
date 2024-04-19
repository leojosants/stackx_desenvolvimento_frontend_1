import React from 'react';

const Input = (props) => {
    const { className, type, onChange, placeholder } = props;

    return (
        <input
            className={className}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default Input;