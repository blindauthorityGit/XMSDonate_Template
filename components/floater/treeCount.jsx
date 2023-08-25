import React from "react";

const TreeCountFloater = ({ children, klasse }) => {
    return (
        <div
            className={`${klasse}TreeCountFloater lg:w-auto lg:text-lg bg-white lg:bg-transparent lg:text-center text-darkText hover:bg-primaryColor-950 transition-all rounded-lg py-1   ease-in-out px-2 text-xs font-semibold  `}
        >
            {children}
        </div>
    );
};

export default TreeCountFloater;
