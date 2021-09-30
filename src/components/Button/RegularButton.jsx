import React from 'react';

const styles = `
    bg-white text-blg-red font-bold px-5 py-2 font-Ubuntu rounded-full
    hover:bg-blg-red-light hover:text-white
`;

const RegularButton = props => (
    <button className={styles}>
        {props.children}
    </button>
);

export default RegularButton;