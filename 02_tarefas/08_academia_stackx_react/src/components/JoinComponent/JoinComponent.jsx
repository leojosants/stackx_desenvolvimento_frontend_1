import {
    useState
} from 'react';

import {
    toast
} from 'react-toastify';

import './JoinComponent.css';

const Join = () => {
    const [
        email, setEmail
    ] = useState('');

    const clearInputEmail = () => { 
        setEmail('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isEmailEmpty = (email.length === 0);

        if (isEmailEmpty) {
            toast.error('Empty field, please fill in!');
            return;
        }

        toast.success('Email sent!');
        
        clearInputEmail();
    };

    return (
        <div
            className='class-join'
            id='id-join-us'
        >
            <div className='class-left-join'>
                <hr />

                <div>
                    <span className='class-stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>

                <div>
                    <span>YOUR BODY</span>
                    <span className='class-stroke-text'> WITH US?</span>
                </div>
            </div>

            <div className='class-right-join'>
                <form
                    className='class-email-container'
                    onSubmit={handleSubmit}
                >
                    <input
                        type='email'
                        name='user_email'
                        placeholder='Enter your E-mail address'
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                    <button
                        className='class-button class-button-join'
                        type='submit'
                    >
                        Join now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Join;