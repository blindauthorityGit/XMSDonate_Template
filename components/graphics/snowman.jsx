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
                style={{ aspectRatio: "206 / 240" }}
                className="z-20 top-[56%] right-[6%] lg:right-[35%] lg:top-auto lg:bottom-[14%] xl:bottom-[130px] xl:right-[34%] w-[13vh] h-[auto] xl:w-[213px] xl:h-[auto]"
            />
        </>
    );
};

export default SnowmanGraphic;
