import React from "react";
import Image from "next/image";

//COMPS
import { CoverImage } from "../images";

//ASSETS
import Baum from "../../assets/baum.svg";

const BaumGraphic = () => {
    return (
        <>
            <CoverImage
                src={Baum.src} // Replace with the actual path to your image
                mobileSrc={Baum.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                style={{ aspectRatio: "618 / 877" }}
                className="z-20 xl:z-30 top-[3%] lg:top-auto xl:bottom-[100px] left-1/2 lg:left-auto transform -translate-x-1/2 lg:-translate-x-0 xl:right-[10%] w-[80vw] h-[auto] xl:w-[617px] xl:h-[877px]"
            />
        </>
    );
};

export default BaumGraphic;
