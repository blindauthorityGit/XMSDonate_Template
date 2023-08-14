// components/Typography.js
import React from "react";

const P = ({ children, klasse }) => {
    return <p className={`text-sm lg:text-base xl:text-lg ${klasse} font-regular text-darkText`}>{children}</p>;
};

// Add more headline components for H3, H4, etc.

export { P };
