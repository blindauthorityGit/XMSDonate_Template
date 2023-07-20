import { useState, useEffect } from "react";
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
import { ModalOne } from "../components/modal";

//DEV
import { TestData } from "../config/testData";

// FX
import { Snow } from "../components/fx";

// ASSETS
import BG from "../assets/bg.svg";

//STORE
import useStore from "../store/store"; // Import the zustand store

export default function Home() {
    const userList = useStore((state) => state.userList);
    const setUserList = useStore((state) => state.setUserList);

    //MODAL
    const isModalOpen = useStore((state) => state.isModalOpen);
    const modalPosition = useStore((state) => state.modalPosition);
    const closeModal = useStore((state) => state.closeModal);
    //OVERLAY
    const setShowOverlay = useStore((state) => state.setShowOverlay);
    //UNCLAIMED
    const setShowUnclaimed = useStore((state) => state.setShowUnclaimed);

    useEffect(() => {
        setUserList(TestData);
    }, []);

    return (
        <MainContainer width="w-full">
            <Head>
                <title>Site title</title>
            </Head>
            <Snow />
            {/* // FLOAT BUTTONS */}
            <StartFloaterFull></StartFloaterFull>
            {isModalOpen && (
                <ModalOne
                    isOpen={isModalOpen}
                    onClose={() => {
                        closeModal();
                        setShowOverlay(false);
                        setShowUnclaimed(false);
                    }}
                    x={modalPosition.x}
                    y={modalPosition.y}
                />
            )}
            <div className="col-span-12 container mx-auto grid grid-cols-12 h-screen z-20 px-8 lg:px-0">
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
