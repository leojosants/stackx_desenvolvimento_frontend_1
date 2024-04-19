import './imagesPlans.css';

const ImagesPlans = (props) => {
    const { src, alt } = props;

    return (
        <img
            className='c-image-plans'
            src={src}
            alt={alt}
        />
    );

};

export default ImagesPlans;