import React from "react";
import Image from "next/image";

//COMPS
import { CoverImage } from "../images";

//ASSETS
import GirlBlack from "../../assets/girlBlack.svg";

const GirlBlackGraphic = () => {
    return (
        <>
            <CoverImage
                src={GirlBlack.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                className="z-10 xl:bottom-[130px] xl:left-[10%] xl:w-[213px] xl:h-[317px]"
            />
        </>
    );
};

export default GirlBlackGraphic;
