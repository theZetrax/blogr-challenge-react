import React from 'react';

const RegularButton = props => (
    <button className="bg-white text-gray-900 px-2 py-1 rounded-full">
        {props.children}
    </button>
);

export default RegularButton;