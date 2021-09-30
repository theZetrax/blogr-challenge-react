import React from 'react';
import './Link.css';
import ArrowDown from '../../images/icon-arrow-light.svg';

const Link = props => {
    const [isClicked, setClicked] = React.useState(false);

    return (
        <button className="font- text-white font-bold" onClick={() => setClicked(false)}>
            <span className="flex flex-row items-center gap-1">
                {props.children}
                <div>
                    <img src={ArrowDown} className={isClicked ? 'arrow-up' : 'arrow-down'} alt="arrow" />
                </div>
            </span>
        </button>
    );
}

export default Link;