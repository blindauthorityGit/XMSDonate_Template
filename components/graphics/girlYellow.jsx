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
                className="z-10 xl:bottom-[100px] xl:left-[20%] xl:w-[246px] xl:h-[326px]"
            />
        </>
    );
};

export default GirlYellowGraphic;
