import { useState } from "react";
import Input from "../Input/InputComponent.jsx";
import './register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const emptyField = (name.includes('')) || (email.includes(''));

        if (emptyField) {
            alert('Existem campo(s) vazio(s)!');
            return;
        }

        alert('Formulário enviado!');
    };

    return (
        <div className="c-register-container">
            <form onSubmit={handleSubmit}>
                <Input
                    className={'c-register-input'}
                    type={'text'}
                    placeholder={'Digite o nome'}
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                />

                <Input
                    className={'c-register-input'}
                    type={'email'}
                    placeholder={'Digite o email'}
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />
            </form>
        </div>
    );
};

export default Register;