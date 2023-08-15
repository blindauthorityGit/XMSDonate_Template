import React, { forwardRef, useEffect, useRef } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import { BsPersonCircle } from "react-icons/bs";
import { motion } from "framer-motion";

//ASSETS
import Avatar from "../../../assets/avatar.svg";

//STORE
import useStore from "../../../store/store"; // Import the zustand store

function ListItem(props, ref) {
    const setListItemHeight = useStore((state) => state.setListItemHeight);

    const variants = {
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, delay: props.i * 0.05 } },
        closed: { x: -100, opacity: 0 },
    };

    const testRef = useRef();

    useEffect(() => {
        setListItemHeight(testRef.current.clientHeight);
    }, []);

    return (
        <>
            <motion.li
                data-id={props.e.id}
                className="wrapper listItem w-full flex items-center mt-2 mb-4 hover:bg-[#f5f5f5] relative "
                onMouseOver={(e) => {
                    props.onHover(e);
                }}
                onMouseLeave={(e) => {
                    props.onLeave(e);
                }}
                ref={testRef}
                variants={variants}
                // Add initial and animate props here
                initial="closed"
                animate="open"
                whileHover={{ scale: 1.05 }}
                key={props.key}
            >
                <div className="left pr-6 h-full">
                    {props.e.anon ? (
                        <div className="text-6xl">
                            <img className="w-16 h-16" src={Avatar.src} alt="" />
                        </div>
                    ) : (
                        <div className="text-6xl h-full w-full">
                            {props.e.image ? (
                                <div
                                    className="avatar w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-cover rounded-full"
                                    style={{ backgroundImage: `url(${props.e.image[0].data_url})` }}
                                ></div>
                            ) : (
                                <img className="w-10 h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16" src={Avatar.src} alt="" />
                            )}
                        </div>
                    )}
                </div>
                <div className="right text-xs sm:text-base lg:text-sm xl:text-base w-[55%] lg:w-[55%] xl:w-[66%]">
                    <strong>{!props.e.anon ? props.e.name : "Anonymer Spender"}</strong>
                    <br />

                    {props.e.comment && (
                        <div className="farRight comment hidden lg:block text-xs lg:mt-1 xl:mt-2 italic  ">
                            {props.e.comment}
                        </div>
                    )}
                    {props.e.comment && (
                        <div className="farRight lg:hidden mt-1 text-xs lg:p-4 ">{props.e.comment}</div>
                    )}
                </div>
                <div className="sum font-bold text-xs sm:text-base lg:text-sm xl:text-base">
                    EUR {props.e.sum.toLocaleString("DE")},-
                </div>
            </motion.li>
            <hr />
        </>
    );
}

export default forwardRef(ListItem);