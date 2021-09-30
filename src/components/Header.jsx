import React, {useState} from 'react';
import CompanyLogo from '../images/logo.svg';
import burgerOpen from '../images/icon-hamburger.svg';
import burgerClose from '../images/icon-close.svg';

const Header = props => {
    const [navOpen, setNavOpen] = useState(false);
    
    return (
        <header className="pt-12 pb-24 rounded-bl-large bg-blue-300">
            <nav className="px-20 flex flex-wrap items-center justify-between w-full pb-4  text-lg text-gray-700">
                <div className="flex flex-row">
                    <div id="company-logo">
                        <a href="#!">
                            <img src={CompanyLogo} style={{ minHeight: '30px' }} alt="Company Logo" />
                        </a>
                    </div>

                    <div class="hidden w-full md:flex md:items-center md:w-auto md:ml-5">
                        <a href="#!" className="">Apple</a>
                    </div>
                </div>


                {/* Hamburger Menu (Mobile) */}
                <div>
                    <button className="h-6 w-6 md:hidden block" onClick={() => setNavOpen(!navOpen)}>
                        <img src={navOpen ? burgerClose : burgerOpen} alt="Menu Navigation Open" />
                    </button>
                </div>
                {/* Login/Signup Button */}
                <div class="hidden md:flex md:items-center md:w-auto">
                    <button href="#!">Login</button>
                    <button href="#!">Sign Up</button>
                </div>
            </nav>

            <div className="flex items-center justify-center">
                Apple
            </div>
        </header>
    );

}
export default Header;