import React, { useState, useEffect, useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import ToolTip from "./toolTip";
import { useDroppable } from "@dnd-kit/core";

import Droppable from "../dragNDrop/droppable";

//ASSETS
import Shine from "../../assets/shine.svg";

const Kugel = (props, ref) => {
    const toolTipRef = useRef();
    useEffect(() => {
        // console.log(toolTipRef);
    }, [toolTipRef.current]);

    const mergedToolTipStyle = {
        ...props.toolTipStyle,
        "--box-bg-color": props.toolTipStyle.background || "initial",
    };

    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
        disabled: props.disabled,
    });
    const style = {
        color: isOver ? "green" : undefined,
    };

    return (
        <div
            // className={`kugel mx-1 lg:mx-1 flex h-full items-center text-bold  justify-center text-white ${props.size} ${props.klasse} rounded-full ${props.color} ${props.textColor}`}
            className={`kugel relative mx-1 lg:mx-1 flex h-full items-center text-bold ${
                isOver ? "bg-red-600 " : ""
            } justify-center text-white ${props.size} ${props.klasse} rounded-full ${props.color} ${props.textColor}`}
            id={props.id}
            data-isclaimed={props.isClaimed}
            cat={props.cat}
            ref={setNodeRef}
            style={props.style}
            key={props.key}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            disabled={props.disabled}
            onAnimationEnd={props.onAnimationEnd}
            data-isWinner={props.winner}
        >
            <>
                {/* {props.isClaimed && (
                    <div
                        className={`${props.klasse} absolute top-2 left-1 opacity-40 w-full h-full`}
                        onMouseEnter={props.onMouseEnter}
                        onMouseLeave={props.onMouseLeave}
                    >
                        <img src={Shine.src} className="w-6 h-6" alt="" />
                    </div>
                )} */}
                <div className="hidden xl:hidden text-xs pointer-events-none">{props.name}</div>
                {/* {props.name} */}
                {props.children}
            </>
            <ToolTip
                klasse={`absolute tooltip hidden z-50 lg:right-[${props.abstand}rem] bg-black py-4 lg:py-6 px-4 lg:px-6 min-w-[13rem] max-w-[18rem] md:min-w-[15rem] lg:font-bold rounded-xl ${props.toolTipColor} ${props.toolTipAfterColor}`}
                name={props.fullName}
                sum={props.sum}
                isAnon={props.isAnon}
                comment={props.comment}
                style={mergedToolTipStyle}
                // ref={toolTipRef}
                avatrSrc={props.avatrSrc}
                onMouseLeave={props.toolTiponMouseLeave}
                imgData={props.imgData}
                tooltipID={props.id}
                // onClickAvatar={props.onClickAvatar}
            ></ToolTip>
        </div>
    );
};

export default forwardRef(Kugel);
