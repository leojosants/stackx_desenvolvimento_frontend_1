import {
    useState
} from 'react';

import {
    motion
} from 'framer-motion';

import {
    testimonialsData
} from '../../data/testimonialsData';


import LeftArrow from '../../assets/images/leftArrow.png';
import RightArrow from '../../assets/images/rightArrow.png';

import './TestimonialsComponent.css';

const Testimonials = () => {
    const transition = {
        type: 'spring', duration: 3
    };

    const [
        selected, setSelected
    ] = useState(0);

    const testimonialsLength = testimonialsData.length;

    return (
        <div className='class-testimonials'>
            <div className='class-left-testimonials'>
                <span>Testimonials</span>
                <span className='class-stroke-text'> What they</span>
                <span> say about us</span>
                <span>
                    {testimonialsData[0].review}
                </span>

                <span>
                    <span style={
                        { color: 'var(--orange)' }
                    }>
                        {testimonialsData[selected].name}
                    </span>
                    {' - '}{testimonialsData[selected].status}
                </span>
            </div>

            <div className='class-right-testimonials'>
                <motion.div
                    initial={
                        {
                            opacity: 0,
                            x: -100
                        }
                    }
                    transition={
                        {
                            ...transition,
                            duration: 2
                        }
                    }
                    whileInView={
                        {
                            opacity: 1,
                            x: 0
                        }
                    }
                ></motion.div>

                <motion.div
                    initial={
                        {
                            opacity: 0,
                            x: 100
                        }
                    }
                    transition={
                        {
                            ...transition,
                            duration: 2
                        }
                    }
                    whileInView={
                        {
                            opacity: 1,
                            x: 0
                        }
                    }
                ></motion.div>

                <motion.img
                    key={selected}
                    initial={
                        {
                            opacity: 0,
                            x: 100
                        }
                    }
                    animate={
                        {
                            opacity: 1,
                            x: 0
                        }
                    }
                    exit={
                        {
                            opacity: 0,
                            x: -100
                        }
                    }
                    transition={transition}
                    src={testimonialsData[selected].image}
                    alt='Client image'
                />

                <div className='class-arrows'>
                    <img
                        onClick={
                            () => selected === 0
                                ? setSelected(testimonialsLength - 1)
                                : setSelected(
                                    (prev) => prev - 1
                                )
                        }
                        src={LeftArrow}
                        alt='Arrow image'
                    />

                    <img
                        onClick={
                            () => selected === testimonialsLength - 1
                                ? setSelected(0)
                                : setSelected(
                                    (prev) => prev + 1
                                )
                        }
                        src={RightArrow}
                        alt='Arrow image'
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;