import {
    programsData
} from '../../data/programsData.jsx';

import {
    toast
} from 'react-toastify';

import RightArow from '../../assets/images/rightArrow.png';
import './ProgramsComponent.css';

const Programs = () => {
    return (
        <div
            className='class-programs'
            id='id-programs'
        >
            <div className='class-programs-header'>
                <span className='class-stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='class-stroke-text'>to shape you</span>
            </div>

            <div className='class-program-categories'>
                {
                    programsData.map(
                        (program, indice) => (
                            <div
                                onClick={
                                    () => toast.info('Page under creation...')
                                }
                                className='class-category'
                                key={indice}
                            >
                                {program.image}

                                <span>
                                    {program.heading}
                                </span>

                                <span>
                                    {program.details}
                                </span>

                                <div className='class-join-now'>
                                    <span>Join now</span>

                                    <img
                                        src={RightArow}
                                        alt='Arrow image'
                                    />
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Programs;