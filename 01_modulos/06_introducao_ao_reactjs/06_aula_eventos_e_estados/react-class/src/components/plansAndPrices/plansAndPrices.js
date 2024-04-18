import Title from "../title/title";
import Button from "../button";
import Input from "../input/input";
import ImagesPlans from "../imagesPlans/imagesPlans";
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

const listItems = [
    {
        title: 'Combo 1',
        src: image1,
        alt: 'Descrição da imagem',
    },
    {
        title: 'Combo 2',
        src: image2,
        alt: 'Descrição da imagem',
    },
    {
        title: 'Combo 3',
        src: image3,
        alt: 'Descrição da imagem',
    },
];

const PlansAndPrices = () => {
    const handleOnclick = () => {
        alert('Botão clicado!');
    };

    const handleShowMessage = (event) => {
        const eventTarget = event.target;
        const inputvalue = eventTarget.value;
        alert(`Dado alterado para: ${inputvalue}`);
    };

    return (
        <div>
            {
                listItems.map((item, index) => {
                    return (
                        <div key={index}>
                            <Title title={item.title} />

                            <ImagesPlans
                                src={item.src}
                                alt={item.alt}
                            />

                            <Button onClick={handleOnclick} text='Comprar' />

                            <Input
                                type='text'
                                onChange={handleShowMessage}
                                placeholder='Digite algo...'
                            />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default PlansAndPrices;