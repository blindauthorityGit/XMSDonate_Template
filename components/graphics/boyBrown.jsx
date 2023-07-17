import React from "react";
import Image from "next/image";

//COMPS
import { CoverImage } from "../images";

//ASSETS
import BoyBrown from "../../assets/boyBrown.svg";

const BoyWhiteGraphic = () => {
    return (
        <>
            <CoverImage
                src={BoyBrown.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                className="z-10 xl:bottom-[100px] xl:left-[42%] xl:w-[250px] xl:h-[314px]"
            />
        </>
    );
};

export default BoyWhiteGraphic;
