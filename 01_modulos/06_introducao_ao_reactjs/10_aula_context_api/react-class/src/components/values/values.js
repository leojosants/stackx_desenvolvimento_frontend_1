import React from 'react';
import './values.css';

const Values = (props) => {
    const { className, value } = props;

    return (
        <div>
            <h3 className={className}>{value}</h3>
        </div>
    );
};

export default Values;