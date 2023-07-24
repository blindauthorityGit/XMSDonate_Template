import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { showGoal, goalSum } from "../../config";
import { dev, goalStep } from "../../config";

const Goal = (props) => {
    const [data, setData] = useState(props.data);
    const [sum, setSum] = useState(0);
    const [goal, setGoal] = useState(goalSum);
    const [percentage, setPercentage] = useState(0);
    const [goalsReached, setGoalsReached] = useState(0);
    const [showCounter, setShowCounter] = useState(false);

    const countRef = useRef();

    useEffect(() => {
        dev
            ? setSum(userList.map((e) => e.sum).reduce((a, b) => a + b))
            : setSum(data.map((e) => e.sum).reduce((a, b) => a + b));
    }, [data]);

    useEffect(() => {
        if ((sum / goal) * 100 <= 100) {
            setPercentage((sum / goal) * 100);
        } else {
            // When the goal is reached, update the goal to the next value (goal + 1000)
            setGoal(Math.ceil(sum / goalStep) * 1000);
        }
    }, [sum]);

    // SET PERCENTAGE AFTER REASSESING GOAL FOR PROGRESS BAR
    useEffect(() => {
        setGoalsReached(Math.floor(sum / 1000));
        setPercentage((sum / goal) * 100);
    }, [goal]);

    // SHOW TEXT AFTER ANIMATION
    useEffect(() => {
        setTimeout(() => {
            setShowCounter(true);
        }, 2000);
    }, []);

    return (
        <>
            <div className={`${props.klasse}`}>
                <div className="headline font-bold text-base xl:text-xl mb-2 sm:mb-4">Erreichtes Ziel</div>
                <div
                    className={` ${
                        percentage == 100 ? "font-bold" : ""
                    } then absolute text-xs xl:text-base font-semibold pt-2 sm:pt-4 top-0 right-0`}
                >
                    EUR {goal.toLocaleString("de")},-
                </div>

                <div className="balken border border-dashed h-3 rounded-3xl border-darkText sm:h-4 w-full relative">
                    <motion.div
                        className={`inner rounded-l-3xl ${
                            goalsReached >= 1 ? "bg-[#00A651]" : "bg-darkText"
                        }  h-full relative`}
                        id="innerProgress"
                        layout
                        initial={{
                            width: 0,
                        }}
                        animate={{ width: percentage + "%" }}
                        transition={{ duration: "300ms", delay: 1.35, type: "spring" }}
                    >
                        <div
                            ref={countRef}
                            className="now absolute text-text text-xs xl:text-base right-0 top-3 sm:top-6"
                        >
                            {showCounter && <>EUR {sum.toLocaleString("de")},-</>}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Goal;
