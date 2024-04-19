import React from 'react';
import Input from '../input/input';
import './register.css';

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const eventTarget = event.target;
        const inputValue = eventTarget[0];
        const emailValue = eventTarget[1];

        alert('Fomulário enviado!');

        inputValue.value = '';
        emailValue.value = '';
    };

    return (
        <div className='c-register-container'>
            <form onSubmit={handleSubmit}>
                <Input
                    className='c-register-input'
                    type='text'
                    placeholder='Digite o nome...'
                />

                <Input
                    className='c-register-input'
                    type='email'
                    placeholder='Digite o e-mail...'
                />
            </form>
        </div>
    );
};

export default Register;