import { useEffect, useState } from 'react';
import Title from '../Title/TitleComponent.jsx';
import ImagePlans from '../ImagePlans/ImageComponentPlans.jsx';
import Button from '../Button/ButtonComponent.jsx';
import Modal from '../Modal/ModalComponent.jsx';
import Register from '../Register/RegisterComponent.jsx';
import Values from '../Values/ValuesComponent.jsx';
import sesi from '../../assets/images/sesi.png';
import sesi2 from '../../assets/images/sesi2.png';
import sesi3 from '../../assets/images/sesi3.png';
import './plansAndPrices.css';

const listItem = [
    {
        title: 'Combo 1',
        src: sesi,
        alt: 'Descrição da imagem',
        value: '78,00'
    },
    {
        title: 'Combo 2',
        src: sesi2,
        alt: 'Descrição da imagem',
        value: '49,00'
    },
    {
        title: 'Combo 3',
        src: sesi3,
        alt: 'Descrição da imagem',
        value: '95,00'
    },
];

const PlansAndPrices = () => {
    const [selectedCombo, setSelectedCombo] = useState(null);

    const handleOpenModal = (indice) => {
        setSelectedCombo(indice);
    };

    const handleCloseModal = () => {
        setSelectedCombo(null);
    };

    const handlerPurchase = () => {
        alert(`Cadastro para o Combo ${selectedCombo + 1} realizado com sucesso!`);
        handleCloseModal();
    };

    useEffect(
        () => { 
            if (selectedCombo!==null) {
                console.log('Modal aberto');
            } else {
                console.log('Modal fechado');
            }
        },[selectedCombo]
    );

    return (
        <div className='c-plans-and-prices'>
            {
                listItem.map(
                    (item, indice) => (
                        <div key={indice}>
                            <div className="c-plans-container">
                                <Title
                                    className={'c-title'}
                                    title={item.title}
                                />

                                <ImagePlans
                                    src={item.src}
                                    alt={item.alt}
                                />

                                <Values
                                    className={'c-values'}
                                    value={item.value}
                                />
                            </div>

                            <div className="c-modal">
                                <Button
                                    className={'c-button-buy'}
                                    onClick={() => handleOpenModal(indice)}
                                    text={'Comprar'}
                                />

                                <Modal onClose={handleCloseModal} isOpen={selectedCombo === indice}>
                                    <Register />

                                    <Button
                                        className={'c-button-register'}
                                        onClick={handlerPurchase}
                                        text={'Cadastrar'}
                                    />
                                </Modal>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default PlansAndPrices;