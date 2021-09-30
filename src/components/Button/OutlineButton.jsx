import React from 'react';

const styles = `
    border border-white text-white font-bold px-3 py-2 font-Ubuntu rounded-full
    hover:bg-white hover:text-blg-red
`;

const OutlineButton = props => (
    <button className={styles}>
        {props.children}
    </button>
);

export default OutlineButton;