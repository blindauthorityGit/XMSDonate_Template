// components/Typography.js
import React from "react";

const H1 = ({ children, klasse }) => {
    return (
        <h1 className={`text-2xl lg:text-4xl xl:text-5xl font-black mb-4 lg:mb-6 font-sans text-darkText ${klasse}`}>
            {children}
        </h1>
    );
};

const H2 = ({ children, klasse }) => {
    return <h2 className={`text-xl lg:text-2xl xl:text-3xl mb-4 font-bold ${klasse}`}>{children}</h2>;
};

const H3 = ({ children, klasse }) => {
    return <h2 className={`text-lg lg:text-2xl font-bold ${klasse}`}>{children}</h2>;
};

// Add more headline components for H3, H4, etc.

export { H1, H2, H3 };
