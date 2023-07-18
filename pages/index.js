import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";

//COPMPS
import { Full } from "../components/graphics";
import { StartText } from "../components/text";
import { StartFloaterFull } from "../components/floater";
import Goal from "../components/goal";

//DEV
import { TestData } from "../config/testData";

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
            {/* // FLOAT BUTTONS */}
            <StartFloaterFull></StartFloaterFull>
            <div className="col-span-12 container mx-auto grid grid-cols-12 h-screen z-30 px-8 lg:px-0">
                <div className="col-span-12 lg:col-span-5 min-h-screen flex flex-col pt-[10%] relative">
                    <Goal
                        data={TestData}
                        klasse="w-full lg:mb-36 absolute lg:relative bottom-32 lg:bottom-auto lg:top-0"
                    ></Goal>
                    <StartText />
                </div>
            </div>
            {/* // GRAPHICS */}
            <Full />
        </MainContainer>
    );
}
