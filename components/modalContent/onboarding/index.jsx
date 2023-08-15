import React, { useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const Index = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 onNext={handleNextStep} />;
            case 2:
                return <Step2 onNext={handleNextStep} />;
            case 3:
                return <Step3 onNext={onClose} />;
            default:
                return null;
        }
    };

    return <div>{renderStep()}</div>;
};

export default Index;
