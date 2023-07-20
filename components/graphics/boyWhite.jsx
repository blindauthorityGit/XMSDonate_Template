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
                className="z-20 bottom-[23%] lg:top-auto left-[38%] xl:bottom-[100px] xl:left-[32%] w-[25vw] h-[auto] xl:w-[234px] xl:h-[367px]"
            />
        </>
    );
};

export default BoyWhiteGraphic;
