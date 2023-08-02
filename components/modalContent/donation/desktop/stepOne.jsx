import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { DragOverlay } from "@dnd-kit/core";

//COMPS
import { BallChoice, Sum, Anonymus, Name, Avatar, Comment, DragBall } from "../steps/index";
import { MainButton } from "../../../buttons";
import Item from "../../../dragNDrop/item";

//Store
import useStore from "../../../../store/store";

//FUNCTIONS
import isStepDataValid from "../../../../functions/isStepDataValid";

const StepOne = (props) => {
    // GLOABAL STATE
    const userData = useStore((state) => state.userData);
    //STEPS
    const [currentStep, setCurrentStep] = useState(1);
    //BackState
    const [disabledBack, setDisabledBack] = useState(true);

    //SIZE FOR DRAG BALL
    const [size, setSize] = useState(56);

    const variants = {
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, delay: 0.2 } },
        closed: { x: -100, opacity: 0 },
    };

    const [isDisabled, setIsDisabled] = useState(true);

    const handleContinue = () => {
        if (currentStep == 3 && userData.isAnonymous) {
            console.log("ANONÜÜÜM");
            setCurrentStep(currentStep + 2);
            setIsDisabled(true);
        } else {
            setCurrentStep(currentStep + 1);
            setIsDisabled(true);
        }
    };
    const handleBack = () => {
        if (currentStep == 5 && userData.isAnonymous) {
            setCurrentStep(currentStep - 2);
        } else {
            setCurrentStep(currentStep - 1);
        }
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
                    key="sum"
                    onNext={() => {
                        handleNext();
                    }}
                />
            );
            break;
        case 3:
            currentStepComponent = (
                <Anonymus
                    key="anon"
                    onNext={() => {
                        handleNext();
                    }}
                />
            );
            break;
        case 4:
            currentStepComponent = (
                <Name
                    key="namer"
                    onNext={() => {
                        handleNext();
                    }}
                />
            );
            break;
        case 5:
            currentStepComponent = (
                <Avatar
                    key="avatar"
                    onNext={() => {
                        handleNext();
                    }}
                />
            );
            break;
        case 6:
            currentStepComponent = (
                <Comment
                    key="comment"
                    onNext={() => {
                        handleNext();
                    }}
                />
            );
        case 7:
            currentStepComponent = (
                <DragBall
                    key="dragor"
                    onNext={() => {
                        handleNext();
                    }}
                    isDropped={props.isDropped}
                    isDragging={props.isDragging}
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
            {currentStepComponent}
            <button onClick={handleContinue}></button>
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
            {createPortal(
                <DragOverlay
                    dropAnimation={{
                        duration: 300,
                        easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
                    }}
                >
                    {props.activeId ? (
                        <Item
                            style={{ width: size + "px", height: size + "px", background: userData.color }}
                            value={`Item ${props.activeId}`}
                            klasse="rounded-full touch-none"
                        />
                    ) : null}
                </DragOverlay>,
                document.body
            )}
        </>
    );
};

export default StepOne;
