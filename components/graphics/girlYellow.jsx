import React from "react";
import Image from "next/image";

//COMPS
import { CoverImage } from "../images";

//ASSETS
import GirlYellow from "../../assets/girlYellow.svg";

const GirlYellowGraphic = () => {
    return (
        <>
            <CoverImage
                src={GirlYellow.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                style={{ aspectRatio: "246 / 323" }}
                className="z-10 lg:bottom-[7%] xl:bottom-[100px] lg:left-[20%] xl:left-[22%]  lg:w-[12vw] xl:w-[19vh] h-[auto]"
            />
        </>
    );
};

export default GirlYellowGraphic;
