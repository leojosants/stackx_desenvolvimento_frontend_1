import './imagePlans.css';

const ImagePlans = (props) => {
    const { src, alt } = props;

    return (
        <img className='c-image-plans' src={src} alt={alt} />
    );
};

export default ImagePlans;