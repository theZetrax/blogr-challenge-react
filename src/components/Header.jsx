import React from 'react';
import NavBar from './NavBar';
import Button from './Button';

const Header = props => {
    
    
    return (
        <header className="pt-12 pb-24 rounded-bl-large bg-gradient-to-r from-blg-red-light to-blg-red">
            <NavBar.Bar />
            
            <div className="flex flex-col items-center justify-center">
                <div className="font-Overpass flex flex-col justify-center pt-12 pb-8">
                    <h3 className="text-5xl font-bold text-center text-white">A modern publishing platform</h3>
                    <h5 className="text-center text-white">Grow your audience and build your online brand</h5>
                </div>
                <div className="flex flex-row gap-2">
                    <Button.RegularButton>Start for Free</Button.RegularButton>
                    <Button.OutlineButton>Learn More</Button.OutlineButton>
                </div>
            </div>
        </header>
    );

}
export default Header;