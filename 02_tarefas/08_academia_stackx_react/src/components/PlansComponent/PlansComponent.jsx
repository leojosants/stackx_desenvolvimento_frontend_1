import {
    plansData
} from '../../data/plansData';

import {
    toast
} from 'react-toastify';

import WhiteTick from '../../assets/images/whiteTick.png';
import './PlansComponent.css'

const Plans = () => {
    return (
        <div className='class-plans-container'>
            <div className='class-blur class-plans-blur-1'></div>
            <div className='class-blur class-plans-blur-2'></div>

            <div
                className='class-programs-header'
                style={
                    { gap: '2rem' }
                }
            >
                <span className='class-stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='class-stroke-text'>NOW WITHUS</span>
            </div>

            <div className='class-plans'>
                {
                    plansData.map(
                        (plan, indice) => (
                            <div
                                className='class-plan'
                                key={indice}
                            >
                                {plan.icon}

                                <span>
                                    {plan.name}
                                </span>

                                <span>
                                    ${plan.price}
                                </span>

                                <div className='class-features'>
                                    {
                                        plan.features.map(
                                            (feature, indice) => (
                                                <div
                                                    className='class-feature'
                                                    key={indice}
                                                >
                                                    <img
                                                        src={WhiteTick}
                                                        alt='Tick image'
                                                    />

                                                    <span>
                                                        {feature}
                                                    </span>
                                                </div>
                                            )
                                        )
                                    }
                                </div>

                                <div>
                                    <span>See more benefits -&gt;</span>
                                </div>

                                <button
                                    onClick={
                                        () => toast.info('Page under creation...')
                                    }
                                    className='class-button'
                                >
                                    Join now
                                </button>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Plans;