import React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import FloaterButton from "./floatButton";
// ICONS
import { BsFillPeopleFill, BsFillInfoCircleFill } from "react-icons/bs";

const StartFloaterFull = () => {

    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };

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
