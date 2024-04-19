import React from 'react';
import './title.css';

const Title = (props) => {
    const { title } = props;
    return (
        <h2 className='c-title'>
            {title}
        </h2>
    );
};

export default Title;