// Step1.jsx
import React from "react";

const Step2 = ({ onNext }) => {
    return (
        <div>
            <h2>Step 2</h2>
            <p>Content for Step 2</p>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default Step2;
