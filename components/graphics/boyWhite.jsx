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
                className="z-20 top-[58%] lg:top-auto left-[38%] xl:bottom-[100px] xl:left-[32%] w-[126px] h-[198px] xl:w-[234px] xl:h-[367px]"
            />
        </>
    );
};

export default BoyWhiteGraphic;
