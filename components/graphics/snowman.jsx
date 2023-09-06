import React, { useEffect, useState } from "react";

// COMPS
import { CoverImage } from "../images";

// ASSETS
import Snowman from "../../assets/snowman.svg";
//STORE
import useStore from "../../store/store"; // Import the zustand store

const SnowmanGraphic = () => {
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
                src={Snowman.src} // Replace with the actual path to your image
                mobileSrc={Snowman.src} // Replace with the actual path to your image
                alt="Cover Background"
                position="absolute"
                height="251px" // Set the desired height of the background image
                width="169px"
                style={{ aspectRatio: "206 / 240", zIndex: tooltipOpen ? 10 : null }}
                className="z-30 lg:z-[20] top-[56%] sm:top-[auto] right-[6%] sm:right-[10%] lg:right-[35%] lg:top-auto sm:bottom-[23%] lg:bottom-[14%] xl:bottom-[130px] xl:right-[36%] w-[13vh] lg:w-[20vh] h-[auto] xl:w-[20vh] xl:h-[auto]"
            />
        </>
    );
};

export default SnowmanGraphic;
