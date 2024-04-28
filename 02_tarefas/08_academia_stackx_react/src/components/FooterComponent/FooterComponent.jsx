import Github from '../../assets/images/github.png';
import Instagram from '../../assets/images/instagram.png';
import LinkdIn from '../../assets/images/linkedin.png';
import Logo from '../../assets/images/logo.png';

import './FooterComponent.css';

const Footer = () => {
    return (
        <div className='class-footer-container'>
            <hr />

            <div className='class-footer'>
                <div className='class-social-links'>
                    <img
                        src={Github}
                        alt='Logo do GitHub'
                    />

                    <img
                        src={Instagram}
                        alt='Logo do Instagram'
                    />

                    <img
                        src={LinkdIn}
                        alt='Logo do LinkdIn'
                    />
                </div>

                <div className='class-logo-f'>
                    <img
                        src={Logo}
                        alt='Logo do projeto'
                    />
                </div>
            </div>

            <div className='class-blur class-footer-blur-1'></div>

            <div className='class-blur class-footer-blur-2'></div>
        </div>
    );
};

export default Footer;