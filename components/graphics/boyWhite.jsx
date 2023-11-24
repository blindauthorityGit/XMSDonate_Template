import React, { useEffect, useState } from "react";
import Image from "next/image";

// COMPS
import { CoverImage } from "../images";

// ASSETS
import BoyWhite from "../../assets/boyWhite.svg";

//STORE
import useStore from "../../store/store"; // Import the zustand store

const BoyWhiteGraphic = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    //TOOLTIP OPEN FLAG FOR ZINDEX OF GRAPHICS
    const tooltipOpen = useStore((state) => state.tooltipOpen);

    useEffect(() => {
        // Update the window width when the component mounts
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Attach the event listener
        window.addEventListener("resize", handleResize);

        // Call the handleResize function initially to set the initial window width
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(tooltipOpen);
    }, [tooltipOpen]);

    // Render the component only if the window width is above 320px
    if (windowWidth <= 320) {
        return null; // Return null to render nothing
    }

    return (
        <>
            <CoverImage
                src={BoyWhite.src} // Replace with the actual path to your image
                mobileSrc={BoyWhite.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                style={{ aspectRatio: "213 / 284", zIndex: tooltipOpen ? 10 : null }}
                className="z-30 lg:z-[10] bottom-[23%] sm:bottom-[16%] lg:bottom-[9%] lg:top-auto left-[38%] sm:left-[40%] lg:left-[44%] xl:bottom-[110px] xl:left-[44%] w-[25vw] md:w-[20vw] lg:w-[auto] lg:h-[25vh] h-auto xl:w-[auto] xl:h-[25vh] h-[auto] "
            />
        </>
    );
};

export default BoyWhiteGraphic;
