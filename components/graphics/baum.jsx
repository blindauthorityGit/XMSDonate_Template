import React from "react";
import Image from "next/image";

//COMPS
import { CoverImage } from "../images";

//ASSETS
import Baum from "../../assets/baum.svg";

const BoyWhiteGraphic = () => {
    return (
        <>
            <CoverImage
                src={Baum.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                className="z-10 xl:bottom-[100px] xl:right-[10%] xl:w-[617px] xl:h-[877px]"
            />
        </>
    );
};

export default BoyWhiteGraphic;
