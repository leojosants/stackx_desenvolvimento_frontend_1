import {
    useState
} from 'react';

import {
    Link
} from 'react-scroll';

import Logo from '../../assets/images/logo.png';
import Bars from '../../assets/images/bars.png';

import './HeaderComponent.css';

const Header = () => {
    const mobile = (
        window.innerWidth <= 768 ? true : false
    );

    const [
        menuOpened, setMenuOpened
    ] = useState(false);

    return (
        <div className='class-header'>
            <img
                src={Logo}
                alt='Logo'
                className='class-logo'
            />

            {
                menuOpened === false && mobile === true
                    ? (
                        <div
                            style={
                                {
                                    backgroundColor: '#3c3f45',
                                    padding: '0.5rem',
                                    borderRadius: '5px',
                                    cursor: 'Pointer',
                                    transition: '0.4s'
                                }
                            }
                            onClick={
                                () => {
                                    setMenuOpened(true)
                                } 
                            }
                            >
                            <img
                                src={Bars}
                                alt='Navbar image'
                                style={
                                    {
                                        width: '1.5rem',
                                        height: '1.5rem',
                                    }
                                }
                            />
                        </div>
                    )
                    : (
                        <ul className='class-header-menu'>
                            <li>
                                <Link
                                    onClick={
                                        () => setMenuOpened(false)
                                    }
                                    activeClass='active'
                                    to='class-header'
                                    span={true}
                                    smooth={true}
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    onClick={
                                        () => setMenuOpened(false)
                                    }
                                    to='class-programs'
                                    span={true}
                                    smooth={true}
                                >
                                    Programs
                                </Link>
                            </li>

                            <li>
                                <Link
                                    onClick={
                                        () => setMenuOpened(false)
                                    }
                                    to='class-reasons'
                                    span={true}
                                    smooth={true}
                                >
                                    Why us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    onClick={
                                        () => setMenuOpened(false)
                                    }
                                    to='class-plans'
                                    span={true}
                                    smooth={true}
                                >
                                    Plans
                                </Link>
                            </li>

                            <li>
                                <Link
                                    onClick={
                                        () => setMenuOpened(false)
                                    }
                                    to='class-testimonials'
                                    span={true}
                                    smooth={true}
                                >
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                    )
            }
        </div>
    );
};

export default Header;