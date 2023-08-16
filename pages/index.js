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
const OnBoardModal = dynamic(() => import("../components/modal/onBoardModal"), {
    ssr: false,
});
import DonatorList from "../components/modalContent/donatorList/donatorList";
import OnboardingContent from "../components/modalContent/onboarding";
import Info from "../components/modalContent/info";
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

    //MODAL COMPONENT
    const onBoarding = useStore((state) => state.onBoarding); // Get the onBoarding state
    const setOnBoarding = useStore((state) => state.setOnBoarding); // Get the setter function

    const [activeComponent, setActiveComponent] = useState(null);
    // const [onBoarding, setOnboarding] = useState(true);

    const handleToggleComponent = (componentName) => {
        setActiveComponent(componentName);
    };

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
            claimed: true,
            // winner: Array.from(document.querySelectorAll(".kugel"))[over.id].dataset.iswinner == "true" ? true : false,
        });
    }

    useEffect(() => {
        setUserList(TestData);
        setShowOverlay(true);
    }, []);

    useEffect(() => {
        console.log(userList);
    }, [userList]);

    return (
        <>
            {" "}
            {onBoarding ? (
                <>
                    <OnBoardModal
                        isOpen={onBoarding}
                        onClose={() => {
                            setOnBoarding(false);
                            setShowOverlay(false);
                            setShowUnclaimed(false);
                        }}
                    >
                        <OnboardingContent
                            onClose={() => {
                                setOnBoarding(false);
                                setShowOverlay(false);
                                setShowUnclaimed(false);
                            }}
                        />
                    </OnBoardModal>{" "}
                </>
            ) : null}
            <MainContainer width="w-full h-full min-h-[100svh] relative">
                <Head>
                    <title>Site title</title>
                </Head>
                <Snow />
                {/* // FLOAT BUTTONS */}

                <StartFloaterFull
                    onClickPeople={() => {
                        setSidebarOpen(true);
                        setShowOverlay(true);
                        handleToggleComponent("donorList");
                        console.log("BUBUBU");
                    }}
                    onClickInfo={() => {
                        setSidebarOpen(true);
                        setShowOverlay(true);
                        handleToggleComponent("info");
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
                            {activeComponent === "info" && <Info />}
                            {activeComponent === "donorList" && <DonatorList />}
                        </ModalSidebar>
                    )}
                    <div className="col-span-12 container mx-auto grid grid-cols-12 min-h-[100svh] z-20 px-8 lg:px-0">
                        <div className="col-span-12 lg:col-span-5 h-full  flex flex-col pt-[10%] relative overflow-hidden">
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
        </>
    );
}
