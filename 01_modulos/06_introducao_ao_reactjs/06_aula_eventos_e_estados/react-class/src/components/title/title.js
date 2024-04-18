import React from 'react';
import './titleStyle.css';

const Title = (props) => {
    const { title } = props;
    return (
        <h2 className='title'>
            {title}
        </h2>
    );
};

export default Title;