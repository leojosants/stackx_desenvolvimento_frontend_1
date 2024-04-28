import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';
import Image3 from '../../assets/images/image3.png';
import Image4 from '../../assets/images/image4.png';
import Adidas from '../../assets/images/adidas.png';
import Nike from '../../assets/images/nike.png';
import Tick from '../../assets/images/tick.png';
import Nb from '../../assets/images/nb.png';

import './ReasonsComponent.css';

const Reasons = () => {
    return (
        <div
            className='class-reasons'
            id='id-reasons'
        >
            <div className='class-left-reasons'>
                <img
                    src={Image1}
                    alt='Character image'
                />

                <img
                    src={Image2}
                    alt='Character image'
                />

                <img
                    src={Image3}
                    alt='Character image'
                />

                <img
                    src={Image4}
                    alt='Character image'
                />

            </div>

            <div className='class-right-reasons'>
                <span>Some reasons</span>

                <div >
                    <span className='class-stroke-text'>why</span>
                    <span> choose us?</span>
                </div>

                <div className='class-details-reasons'>
                    <div>
                        <img
                            src={Tick}
                            alt='Image Tick'
                        />

                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>

                    <div>
                        <img
                            src={Tick}
                            alt='Image Tick'
                        />

                        <span>TRAIN SMATER AND FASTER THAN BEFORE</span>
                    </div>

                    <div>
                        <img
                            src={Tick}
                            alt='Image Tick'
                        />

                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>

                    <div>
                        <img
                            src={Tick}
                            alt='Image Tick'
                        />

                        <span>RELIABLE PARTINERS</span>
                    </div>
                </div>

                <span
                    style={
                        {
                            color: '#808080',
                            fontWeight: 'normal'
                        }
                    }
                >
                    OUR PARTINERS
                </span>

                <div className='class-partiners'>
                    <img
                        src={Nb}
                        alt='Sponsor logo'
                    />

                    <img
                        src={Adidas}
                        alt='Sponsor logo'
                    />

                    <img
                        src={Nike}
                        alt='Sponsor logo'
                    />
                </div>
            </div>
        </div>
    );
};

export default Reasons;