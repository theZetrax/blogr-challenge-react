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
                <div>
                    <button className="h-6 w-6 md:hidden block" onClick={() => setNavOpen(!navOpen)} id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <img src={navOpen ? burgerClose : burgerOpen} alt="Menu Navigation Open" />
                    </button>
                </div>
                
                <div className={`${navOpen ? '' : 'hidden'} sm:hidden origin-top-right absolute right-0 mx-1 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                    <div className="py-1" role="none">
                        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                        <a href="#!" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Product</a>
                        <a href="#!" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Company</a>
                        <a href="#!" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Connect</a>
                        <hr />
                        <a href="#!" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Login</a>
                        <a href="#!" className="text-gray-700 hover:bg-gray-200 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Sign Up</a>
                    </div>
                </div>
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