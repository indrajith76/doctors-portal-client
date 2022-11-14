import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white font-semibold">
            {children}
        </button>
    );
};

export default PrimaryButton;