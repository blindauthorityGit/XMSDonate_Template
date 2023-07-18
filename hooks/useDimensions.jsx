import { useState, useEffect, useRef } from "react";

const useElementDimensions = () => {
    const elementRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (elementRef.current) {
                const { width, height } = elementRef.current.getBoundingClientRect();
                setDimensions({ width, height });
            }
        };

        // Initial dimensions update
        updateDimensions();

        // Event listener to update dimensions on window resize
        window.addEventListener("resize", updateDimensions);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    return { ref: elementRef, dimensions };
};

export default useElementDimensions;
