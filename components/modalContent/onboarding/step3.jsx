// Step1.jsx
import React from "react";

const Step3 = ({ onNext }) => {
    return (
        <div>
            <h2>Step 3</h2>
            <p>Content for Step 3</p>
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default Step3;
