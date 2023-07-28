import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//COMPS
import { BallChoice, Sum, Anonymus } from "../steps/index";
import { MainButton } from "../../../buttons";

//Store
import useStore from "../../../../store/store";

const StepOne = ({ onContinue }) => {
    // GLOABAL STATE
    const userData = useStore((state) => state.userData);
    //STEPS
    const [currentStep, setCurrentStep] = useState(1);

    const variants = {
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, delay: 0.2 } },
        closed: { x: -100, opacity: 0 },
    };

    const [isDisabled, setIsDisabled] = useState(true);

    const handleContinue = () => {
        setCurrentStep(currentStep + 1);
        setIsDisabled(true);
    };

    useEffect(() => {
        if (userData.color) {
            setIsDisabled(false);
        }
    }, [userData]);

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
                    // Add props for BallChoice component here (e.g., selectedBall, setSelectedBall, etc.)
                />
            );
            break;
        case 2:
            currentStepComponent = (
                <Sum
                // onNext={() => {
                //     handleNext();
                // }}
                // Add props for SumChoice component here (e.g., donationAmount, setDonationAmount, etc.)
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
                {/* {currentStep === 1 && <BallChoice size="48" />}
                {currentStep === 2 && <BallChoice size="36" />} */}
                {currentStepComponent}
                {/* <Sum /> */}
                {/* <Anonymus />  */}
                {/* Donation amount input */}
                {/* Anonymous switch */}
                <button onClick={handleContinue}></button>
            </AnimatePresence>
            <div className="absolute bottom-8 grid grid-cols-12">
                <div className="col-span-6">
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
