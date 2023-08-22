import React from "react";
import Image from "next/image";

//COMPS
import { CoverImage } from "../images";

//ASSETS
import BoyWhite from "../../assets/boyWhite.svg";

const BoyWhiteGraphic = () => {
    return (
        <>
            <CoverImage
                src={BoyWhite.src} // Replace with the actual path to your image
                mobileSrc={BoyWhite.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                style={{ aspectRatio: "126 / 198" }}
                className="z-30 lg:z-[10] bottom-[23%] sm:bottom-[16%] lg:bottom-[9%] lg:top-auto left-[38%] sm:left-[40%] lg:left-[32%] xl:bottom-[100px] xl:left-[33%] w-[25vw] md:w-[20vw] lg:w-[12vw] h-[auto] xl:w-[18vh]"
            />
        </>
    );
};

export default BoyWhiteGraphic;
