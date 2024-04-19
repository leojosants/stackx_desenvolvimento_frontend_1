import React, { useState } from 'react';
import Title from '../title/title';
import Modal from '../modal/modal';
import Register from '../register/register';
import Button from '../button/button';
import Values from '../values/values';
import ImagesPlans from '../imagesPlans/imagesPlans';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

const listItems = [
    {
        title: 'Combo 1',
        src: image1,
        alt: 'Descrição da imagem',
        value: '99,90'
    },
    {
        title: 'Combo 2',
        src: image2,
        alt: 'Descrição da imagem',
        value: '89,90'
    },
    {
        title: 'Combo 3',
        src: image3,
        alt: 'Descrição da imagem',
        value: '79,90'
    },
];

const PlansAndPrices = () => {
    const [selectedCombo, setSelectedCombo] = useState(null);

    const handleOpenModal = (index) => {
        setSelectedCombo(index);
    };

    const handleCloseModal = () => {
        setSelectedCombo(null);
    };

    const handlePurchase = () => {
        alert(`Cadastro para o Combo ${selectedCombo + 1} realizado com sucesso!`);
        handleCloseModal();
    };

    return (
        <div>
            {
                listItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='c-plans-container'>
                                <Title
                                    className='c-title'
                                    title={item.title}
                                />

                                <ImagesPlans
                                    src={item.src}
                                    alt={item.alt}
                                />

                                <Values
                                    className='c-values'
                                    value={item.value}
                                />
                            </div>

                            <div className='c-modal'>
                                <Button
                                    className='c-button-buy'
                                    onClick={() => handleOpenModal(index)}
                                    text='Comprar'
                                />

                                <Modal
                                    onClose={handleCloseModal}
                                    isOpen={selectedCombo === index}
                                >
                                    <Register />

                                    <Button
                                        className='c-button-register'
                                        onClick={handlePurchase}
                                        text='Cadastrar'
                                    />
                                </Modal>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default PlansAndPrices;