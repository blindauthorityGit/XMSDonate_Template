import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

//COMPS
import { BallChoice, Sum, Anonymus, Name } from "../steps/index";
import { MainButton } from "../../../buttons";

//Store
import useStore from "../../../../store/store";

//FUNCTIONS
import isStepDataValid from "../../../../functions/isStepDataValid";

const StepOne = ({ onContinue }) => {
    // GLOABAL STATE
    const userData = useStore((state) => state.userData);
    //STEPS
    const [currentStep, setCurrentStep] = useState(1);
    //BackState
    const [disabledBack, setDisabledBack] = useState(true);

    const variants = {
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, delay: 0.2 } },
        closed: { x: -100, opacity: 0 },
    };

    const [isDisabled, setIsDisabled] = useState(true);

    const handleContinue = () => {
        setCurrentStep(currentStep + 1);
        setIsDisabled(true);
    };
    const handleBack = () => {
        setCurrentStep(currentStep - 1);

        // setIsDisabled(true);
    };

    useEffect(() => {
        // Update the disabledBack state when the component mounts and when currentStep changes
        setDisabledBack(currentStep === 1);
    }, [currentStep]);

    useEffect(() => {
        // Update the isDisabled state based on the selected values in each step
        setIsDisabled(!isStepDataValid(currentStep, userData));
    }, [currentStep, userData]);

    // Render the respective step component based on the currentStep state
    let currentStepComponent;
    switch (currentStep) {
        case 1:
            currentStepComponent = (
                <BallChoice
                    size="48"
                    onNext={() => {
                        handleNext();
                    }}
                />
            );
            break;
        case 2:
            currentStepComponent = (
                <Sum
                    onNext={() => {
                        handleNext();
                    }}
                />
            );
            break;
        case 3:
            currentStepComponent = (
                <Anonymus
                    onNext={() => {
                        handleNext();
                    }}
                />
            );
            break;
        case 4:
            currentStepComponent = (
                <Name
                    onNext={() => {
                        handleNext();
                    }}
                />
            );
            break;
        // Add more cases for other steps here
        default:
            break;
    }

    return (
        <>
            {" "}
            {/* Add AnimatePresence here */}
            <AnimatePresence>
                {currentStepComponent}

                <button onClick={handleContinue}></button>
            </AnimatePresence>
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-12 ">
                <div className="col-span-6">
                    {" "}
                    <MainButton disabled={disabledBack} onClick={handleBack} klasse="border-2 text-darkText">
                        Zurück
                    </MainButton>
                </div>
                <div className="col-span-6 flex justify-end">
                    {" "}
                    <MainButton disabled={isDisabled} onClick={handleContinue} klasse="border-2 text-darkText">
                        Weiter
                    </MainButton>
                </div>
            </div>
        </>
    );
};

export default StepOne;
