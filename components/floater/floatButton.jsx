import React from "react";

const FloatButton = ({ children, klasse, onClick }) => {
    return (
        <div
            className={`${klasse} w-12 h-12 lg:w-20 lg:h-20 lg:text-3xl bg-primaryColor hover:bg-primaryColor-950 transition-all  ease-in-out cursor-pointer rounded-l-xl text-white`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default FloatButton;
