import React, { useState, useEffect, useRef } from "react";
import { isBrowser, isMobile } from "react-device-detect";

//COMPS
import BGDesktop from "./bg";
import GirlBlackGraphic from "./girlBlack";
import GirlYellowGraphic from "./girlYellow";
import BoyWhiteGraphic from "./boyWhite";
import BoyBrownGraphic from "./boyBrown";
import SnowmanGraphic from "./snowman";
import Baum from "./baum";
import { Raster } from "../raster";

//FUNCTIONS
import animateWithClass from "../../functions/animateWithClass";

//STATE
import useStore from "../../store/store"; // Import the same store from the previous example

// DEV
import { baumstumpfHeight } from "../../config";

const Full = (props) => {
    const dimensions = useStore((state) => state.dimensions);
    //GLOBAL ANIMATION TREE STATE
    const animateTree = useStore((state) => state.animateTree);
    const setAnimateTree = useStore((state) => state.setAnimateTree);

    //ANIMATION TRACKER
    const swipeCount = useStore((state) => state.swipeCount);
    //ONBOARDING TRACKER
    const onBoarding = useStore((state) => state.onBoarding);
    //SUCCESS TRACKER
    const showSuccess = useStore((state) => state.showSuccess);

    //BAUMREF
    const ref = useRef();

    // useEffect(() => {
    //     animateWithClass(ref.current, animateTree == "right" ? "slide-out-right" : "slide-out-left");
    // }, [animateTree, swipeCount]);

    return (
        <div>
            <div
                // ref={aspectRatioRef}
                style={{ aspectRatio: "618 / 877" }}
                className={`absolute  lg:block z-30 ${
                    onBoarding || showSuccess ? "lg:z-20" : "lg:z-30"
                } top-[3%] lg:top-[7%] xl:top-[auto] xl:bottom-[100px] left-1/2 lg:left-auto transform -translate-x-1/2 lg:-translate-x-0 lg:right-[10%] 2xl:right-[13%] w-[72vw] sm:w-[60vw] h-[auto] lg:w-[32vw] xl:h-[auto] 2xl:w-[58vh] 3xl:w-[40vw]`}
            >
                {" "}
                <div
                    ref={ref}
                    className={`w-full lg:pl-6 xl:pl-6`}
                    style={{ height: dimensions.height - dimensions.height * baumstumpfHeight + "px" }}
                >
                    <Raster parent={props.parent}></Raster>
                </div>
                <Baum />
            </div>
            {/* <SnowmanGraphic /> */}
            <BoyBrownGraphic />
            <BoyWhiteGraphic />
            <GirlYellowGraphic />
            <GirlBlackGraphic />
            <BGDesktop />
        </div>
    );
};

export default Full;
