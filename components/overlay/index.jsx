import React from "react";

const Overlay = ({ onClick }) => {
    return (
        <div
            className="fixed inset-0 bg-black opacity-70 z-30"
            onClick={onClick} // Call the onClick function passed as a prop
        />
    );
};

export default Overlay;
