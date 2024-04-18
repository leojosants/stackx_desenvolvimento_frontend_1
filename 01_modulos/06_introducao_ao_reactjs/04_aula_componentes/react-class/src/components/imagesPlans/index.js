import './index.css';

const ImagesPlans = (props) => {
    return (
        <img
            className='c-image-plans'
            src={props.src}
            alt={props.alt}
        />
    );

};

export default ImagesPlans;