import Title from "../title";
import ImagesPlans from "../imagesPlans";
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
    return (
        <div>
            {
                listItems.map((item) => {
                    return (
                        <div>
                            <Title title={item.title} />
                            <ImagesPlans
                                src={item.src}
                                alt={item.alt}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default PlansAndPrices;