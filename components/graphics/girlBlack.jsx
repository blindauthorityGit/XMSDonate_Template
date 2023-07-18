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
                className="z-20 top-[55%] xl:top-auto xl:bottom-[130px] left-[10%] xl:left-[10%] w-[110px] h-[164px] xl:w-[213px] xl:h-[317px]"
            />
        </>
    );
};

export default GirlBlackGraphic;