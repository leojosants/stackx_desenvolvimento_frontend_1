import Button from "../Button/ButtonComponent.jsx";
import Input from "../Input/InputComponent.jsx";

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Formulário enviado!');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    type={'text'}
                    placeholder={'Digite o nome'}
                />

                <Input
                    type={'email'}
                    placeholder={'Digite o email'}
                />

                <Button text={'Cadastrar'} />
            </form>
        </div>
    );
};

export default Register;