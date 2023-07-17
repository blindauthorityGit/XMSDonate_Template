import "../styles/globals.css";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/loading";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const startTime = performance.now();

        window.onload = () => {
            const endTime = performance.now();
            const loadingTime = endTime - startTime;
            console.log(`Site loaded in ${loadingTime} milliseconds.`);
            setLoading(false);
        };
    });

    return <Component {...pageProps} />;
}

export default MyApp;
