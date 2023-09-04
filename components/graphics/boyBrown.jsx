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
                style={{ aspectRatio: "250 / 314" }}
                className="z-10 scale-in-center lg:bottom-[7%] xl:bottom-[100px] lg:left-[42%] xl:left-[43%] lg:w-[12vw] xl:w-[19vh] h-[auto]"
            />
        </>
    );
};

export default BoyWhiteGraphic;
