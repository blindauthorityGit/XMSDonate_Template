// components/Typography.js
import React from "react";

const H1 = ({ children, klasse }) => {
    return (
        <h1 className={`text-2xl lg:text-5xl xl:text-7xl font-black mb-4 lg:mb-6 font-sans text-darkText ${klasse}`}>
            {children}
        </h1>
    );
};

const H2 = ({ children }) => {
    return <h2 className="text-xl lg:text-4xl mb-4 font-bold">{children}</h2>;
};

const H3 = ({ children, klasse }) => {
    return <h2 className={`text-lg lg:text-2xl font-bold ${klasse}`}>{children}</h2>;
};

// Add more headline components for H3, H4, etc.

export { H1, H2, H3 };
