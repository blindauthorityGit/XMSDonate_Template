import React, { useEffect, useState } from "react";

// COMPS
import { CoverImage } from "../images";

// ASSETS
import GirlBlack from "../../assets/girlBlack.svg";

//STORE
import useStore from "../../store/store"; // Import the zustand store

const GirlBlackGraphic = () => {
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

    // Render the component only if the window width is above 320px
    if (windowWidth <= 320) {
        return null; // Return null to render nothing
    }

    return (
        <>
            <CoverImage
                src={GirlBlack.src} // Replace with the actual path to your image
                mobileSrc={GirlBlack.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                style={{ aspectRatio: "179 / 286", zIndex: tooltipOpen ? 10 : null }}
                className="z-30 lg:z-[10] bottom-[28%] sm:bottom-[20%] lg:bottom-[5%] xl:top-auto xl:bottom-[5%] left-[10%] sm:left-[12%] lg:left-[10%] xl:left-[12%] w-[22vw] md:w-[18vw] lg:w-[10vw] h-auto xl:w-[19vh] xl:h-[auto]"
            />
        </>
    );
};

export default GirlBlackGraphic;
