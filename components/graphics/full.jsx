import React, { useEffect } from "react";
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
    const dimensions = useStore((state) => state.dimensions);

    useEffect(() => {
        console.log(dimensions, dimensions.height);
    }, [dimensions]);

    return (
        <div>
            <div className="absolute z-10 xl:z-30 top-[3%] lg:top-auto xl:bottom-[100px] left-1/2 lg:left-auto transform -translate-x-1/2 lg:-translate-x-0 xl:right-[10%] w-[72vw] h-[auto] xl:w-[617px] xl:h-[877px]">
                <div
                    className={`w-full`}
                    style={{ height: dimensions.height - dimensions.height * baumstumpfHeight + "px" }}
                >
                    <Raster></Raster>
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
