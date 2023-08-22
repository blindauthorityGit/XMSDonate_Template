import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

//COMPS
import Row from "./row";
const Kugel = dynamic(() => import("./kugel"), {
    ssr: false,
});
// CONFIG
import { anzahlRows, dev, anzahlBaumKugeln, bgColors } from "../../config";

//STORE
import useStore from "../../store/store"; // Import the zustand store

//HOOKS | FUNCTIONS
import { isMobile } from "react-device-detect";
import getIndex from "../../functions/getIndex";

//DND STUFF
import Draggable from "../dragNDrop/draggable";

// SWIPER STUFF
import { useSwipeable } from "react-swipeable";

// ICONS
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Raster = (props) => {
    //GLOBAL USER DATA STATE
    const userData = useStore((state) => state.userData);

    //CONTAINER REF
    const allRef = useRef();

    // MULTI TREES
    const [ballsPerTree, setBallsPerTree] = useState(anzahlBaumKugeln);
    const [treeAnzahl, setTreeAnzahl] = useState(0);
    const [currentTree, setCurrentTree] = useState(0);

    // FLAG FOR TREE CHANGE / ANIMATIONEND
    const [freeTree, setFreeTree] = useState(true);

    const [masterCounter, setMasterCounter] = useState(0);
    let counter = masterCounter;

    //GLOBAL UNCLAIMED STATE
    const showUnclaimed = useStore((state) => state.showUnclaimed);
    const setShowUnclaimed = useStore((state) => state.setShowUnclaimed);

    //GLOBAL USERLIST STATE
    const userList = useStore((state) => state.userList);

    // SET ROW COUNT
    const rowCount = Array(anzahlRows).fill("");

    // WIDTH OF BALLS
    const [kugelWidth, setKugelWidth] = useState(50);

    // SWIPE STUFF
    const handlers = useSwipeable({
        onSwiped: (eventData) => console.log("User Swiped!", eventData),
    });

    useEffect(() => {
        console.log("Counter: ", ballsPerTree * (treeAnzahl - 1));
        console.log("currentTree: ", currentTree);
        setMasterCounter(ballsPerTree * currentTree);
    }, [ballsPerTree, treeAnzahl, currentTree]);

    useEffect(() => {
        // SET TREE NUMBER
        setTreeAnzahl(Math.ceil((userList.length + 1) / ballsPerTree));
        setCurrentTree(Math.ceil((userList.length + 1) / ballsPerTree) - 1);
        console.log("Tree Anzahl: ", Math.ceil((userList.length + 1) / ballsPerTree));
        console.log("Current Tree: ", Math.ceil((userList.length + 1) / ballsPerTree));
    }, []);

    // OPACITY CHECK DROPZONE WHEN DROPPED
    useEffect(() => {
        let check = false;
        if (props.parent) {
            console.log(props.parent, "PARENT CHECK");
            check = true;
        }
        if (check) {
            let arr = Array.from(allRef.current.querySelectorAll(".kugel"));
            arr.map((e, i) => {
                if (i === props.parent) {
                    console.log("ISISISISIS", e, userData);
                    e.classList.remove("opacity-50");
                    e.classList.add("opacity-100");
                    e.classList.add("outline", "outline-offset-2", "outline-white");
                } else {
                    e.classList.remove("opacity-100");
                }
            });
        }
    }, [props.parent]);

    //TREE CHANGER FUNCTION
    function treeChanger(pos) {
        if (freeTree) {
            if (pos == "true") {
                if (currentTree < treeAnzahl - 1) {
                    setCurrentTree(currentTree + 1);
                    setMasterCounter(masterCounter + -ballsPerTree);
                    // treeBG();
                }
            } else {
                if (currentTree != 0) {
                    setCurrentTree(currentTree - 1);

                    setMasterCounter(masterCounter - ballsPerTree);
                    // treeBG();
                }
            }
        } else {
            console.log("BLOOOCKED");
        }
        setFreeTree(false);
        setTimeout(() => {
            setFreeTree(true);
        }, 800);

        console.log("Tree change", currentTree);
    }

    return (
        <>
            {" "}
            {treeAnzahl > 1 && (
                <>
                    <div
                        className={`absolute text-4xl md:text-6xl top-[45%] left-[-10%] z-40 ${
                            currentTree == 0 ? "opacity-20" : ""
                        }`}
                        onClick={() => {
                            treeChanger("false");
                        }}
                    >
                        <FaChevronCircleLeft></FaChevronCircleLeft>
                    </div>
                    <div
                        className={`absolute  text-4xl md:text-6xl  z-40 top-[45%] right-[-10%] ${
                            currentTree == treeAnzahl - 1 ? "opacity-20" : ""
                        }`}
                        onClick={() => {
                            treeChanger("true");
                        }}
                    >
                        <FaChevronCircleRight></FaChevronCircleRight>
                    </div>
                </>
            )}
            <div className="h-full" ref={allRef}>
                {rowCount.map((e, i) => {
                    let kugelCount = [];
                    if (i > 4 && i < 8) {
                        kugelCount = Array(i + -1).fill("");
                    } else if (i >= 8) {
                        kugelCount = Array(i - 3).fill("");
                    } else {
                        kugelCount = Array(i + 1).fill("");
                    }

                    return (
                        <Row
                            key={i + "nene"}
                            klasse={`h-[${100 / anzahlRows}%] relative `}
                            style={{ height: 100 / anzahlRows + "%" }}
                        >
                            {kugelCount.map((e, i) => {
                                counter = counter + 1;
                                //CHECK IF BALL IS CLAIMED OR NOT
                                let claimed = userList.some((e) => e.id === counter - 1);
                                return (
                                    <Kugel
                                        key={i + "kugel"}
                                        size={`h-[100%] ${
                                            showUnclaimed && !claimed
                                                ? "opacity-50 bg-transparent"
                                                : claimed
                                                ? "opacity-100"
                                                : "opacity-0 scale-out-center"
                                        } ${
                                            claimed
                                                ? "shadow-md shine"
                                                : `border-2 sm:border-4 border-white border-dotted ${
                                                      showUnclaimed ? "scale-in-center" : null
                                                  }`
                                        }`}
                                        onAnimationEnd={(e) => {
                                            e.target.classList.remove("scale-in-center");
                                        }}
                                        color={
                                            userList.some((e) => e.id === counter - 1)
                                                ? `bg-[${userList[getIndex(userList, counter - 1)].color}]`
                                                : null
                                        }
                                        textColor={
                                            userList.some((e) => e.id === counter - 1)
                                                ? userList[getIndex(userList, counter - 1)].color.toLowerCase() ===
                                                      "rgb(255, 255, 255)" ||
                                                  userList[getIndex(userList, counter - 1)].color.toLowerCase() ===
                                                      "rgb(220, 224, 0)"
                                                    ? "text-black"
                                                    : "text-white"
                                                : ""
                                        }
                                        isAnon={
                                            userList.some((e) => e.id === counter - 1) &&
                                            userList[getIndex(userList, counter - 1)].anon
                                        }
                                        avatrSrc={
                                            userList.some((e) => e.id === counter - 1)
                                                ? userList[getIndex(userList, counter - 1)].image
                                                : null
                                        }
                                        // onClickAvatar={(e) => {
                                        //     console.log(e);
                                        // }}
                                        id={counter - 1}
                                        isClaimed={userList.some((e) => e.id === counter - 1) ? "true" : "false"}
                                        disabled={userList.some((e) => e.id === counter - 1) ? true : false}
                                        style={{
                                            // width: kugelWidth,
                                            background: userList.some((e) => e.id === counter - 1)
                                                ? userList[getIndex(userList, counter - 1)].color
                                                : null,
                                            aspectRatio: "1 / 1",
                                        }}
                                        // animate={animator}
                                        onMouseEnter={(e) => {
                                            if (e.currentTarget.children[0].classList.contains("draggable")) {
                                                e.currentTarget.children[1].style.transform = "scale(0.8)";
                                                e.currentTarget.children[1].classList.remove("hidden");
                                                e.currentTarget.children[1].classList.add("scale-in-hor-right");
                                            }
                                            if (e.target.classList.contains("claimedKugel")) {
                                                // e.target.classList.add("pulsate-bck");
                                                e.target.style.border = "3px solid white";
                                                e.target.children[1].style.transform = "scale(0.8)";
                                                e.target.children[1].classList.remove("hidden");
                                                e.target.children[1].classList.add(
                                                    isMobile ? "scale-in-top" : "scale-in-top"
                                                );
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (e.currentTarget.children[0].classList.contains("draggable")) {
                                                e.currentTarget.children[1].classList.remove("block");
                                                e.currentTarget.children[1].classList.add("hidden");
                                            }
                                            if (e.target.classList.contains("claimedKugel")) {
                                                e.target.style.border = "";

                                                // e.target.classList.remove("pulsate-bck");
                                                e.target.children[1].classList.remove("block");
                                                e.target.children[1].classList.add("hidden");
                                            }
                                        }}
                                        toolTiponMouseLeave={(e) => {
                                            e.target.classList.remove("block");
                                            e.target.classList.add("hidden");
                                            if (e.target.parentNode.classList.contains("claimedKugel")) {
                                                e.target.parentNode.style.border = "";
                                            }
                                        }}
                                        klasse={userList.some((e) => e.id === counter - 1) ? "claimedKugel" : null}
                                        toolTipStyle={{
                                            top: isMobile ? kugelWidth - 10 + "px" : kugelWidth + 16 + "px",
                                            background: userList.some((e) => e.id === counter - 1)
                                                ? userList[getIndex(userList, counter - 1)].color.toLowerCase()
                                                : "",
                                        }}
                                        toolTipColor={
                                            userList.some((e) => e.id === counter - 1)
                                                ? userList[getIndex(userList, counter - 1)].color.toLowerCase() ===
                                                      "rgb(255, 255, 255)" ||
                                                  userList[getIndex(userList, counter - 1)].color === "#FFF200" ||
                                                  userList[getIndex(userList, counter - 1)].color.toLowerCase() ===
                                                      "rgb(255, 242, 0)"
                                                    ? "text-black"
                                                    : "text-white"
                                                : ""
                                        }
                                        // name={
                                        //     userList.some((e) => e.id === counter - 1)
                                        //         ? userList[getIndex(userList, counter - 1)].name
                                        //               .split(" ")
                                        //               .map((n) => n[0])
                                        //               .join(".")
                                        //         : ""
                                        // }
                                        abstand={kugelWidth}
                                        // check ob Index in dem Kunden Array vorhanden ist
                                        fullName={
                                            userList.some((e) => e.id === counter - 1)
                                                ? userList[getIndex(userList, counter - 1)].anon
                                                    ? "Anonyme Spende"
                                                    : userList[getIndex(userList, counter - 1)].name
                                                : "KEIN NAME"
                                        }
                                        toolTipBG={
                                            userList.some((e) => e.id === counter - 1)
                                                ? userList[getIndex(userList, counter - 1)].color.toLowerCase()
                                                : ""
                                        }
                                        sum={
                                            userList.some((e) => e.id === counter - 1)
                                                ? userList[getIndex(userList, counter - 1)].sum
                                                : "KEIN NAME"
                                        }
                                        comment={
                                            userList.some((e) => e.id === counter - 1)
                                                ? userList[getIndex(userList, counter - 1)].comment
                                                : ""
                                        }
                                        // winner={counter - 1 == 40 ? true : false}
                                    >
                                        {props.parent === counter - 1 ? (
                                            <Draggable
                                                klasse={`draggable w-7 h-7 sm:w-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 shine z-50 absolute touch-none rounded-full indent-[9999px] sm:indent-0 flex items-center justify-center ${
                                                    userData.color == "rgb(255, 255, 255)" ||
                                                    userData.color == "rgb(220, 223, 220)"
                                                        ? "text-black border-4"
                                                        : "text-white"
                                                }`}
                                                style={{
                                                    // width: kugelWidth + "px",
                                                    // height: kugelWidth + "px",
                                                    background: userData.color,
                                                    aspectRatio: 1 / 1,
                                                }}
                                                id="draggable"
                                            >
                                                {/* {userData.isAnonymous
                                                ? "Anon"
                                                : userData.name
                                                      .split(" ")
                                                      .map((n) => n[0])
                                                      .join(".")} */}
                                            </Draggable>
                                        ) : (
                                            ""
                                        )}
                                    </Kugel>
                                );
                            })}
                        </Row>
                    );
                })}
            </div>
        </>
    );
};

export default Raster;
