import React from 'react';
import CompanyLogo from '../images/logo.svg';

const Footer = props => (
    <footer className="bg-blg-black-blue pt-32 pb-16 rounded-tl-large">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 text-center sm:justify-around sm:px-12">
            <img src={CompanyLogo} alt="" style={{maxHeight: '48px'}} />
            <div className="flex flex-col">
                <a href="#!" className="mb-8 text-white font-Ubuntu font-bold">Product</a>

                <ul className="flex flex-col gap-1 text-white font-ubuntu font-bold">
                    <li><a href="#!">Overview</a></li>
                    <li><a href="#!">Pricing</a></li>
                    <li><a href="#!">Marketplace</a></li>
                    <li><a href="#!">Features</a></li>
                    <li><a href="#!">Integrations</a></li>
                </ul>
            </div>

            <div className="flex flex-col">
                <a href="#!" className="mb-8 text-white font-Ubuntu font-bold">Company</a>

                <ul className="flex flex-col gap-1 text-white font-ubuntu font-bold">
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Team</a></li>
                    <li><a href="#!">Blog</a></li>
                    <li><a href="#!">Careers</a></li>
                </ul>
            </div>
            
            <div className="flex flex-col">
                <a href="#!" className="mb-8 text-white font-Ubuntu font-bold">Connect</a>

                <ul className="flex flex-col gap-1 text-white font-ubuntu font-bold">
                    <li><a href="#!">Contact</a></li>
                    <li><a href="#!">Newsletter</a></li>
                    <li><a href="#!">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;