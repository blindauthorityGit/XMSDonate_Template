import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Head from "next/head";
import MainContainer from "../components/layout/mainContainer";

//COPMPS
// import { Full } from "../components/graphics";
const Full = dynamic(() => import("../components/graphics/full"), {
    ssr: false,
});
import { StartText } from "../components/text";
import { StartFloaterFull } from "../components/floater";
import Goal from "../components/goal";
import { ModalOne, ModalSidebar } from "../components/modal";
import DonatorList from "../components/modalContent/donatorList/donatorList";
import { Desktop } from "../components/modalContent/donation";

//DND STUFF
import { DndContext, closestCenter } from "@dnd-kit/core";

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

    //GLOBAL USER DATA
    const userData = useStore((state) => state.userData);
    const setUserData = useStore((state) => state.setUserData);

    //MODAL
    const isModalOpen = useStore((state) => state.isModalOpen);
    const modalPosition = useStore((state) => state.modalPosition);
    const closeModal = useStore((state) => state.closeModal);
    //SIDEBAR
    const isSidebarOpen = useStore((state) => state.isSidebarOpen);
    const setSidebarOpen = useStore((state) => state.setSidebarOpen);
    //OVERLAY
    const setShowOverlay = useStore((state) => state.setShowOverlay);
    //UNCLAIMED
    const setShowUnclaimed = useStore((state) => state.setShowUnclaimed);

    //DND STUFF
    function droppedZone(id, state) {
        const elem = document.getElementById(id);
        if (state) {
            elem.classList.remove("opacity-30");
            elem.classList.add("opacity-100");
        }
    }
    const [parent, setParent] = useState(null);
    const [isDropped, setIsDropped] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const [activeId, setActiveId] = useState(null);

    function handleDragStart(event) {
        console.log(event.active.id);
        setActiveId(event.active.id);
        setIsDragging(true);
        setIsDropped(false);
    }

    function handleDragEnd(event) {
        const { over } = event;
        console.log(over);
        // If the item is dropped over a container, set it as the parent
        // otherwise reset the parent to `null`
        setParent(over ? over.id : null);
        setActiveId(null);
        setIsDropped(over ? true : false);
        setIsDragging(false);
        droppedZone(over.id);
        console.log(over.id);
        setUserData({
            ...userData,
            id: over ? over.id : null,
            // winner: Array.from(document.querySelectorAll(".kugel"))[over.id].dataset.iswinner == "true" ? true : false,
        });
    }

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
            <StartFloaterFull
                onClickPeople={() => {
                    setSidebarOpen(true);
                    setShowOverlay(true);
                    console.log("BUBUBU");
                }}
            ></StartFloaterFull>
            <DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
                    >
                        <Desktop activeId={activeId} isDropped={isDropped} isDragging={isDragging} />
                    </ModalOne>
                )}
                {isSidebarOpen && (
                    <ModalSidebar
                        isOpen={isModalOpen}
                        onClose={() => {
                            setSidebarOpen(false);
                            setShowOverlay(false);
                            setShowUnclaimed(false);
                        }}
                    >
                        <DonatorList></DonatorList>
                    </ModalSidebar>
                )}
                <div className="col-span-12 container mx-auto grid grid-cols-12 min-h-screen z-20 px-8 lg:px-0">
                    <div className="col-span-12 lg:col-span-5 min-h-screen flex flex-col pt-[10%] relative overflow-hidden">
                        <Goal
                            data={TestData}
                            klasse="w-full lg:mb-20 xl:mb-36 absolute lg:relative bottom-32 lg:bottom-auto lg:top-0"
                        ></Goal>
                        <StartText />
                    </div>
                </div>
                {/* // GRAPHICS */}
                <Full parent={parent} />
            </DndContext>
        </MainContainer>
    );
}
