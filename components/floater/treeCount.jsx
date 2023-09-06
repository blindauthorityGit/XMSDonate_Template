import React from "react";

const TreeCountFloater = ({ children, klasse }) => {
    return (
        <div
            className={`${klasse}TreeCountFloater flex items-center justify-center  lg:text-base bg-white sm:h-[2rem] lg:text-center text-darkText  transition-all rounded-lg py-1   ease-in-out px-2 text-xs font-semibold  `}
        >
            {children}
        </div>
    );
};

export default TreeCountFloater;
