import React from "react";
import FloaterButton from "./floatButton";
// ICONS
import { BsFillPeopleFill, BsFillInfoCircleFill } from "react-icons/bs";

const StartFloaterFull = () => {
    return (
        <div className="absolute z-10 right-0 top-8">
            <FloaterButton klasse="flex justify-center items-center mb-2">
                <BsFillPeopleFill />
            </FloaterButton>
            <FloaterButton klasse="flex justify-center items-center">
                <BsFillInfoCircleFill />
            </FloaterButton>
        </div>
    );
};

export default StartFloaterFull;
