import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";

//COPMPS
import { Full } from "../components/graphics";

// FX
import { Snow } from "../components/fx";
// ASSETS
import BG from "../assets/bg.svg";

export default function Home() {
    return (
        <MainContainer width="w-full">
            <Head>
                <title>Site title</title>
            </Head>
            <Snow />
            <div className="col-span-12 container mx-auto grid grid-cols-12 h-screen"></div>
            <Full />
        </MainContainer>
    );
}
