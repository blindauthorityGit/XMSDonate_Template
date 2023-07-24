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

const Raster = (props) => {
    const [masterCounter, setMasterCounter] = useState(0);
    let counter = masterCounter;

    const [ballsPerTree, setBallsPerTree] = useState(anzahlBaumKugeln);
    const [treeAnzahl, setTreeAnzahl] = useState(0);
    const [currentTree, setCurrentTree] = useState(0);

    //CONTAINER REF
    const allRef = useRef();

    //GLOBAL UNCLAIMED STATE
    const showUnclaimed = useStore((state) => state.showUnclaimed);
    const setShowUnclaimed = useStore((state) => state.setShowUnclaimed);

    //GLOBAL USERLIST STATE
    const userList = useStore((state) => state.userList);

    // SET ROW COUNT
    const rowCount = Array(anzahlRows).fill("");

    // WIDTH OF BALLS
    const [kugelWidth, setKugelWidth] = useState(50);

    useEffect(() => {
        console.log("Counter: ", ballsPerTree * (treeAnzahl - 1));
        console.log("currentTree: ", currentTree);
        setMasterCounter(ballsPerTree * currentTree);
    }, [ballsPerTree, treeAnzahl, currentTree]);

    useEffect(() => {
        console.log(anzahlRows, userList);
    });

    return (
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
                                        // e.target.classList.remove("scale-in-center");
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
                                                  "rgb(220, 223, 220)"
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
                                            isMobile && (e.target.style.border = "3px solid white");
                                            e.target.children[1].style.transform = "scale(0.8)";
                                            e.target.children[1].classList.remove("hidden");
                                            e.target.children[1].classList.add(
                                                isMobile ? "scale-in-top" : "scale-in-hor-right"
                                            );
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (e.currentTarget.children[0].classList.contains("draggable")) {
                                            e.currentTarget.children[1].classList.remove("block");
                                            e.currentTarget.children[1].classList.add("hidden");
                                        }
                                        if (e.target.classList.contains("claimedKugel")) {
                                            isMobile && (e.target.style.border = "");

                                            // e.target.classList.remove("pulsate-bck");
                                            e.target.children[1].classList.remove("block");
                                            e.target.children[1].classList.add("hidden");
                                        }
                                    }}
                                    toolTiponMouseLeave={(e) => {
                                        e.target.classList.remove("block");
                                        e.target.classList.add("hidden");
                                    }}
                                    klasse={userList.some((e) => e.id === counter - 1) ? "claimedKugel" : null}
                                    toolTipStyle={{
                                        right: !isMobile ? kugelWidth + 16 + "px" : "",
                                        top: isMobile ? kugelWidth + 16 + "px" : 0,
                                        background: userList.some((e) => e.id === counter - 1)
                                            ? userList[getIndex(userList, counter - 1)].color.toLowerCase()
                                            : "",
                                    }}
                                    toolTipColor={
                                        userList.some((e) => e.id === counter - 1)
                                            ? userList[getIndex(userList, counter - 1)].color.toLowerCase() ===
                                                  "rgb(255, 255, 255)" ||
                                              userList[getIndex(userList, counter - 1)].color.toLowerCase() ===
                                                  "rgb(220, 223, 220)" ||
                                              !userList[getIndex(userList, counter - 1)].color.toLowerCase() ===
                                                  "rgb(235, 69, 17)"
                                                ? "text-black"
                                                : "text-white"
                                            : ""
                                    }
                                    name={
                                        userList.some((e) => e.id === counter - 1)
                                            ? userList[getIndex(userList, counter - 1)].name
                                                  .split(" ")
                                                  .map((n) => n[0])
                                                  .join(".")
                                            : ""
                                    }
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
                                            klasse={`draggable absolute touch-none rounded-full indent-[9999px] sm:indent-0 flex items-center justify-center ${
                                                kugelColor.color == "rgb(255, 255, 255)" ||
                                                kugelColor.color == "rgb(220, 223, 220)"
                                                    ? "text-black border-4"
                                                    : "text-white"
                                            }`}
                                            style={{
                                                width: kugelWidth + "px",
                                                height: kugelWidth + "px",
                                                background: kugelColor.color,
                                            }}
                                            id="draggable"
                                        >
                                            {kugelColor.anon
                                                ? "Anon"
                                                : kugelColor.name
                                                      .split(" ")
                                                      .map((n) => n[0])
                                                      .join(".")}
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
    );
};

export default Raster;
