import React, { useState, useEffect, useContext, useRef } from "react";

import { GiCheckMark } from "react-icons/gi";
import { colors } from "../../../../config";
import { GiPayMoney } from "react-icons/gi";
import { motion } from "framer-motion";

//Typo
import { H3, P } from "../../../typography";

//Fcuntions
import addToUserData from "../../../../functions/addToUserData";

//Store
import useStore from "../../../../store/store";

function Sum(props) {
    const [opacity, setOpacity] = useState(0.3);
    const userData = useStore((state) => state.userData);

    const sumRef = useRef();

    const handleChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        setDonationSum(Number(value));
    };

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    return (
        <motion.div
            className={`colors w-full}`}
            key="sum-choice" // Add a unique key to the motion.div
            variants={{
                open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, delay: 0.2 } },
                closed: { x: -100, opacity: 0 },
                exit: { x: -200, opacity: 0 },
            }}
            initial="closed"
            animate="open"
        >
            <div className="grid grid-cols-12">
                <div className="col-span-12 xl:mb-6">
                    <H3>Spendensumme</H3>
                    <P>Mit Ihrem Beitrag können wir viel Gutes bewirken! Welchen Betrag möchten Sie gerne spenden? </P>
                </div>
                <div className="col-span-2 flex items-center ">
                    <div data-tip={props.dataTip} className="text-5xl font-black opacity-50 text-[#C6D5DD]">
                        <GiPayMoney />
                    </div>
                </div>
                <div className="col-span-9 md:col-span-6 xl:col-span-6">
                    <div className={`wrapper flex justify-between ${props.wrapperKlasse}`} ref={sumRef}>
                        <input type="number" onChange={handleChange} placeholder="EUR 20,-" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Sum;
