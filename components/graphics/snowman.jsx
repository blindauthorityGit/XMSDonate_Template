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
                className="z-30 lg:z-[20] top-[56%] sm:top-[auto] right-[6%] sm:right-[10%] lg:right-[35%] lg:top-auto sm:bottom-[23%] lg:bottom-[14%] xl:bottom-[130px] xl:right-[36%] w-[13vh] lg:w-[20vh] h-[auto] xl:w-[20vh] xl:h-[auto]"
            />
        </>
    );
};

export default SnowmanGraphic;
