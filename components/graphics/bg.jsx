import React from "react";
import Image from "next/image";
//COMPS
import { CoverImage } from "../images";

//ASSETS
import BG from "../../assets/bg.svg";
import Top from "../../assets/top.svg";
import BGMobile from "../../assets/bgMobile.svg";

const BGDesktop = () => {
    return (
        <>
            <CoverImage
                src={Top.src} // Replace with the actual path to your image
                mobileSrc={Top.src}
                alt="Cover Background"
            />
            <CoverImage
                src={BG.src} // Replace with the actual path to your image
                mobileSrc={BGMobile.src}
                alt="Cover Background"
            />
        </>
    );
};

export default BGDesktop;
