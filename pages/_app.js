import "../styles/globals.css";
import "../styles/animations.css";

import { useEffect, useState } from "react";
import LoadingScreen from "../components/loading";
import Overlay from "../components/overlay";

//STORE
import useStore from "../store/store"; // Import the zustand store

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    //GLOBAL OVERLAY STATE
    const showOverlay = useStore((state) => state.showOverlay);
    const setShowOverlay = useStore((state) => state.setShowOverlay);

    //GLOBAL MODAL STATE
    const closeModal = useStore((state) => state.closeModal);

    //GLOBAL UNCLAIMED STATE
    const setShowUnclaimed = useStore((state) => state.setShowUnclaimed);

    // Function to handle overlay click
    const handleOverlayClick = () => {
        setShowOverlay(false);
        closeModal();
        setShowUnclaimed(false);
    };

    useEffect(() => {
        const startTime = performance.now();

        window.onload = () => {
            const endTime = performance.now();
            const loadingTime = endTime - startTime;
            console.log(`Site loaded in ${loadingTime} milliseconds.`);
            setLoading(false);
        };
    });
    return (
        <>
            {/* ...other components */}
            {showOverlay && <Overlay onClick={handleOverlayClick} />} {/* Render the overlay if showOverlay is true */}
            <Component {...pageProps} setShowOverlay={setShowOverlay} /> {/* Pass setShowOverlay to child components */}
        </>
    );
}

export default MyApp;
