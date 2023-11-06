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
                height="268px" // Set the desired height of the background image
                width="122px"
                style={{ aspectRatio: "122 / 268" }}
                className="z-10 scale-in-center lg:bottom-[7%] xl:bottom-[60px] lg:left-[35%] xl:left-[36%] lg:w-[8vw] xl:w-[13vh] h-[auto]"
            />
        </>
    );
};

export default BoyWhiteGraphic;
