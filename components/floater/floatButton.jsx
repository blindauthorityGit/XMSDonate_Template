import React from "react";

const FloatButton = ({ children, klasse, onClick }) => {
    return (
        <div
            className={`${klasse} w-10 h-10 xl:w-20 xl:h-20 xl:text-3xl bg-primaryColor hover:bg-primaryColor-950 transition-all  ease-in-out cursor-pointer rounded-l-xl text-white`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default FloatButton;
