import React, {useState} from 'react';

import Link from './Link';

import CompanyLogo from '../../images/logo.svg';
import burgerOpen from '../../images/icon-hamburger.svg';
import burgerClose from '../../images/icon-close.svg';
import RegularButton from '../Button/RegularButton';

const Bar = props => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="font-Ubunut px-20 flex flex-wrap items-center justify-between w-full pb-4  text-lg text-gray-700">
            <div className="flex flex-row items-center">
                <div id="company-logo">
                    <a href="#!">
                        <img src={CompanyLogo} style={{ minHeight: '30px' }} alt="Company Logo" />
                    </a>
                </div>

                <div className="hidden w-full md:flex md:gap-6 md:items-center md:w-auto md:ml-5">
                    <Link>Product</Link>
                    <Link>Company</Link>
                    <Link>Connect</Link>
                </div>
            </div>


            {/* Hamburger Menu (Mobile) */}
            <div>
                <button className="h-6 w-6 md:hidden block" onClick={() => setNavOpen(!navOpen)}>
                    <img src={navOpen ? burgerClose : burgerOpen} alt="Menu Navigation Open" />
                </button>
            </div>
            {/* Login/Signup Button */}
            <div className="hidden md:flex md:gap-2 md:items-center md:w-auto">
                <button className="text-white font-medium" href="#!">Login</button>
                <RegularButton>Sign Up</RegularButton>
            </div>
        </nav>
    )
};

export default Bar;