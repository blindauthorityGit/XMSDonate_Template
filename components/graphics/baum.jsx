import React, { useRef, useEffect } from "react";
import Image from "next/image";

//COMPS
import { CoverImage } from "../images";

//ASSETS
import Baum from "../../assets/baum.svg";

//HOOKS
import useElementDimensions from "../../hooks/useDimensions";

// STATE
import useStore from "../../store/store";

const BaumGraphic = () => {
    const { ref, dimensions } = useElementDimensions();
    const setDimensions = useStore((state) => state.setDimensions);

    // Use useEffect to set the dimensions once they are available
    useEffect(() => {
        if (dimensions.width > 0 && dimensions.height > 0) {
            console.log(dimensions.width, dimensions.height);
            setDimensions(dimensions.width, dimensions.height);
        }
    }, [dimensions, setDimensions]);

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
                className="z-[-1]  top-0 w-[72vw] h-[auto] lg:w-[33vw] xl:h-[auto]"
                ref={ref}
                onLoadingComplete={(e) => {
                    console.log(e.clientWidth, e.clientHeight);
                    if (dimensions.width > 0 && dimensions.height > 0) {
                        console.log(dimensions.width, dimensions.height);
                        setDimensions(dimensions.width, dimensions.height);
                    }
                }}
            />
        </>
    );
};

export default BaumGraphic;
