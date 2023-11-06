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
                mobileSrc={GirlYellow.src}
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                style={{ aspectRatio: "220 / 268" }}
                className="z-30 bottom-[27%] left-[66%] w-[25vw] lg:bottom-[9%] xl:bottom-[100px] lg:left-[22%] xl:left-[23%]  lg:w-[12vw] xl:w-[22vh] h-[auto]"
            />
        </>
    );
};

export default GirlYellowGraphic;
