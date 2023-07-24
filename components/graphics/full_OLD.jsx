import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";

//COMPS
import BGDesktop from "./bg";
import GirlBlackGraphic from "./girlBlack";
import GirlYellowGraphic from "./girlYellow";
import BoyWhiteGraphic from "./boyWhite";
import BoyBrownGraphic from "./boyBrown";
import SnowmanGraphic from "./snowman";
import Baum from "./baum";
import { Raster } from "../raster";
// const { Raster } = dynamic(() => import("../raster"), {
//     ssr: false,
// });

//STATE
import useStore from "../../store/store"; // Import the same store from the previous example

// DEV
import { baumstumpfHeight } from "../../config";

const Full = () => {
    //GLOBAL DIMENSIONS STATE
    const dimensions = useStore((state) => state.dimensions);
    const setDimensions = useStore((state) => state.setDimensions);

    //GLOBAL TZREE ANIMATION STATE
    const treeAnimationFinished = useStore((state) => state.treeAnimationFinished);
    const setTreeAnimationFinished = useStore((state) => state.setTreeAnimationFinished);

    const aspectRatioRef = useRef(null);
    const aspectRatioRef2 = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        console.log(dimensions, dimensions.height);
    }, [dimensions]);

    // Use useEffect to trigger the entry animation once the component mounts
    useEffect(() => {
        controls
            .start({
                y: 0, // Initial position (off-screen)
                opacity: 1, // Initial opacity
                scale: 1, // Initial scale
                transition: {
                    type: "spring", // Animation type
                    stiffness: 800, // Control the "bounciness"
                    damping: 45, // Control the oscillations
                    duration: 1,
                    delay: 2,
                },
            })
            .then(() => {
                // Animation is completed, update the dimensions in the global state
                const boundingBox = aspectRatioRef.current.getBoundingClientRect();
                setDimensions(boundingBox.width, boundingBox.height);
                setTreeAnimationFinished(true); // Set treeAnimationFinished to true
            });
    }, [controls, setDimensions, setTreeAnimationFinished]);

    return (
        <div>
            <motion.div
                ref={aspectRatioRef}
                style={{ aspectRatio: "618 / 877" }}
                initial={{ y: 0, opacity: 1, scale: 0 }}
                animate={controls}
                className="absolute hidden lg:block z-10 xl:z-30 top-[3%] lg:top-auto xl:bottom-[100px] left-1/2 lg:left-auto transform -translate-x-1/2 lg:-translate-x-0 xl:right-[10%] w-[72vw] h-[auto] xl:w-[32vw] xl:h-[auto]"
            >
                <div
                    className={`w-full xl:pl-8`}
                    style={{ height: dimensions.height - dimensions.height * baumstumpfHeight + "px" }}
                >
                    <Raster />
                </div>

                {/* BaumGraphic component */}
                <Baum />
            </motion.div>
            <div
                ref={aspectRatioRef2}
                style={{ aspectRatio: "618 / 877" }}
                className="absolute block lg:hidden z-10 xl:z-30 top-[3%] lg:top-auto xl:bottom-[100px] left-1/2 lg:left-auto transform -translate-x-1/2 lg:-translate-x-0 xl:right-[10%] w-[72vw] h-[auto] xl:w-[32vw] xl:h-[auto]"
            >
                <div
                    className={`w-full xl:pl-8`}
                    style={{ height: dimensions.height - dimensions.height * baumstumpfHeight + "px" }}
                >
                    <Raster />
                </div>

                {/* BaumGraphic component */}
                <Baum />
            </div>
            <SnowmanGraphic />
            <BoyBrownGraphic />
            <BoyWhiteGraphic />
            <GirlYellowGraphic />
            <GirlBlackGraphic />
            <BGDesktop />
        </div>
    );
};

export default Full;
