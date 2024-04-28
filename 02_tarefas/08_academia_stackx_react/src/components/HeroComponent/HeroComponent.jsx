import {
    toast
} from 'react-toastify';

import {
    motion
} from 'framer-motion';

import NumberCounter from 'number-counter';

import Header from '../HeaderComponent/HeaderComponent';

import HeroImageBack from '../../assets/images/hero_image_back.png';
import HeroImage from '../../assets/images/hero_image.png';
import Calories from '../../assets/images/calories.png';
import Heart from '../../assets/images/heart.png';

import './HeroComponent.css';

const Hero = () => {
    const transition = {
        type: 'spring',
        duration: 3
    };

    const mobile = (window.innerWidth <= 768 ? true : false);

    return (
        <div className='class-hero' id='id-home'>

            <div className='class-blur class-hero-blur'></div>

            <div className='class-left-hero'>
                <Header />

                <div className='class-the-best-ad'>
                    <motion.div
                        initial={
                            { left: mobile ? '165px' : '238px' }
                        }
                        whileInView={
                            { left: '8px' }
                        }
                        transition={
                            {
                                ...transition,
                                type: 'tween'
                            }
                        }
                    >
                    </motion.div>

                    <span>the best fitness club in the town</span>
                </div>

                <div className='class-hero-text'>
                    <div>
                        <span className='class-stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>

                    <div>
                        <span>deal body</span>
                    </div>

                    <div>
                        <span>
                            IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
                        </span>
                    </div>
                </div>

                <div className='class-figures'>
                    <div>
                        <span>
                            <NumberCounter
                                end={140}
                                start={100}
                                delay='4'
                                preFix='+'
                            />
                        </span>
                        <span>expert coachs</span>
                    </div>

                    <div>
                        <span>
                            <NumberCounter
                                end={978}
                                start={200}
                                delay='4'
                                preFix='+'
                            />
                        </span>
                        <span>members joined</span>
                    </div>

                    <div>
                        <span>
                            <NumberCounter
                                end={50}
                                start={0}
                                delay='4'
                                preFix='+'
                            />
                        </span>
                        <span>fitnes programs</span>
                    </div>
                </div>

                <div className='class-hero-buttons'>
                    <button
                        onClick={
                            () => toast.info('Page under creation...')
                        }
                        className='class-button'
                    >
                        Get Started
                    </button>

                    <button
                        onClick={
                            () => toast.info('Page under creation...')
                        }
                        className='class-button'
                    >
                        Learn More
                    </button>
                </div>
            </div>

            <div className='class-right-hero'>
                <button
                    onClick={
                        () => toast.info('Page under creation...')
                    }
                    className='class-button'
                >
                    Join Now
                </button>

                <motion.div
                    initial={
                        { right: '-1rem' }
                    }
                    whileInView={
                        { right: '4rem' }
                    }
                    transition={transition}
                    className='class-heart-rate'
                >
                    <img
                        src={Heart}
                        alt='Image of a heart'
                    />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img
                    className='class-hero-image'
                    src={HeroImage}
                 alt='Image of a character'
          />

                <motion.img
                    initial={
                        { right: '11rem' }
                    }
                    whileInView={
                        { right: '20rem' }
                    }
                    transition={transition}
                    className='class-hero-image-back'
                    src={HeroImageBack}
                    alt='Back arrow image' />

                <motion.div
                    initial={
                        { right: '37rem' }
                    }
                    whileInView={
                        { right: '28rem' }
                    }
                    transition={transition}
                    className='class-calories'
                >
                    <img
                        src={Calories}
                        alt='graph image'
                    />

                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;