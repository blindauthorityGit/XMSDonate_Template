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

    // useEffect(() => {
    //     if (ref.current) {
    //         console.log(dimensions);
    //         setDimensions(dimensions.width, dimensions.height);
    //     }
    // }, [ref.current]);

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
                className="xl:z-30  top-0 w-[80vw] h-[auto] xl:w-[617px] xl:h-[877px]"
                ref={ref}
                onLoadingComplete={(e) => {
                    console.log(e.clientWidth, e.clientHeight);
                    setDimensions(dimensions.width, dimensions.height);
                }}
            />
        </>
    );
};

export default BaumGraphic;
