import React from "react";
import Image from "next/image";

//ASSETS
import BG from "../../assets/bg.svg";

const BGDesktop = () => {
    return <Image src={BG.src} alt={"Hintergund"} layout="fill" objectFit="cover" quality={100} />;
};

export default BGDesktop;
