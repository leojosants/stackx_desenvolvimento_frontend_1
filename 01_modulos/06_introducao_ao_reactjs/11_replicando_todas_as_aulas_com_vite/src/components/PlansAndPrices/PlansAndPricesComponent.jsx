import Title from '../Title/TitleComponent.jsx';
import ImagePlans from '../ImagePlans/ImageComponentPlans.jsx';
import Button from '../Button/ButtonComponent.jsx';
import Input from '../Input/InputComponent.jsx';
import sesi from '../../assets/images/sesi.png';
import sesi2 from '../../assets/images/sesi2.png';
import sesi3 from '../../assets/images/sesi3.png';
import './plansAndPrices.css';

const listItem = [
    {
        title: 'Combo 1',
        src: sesi,
        alt: 'Descrição da imagem'
    },
    {
        title: 'Combo 2',
        src: sesi2,
        alt: 'Descrição da imagem'
    },
    {
        title: 'Combo 3',
        src: sesi3,
        alt: 'Descrição da imagem'
    },
];

const PlansAndPrices = () => {
    const handleOnClick = () => {
        console.log('Clicou!');
    };
    const handleShowMessage = (event) => {
        const eventTarget = event.target;
        const value = eventTarget.value;
        console.log(value);
    };

    return (
        <div>
            {
                listItem.map(
                    (item, indice) => (
                        <div key={indice}>
                            <Title
                                title={item.title}
                            />

                            <ImagePlans
                                src={item.src}
                                alt={item.alt}
                            />

                            <Button
                                onClick={handleOnClick}
                                text={'Comprar'}
                            />

                            <Input
                                type={'text'}
                                onChange={handleShowMessage}
                                placeholder={'Digite algo...'}
                            />
                        </div>
                    )
                )
            }
        </div>
    );
};

export default PlansAndPrices;