import React from "react";

//COMPS
import { CoverImage } from "../images";

//ASSETS
import Snowman from "../../assets/snowman.svg";

const SnowmanGraphic = () => {
    return (
        <>
            <CoverImage
                src={Snowman.src} // Replace with the actual path to your image
                mobileSrc={Snowman.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                className="z-20 top-[56%] right-[6%] lg:top-auto xl:bottom-[130px] xl:right-[34%] w-[113px] h-[131px] xl:w-[213px] xl:h-[317px]"
            />
        </>
    );
};

export default SnowmanGraphic;
