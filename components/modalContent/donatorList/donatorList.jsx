import React, { useState, useEffect, useContext, useRef, useLayoutEffect } from "react";
import ReactPaginate from "react-paginate";
import ListItem from "./listItem";
import { isBrowser, isMobile } from "react-device-detect";
import { motion, AnimatePresence } from "framer-motion";

//STORE
import useStore from "../../../store/store"; // Import the zustand store

//TYPO
import { H2 } from "../../typography";

const DonatorList = () => {
    //GLOBAL USER STATE
    const userList = useStore((state) => state.userList);
    //GOBAL SIDEBAR STATE
    const isSidebarOpen = useStore((state) => state.isSidebarOpen);
    //GOBAL SIDEBAR STATE
    const listItemHeight = useStore((state) => state.listItemHeight);

    // const { kugelColor, setKugelColor } = useContext(KugelColor);

    const [itemsAll, setItemsAll] = useState(userList);
    const [items, setItems] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    const [currentPage, setCurrentPage] = useState(0);

    const [animateItems, setAnimateItems] = useState(false);

    const [height, setHeight] = useState(0);

    const [windowSize, setWindowSize] = useState(getWindowSize());

    const listRef = useRef();
    const listItemRef = useRef();

    //VARIANTS FRAMER MOTION
    // VARIANTS FRAMER MOTION
    const variants = {
        open: {
            opacity: 1,
            transition: { staggerChildren: 0.85, delayChildren: 0 },
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    const itemVariants = {
        open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
        closed: { x: -500, opacity: 0 },
    };
    // const itemVariants = {
    //     open: { opacity: 1, x: 0 },
    //     closed: { opacity: 0, x: -400 },
    // };

    useEffect(() => {
        if (listItemHeight > 1) {
            const ratio =
                windowSize.innerHeight > 768 && windowSize.innerWidth > 450
                    ? 0.8
                    : windowSize.innerWidth < 450
                    ? 0.75
                    : 0.78;
            setItemsPerPage(Math.floor((windowSize.innerHeight * ratio) / (listItemHeight + listItemHeight * 0.05)));
            console.log(Math.floor((windowSize.innerHeight * ratio) / (listItemHeight + listItemHeight * 0.05)));
            console.log(listItemHeight, ratio, windowSize.innerHeight);
        }
    }, [listItemHeight, windowSize.innerHeight]);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
            setAnimateItems(false);
        };
    }, [isSidebarOpen]);

    const updateListItemHeight = (height) => {
        setListItemHeight(height);
    };

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    // let itemsPerPage = Math.floor((windowSize.innerHeight * 0.66) / listItemHeight);
    // const itemsPerPage = windowSize.innerHeight <= 640 ? 4 : 8;

    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    const handlePageClick = (e) => {
        setCurrentPage(e.selected);
    };

    useEffect(() => {
        //SORT BY DONATION SUM
        setItemsAll(userList.sort((a, b) => b.sum - a.sum));
        //
        setItems(sliceIntoChunks(itemsAll, itemsPerPage));
        if (listItemRef.current) {
            console.log(listItemRef.current);
        }
        // setTimeout(() => {
        //     console.log(listItemRef.current.clientHeight);
        //     setHeight(listItemRef.current.clientHeight);
        // }, 1000);
    }, [listItemRef.current, height, setItemsAll, itemsAll, itemsPerPage]);

    const claimedArr = Array.from(document.querySelectorAll(".kugel"));

    const onHover = (e) => {
        // setKugelColor({ ...kugelColor, id: e.currentTarget.dataset.id });
        claimedArr[e.currentTarget.dataset.id].classList.add(
            "outline",
            "outline-offset-2",
            "outline-white",
            "heartbeat"
        );
    };

    const onLeave = (e) => {
        claimedArr[e.currentTarget.dataset.id].classList.remove(
            "outline",
            "outline-offset-3",
            "outline-pink-500",
            "heartbeat"
        );
    };

    return (
        <div width=" grid grid-cols-12 relative h-full">
            <div className="col-span-12 p-4 lg:pt-4 xl:pt-10  sm:pt-4 lg:p-10">
                <H2>Vielen Dank an:</H2>
                <div className="mb-6 xl:mb-8"></div>
                {items && (
                    <>
                        {/* Use motion.div here with the variants */}
                        <motion.ul variants={variants} animate="open" exit="closed" className="daList">
                            {items[currentPage].map((e, i) => {
                                if (i < itemsPerPage) {
                                    return (
                                        <ListItem
                                            key={`lister${i}`}
                                            onHover={onHover}
                                            onLeave={onLeave}
                                            e={e}
                                            variants={itemVariants}
                                            ref={listItemRef}
                                            i={i}
                                            onHeightUpdate={updateListItemHeight}
                                        ></ListItem>
                                    );
                                }
                            })}
                        </motion.ul>
                    </>
                )}
            </div>
            <ReactPaginate
                previousLabel={"<<"}
                nextLabel={">>"}
                breakLabel={"..."}
                pageCount={Math.ceil(itemsAll.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={
                    "pagination  flex justify-center items-center mt-5 absolute bottom-2 xl:bottom-6 w-full"
                }
                pageClassName={
                    "page-item text-xs lg:text-sm p-2 w-6 h-6 flex items-center justify-center lg:h-10 lg:w-10 text-center"
                }
                pageLinkClassName={"page-link "}
                previousClassName={"page-item pr-5"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item pl-5"}
                nextLinkClassName={"page-link"}
                activeClassName={"active font-bold opacity-100"}
            />
        </div>
    );
};

export default DonatorList;
