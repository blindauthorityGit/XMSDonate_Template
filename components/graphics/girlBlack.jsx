import React from "react";

//COMPS
import { CoverImage } from "../images";

//ASSETS
import GirlBlack from "../../assets/girlBlack.svg";

const GirlBlackGraphic = () => {
    return (
        <>
            <CoverImage
                src={GirlBlack.src} // Replace with the actual path to your image
                mobileSrc={GirlBlack.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                style={{ aspectRatio: "110 / 164" }}
                className="z-30 lg:z-[10] bottom-[28%] sm:bottom-[20%] lg:bottom-[8%] xl:top-auto xl:bottom-[12%] left-[10%] sm:left-[12%] lg:left-[10%] xl:left-[12%] w-[22vw] md:w-[18vw] lg:w-[10vw] h-auto xl:w-[18vh] xl:h-[auto]"
            />
        </>
    );
};

export default GirlBlackGraphic;
