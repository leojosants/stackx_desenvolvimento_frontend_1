import React from 'react';
import Input from '../input/input';
import Button from '../button';

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const inputValue = event.target[0];
        const emailValue = event.target[1];

        alert('Fomulário enviado!');

        inputValue.value = '';
        emailValue.value = '';
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    placeholder='Digite o nome...'
                />

                <Input
                    type='email'
                    placeholder='Digite o e-mail...'
                />

                <Button text='Cadastrar' />
            </form>
        </div>
    );
};

export default Register;