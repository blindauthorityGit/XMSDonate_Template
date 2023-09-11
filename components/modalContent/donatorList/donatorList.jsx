import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import ListItem from "./listItem";
import { motion } from "framer-motion";

//STORE
import useStore from "../../../store/store"; // Import the zustand store

//TYPO
import { H2 } from "../../typography";

//FUNCTIONS
import {
    sortByCreatedAtAscending,
    sortByCreatedAtDescending,
    sortBySumAscending,
    sortBySumDescending,
    sortByNameAscending,
    sortByNameDescending,
} from "../../../functions/sortFunctions";

const DonatorList = () => {
    //GLOBAL USER STATE
    const userList = useStore((state) => state.userList);
    //GOBAL SIDEBAR STATE
    const isSidebarOpen = useStore((state) => state.isSidebarOpen);
    //GOBAL SIDEBAR STATE
    const listItemHeight = useStore((state) => state.listItemHeight);

    const [itemsAll, setItemsAll] = useState(userList);
    const [items, setItems] = useState(null);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    const [currentPage, setCurrentPage] = useState(0);

    const [animateItems, setAnimateItems] = useState(false);

    const [height, setHeight] = useState(0);

    const [windowSize, setWindowSize] = useState(getWindowSize());

    const listItemRef = useRef();

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
            //SET HEIGHT RATIO RELATIVE TO CONTAINER DEPENDING ON DEVICE WIDTH

            const calculateValue = () => {
                if (windowSize.innerHeight > 768 && windowSize.innerWidth > 450) {
                    return 0.8;
                } else if (windowSize.innerWidth < 450 && windowSize.innerWidth >= 321) {
                    return 0.78;
                } else if (windowSize.innerWidth < 321) {
                    return 0.7; // Add your desired value for window sizes less than 321
                } else {
                    return 0.78;
                }
            };

            setItemsPerPage(
                Math.floor((windowSize.innerHeight * calculateValue()) / (listItemHeight + listItemHeight * 0.05))
            );
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
        //SORT BY DATE ASCENDING
        console.log(sortByCreatedAtDescending(userList));

        setItemsAll(sortByCreatedAtDescending(userList));
        setItems(sliceIntoChunks(itemsAll, itemsPerPage));
        if (listItemRef.current) {
            console.log(listItemRef.current);
        }
    }, [listItemRef.current, height, setItemsAll, itemsAll, itemsPerPage]);

    const claimedArr = Array.from(document.querySelectorAll(".kugel"));

    const onHover = (e) => {
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
