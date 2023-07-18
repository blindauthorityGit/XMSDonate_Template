import React from "react";

const MainButton = ({ bgColor, hoverClass, children, onClick, klasse }) => {
    return (
        <button
            onClick={onClick}
            className={`px-12 py-4 w-full lg:w-auto rounded-md font-semibold text-white text-lg uppercase tracking-widest ${klasse} bg-${bgColor} hover:${hoverClass} focus:outline-none`}
        >
            {children}
        </button>
    );
};

export default MainButton;
