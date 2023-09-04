import React, { useState, useEffect, useContext, useRef } from "react";

import { GiCheckMark } from "react-icons/gi";
import { colors } from "../../../../config";
import { GiPayMoney } from "react-icons/gi";
import { motion } from "framer-motion";

//Typo
import { H1, H2, H3, P } from "../../../typography";

//Fcuntions
import addToUserData from "../../../../functions/addToUserData";

//Store
import useStore from "../../../../store/store";

function Sum(props) {
    const [opacity, setOpacity] = useState(0.3);
    const userData = useStore((state) => state.userData);
    const [inputValue, setInputValue] = useState("");
    const sumRef = useRef();

    const handleChange = (e) => {
        const value = { sum: parseFloat(e.target.value) };
        setInputValue(e.target.value);
        addToUserData(value);
    };

    const handleBlur = (e) => {
        e.target.value = parseFloat(e.target.value).toFixed(2);
    };

    useEffect(() => {
        console.log(sumRef.current.children[0]);
    }, []);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 xl:mb-6 hidden lg:block">
                <H1>Schenken Sie Freude</H1>
                <P>Mit Ihrer Spende lassen wir die Wünsche unserer Kinder und Jugendlichen wahr werden. </P>
            </div>
            <motion.div
                className={`colors w-full col-span-12 grid grid-cols-12}`}
                key="sum-choice" // Add a unique key to the motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ opacity: 1, x: 0, transition: { type: "spring", stiffness: 1000, damping: 80, delay: 0.1 } }}
                exit={{ x: -1000, opacity: 1 }}
            >
                <div className="col-span-12 xl:mb-6 lg:mt-6 sm:mb-4">
                    <H2>Spendensumme</H2>
                    <P>
                        Ihre Spende hilft uns, den Alltag unserer Kinder und Jugendlichen schöner zu gestalten. Mit
                        welchem Betrag möchten Sie unsere Arbeit unterstützen?
                    </P>
                </div>
                {/* <div className="col-span-2 flex items-center ">
                    <div data-tip={props.dataTip} className="text-5xl font-black opacity-50 text-[#C6D5DD]">
                        <GiPayMoney />
                    </div>
                </div> */}
                <div className="col-span-3 md:col-span-3 lg:col-span-3 mt-2 lg:mt-0">
                    <div className={`SUMINPUTwrapper flex justify-between ${props.wrapperKlasse}`} ref={sumRef}>
                        <input
                            type="number"
                            className="SUMINPUT border-b-2 w-full text-xl lg:text-2xl xl:text-5xl py-4 font-bold pl-4"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="5,00"
                            step="1"
                            // value={userData.sum ? userData.sum.toFixed(2) : ""}
                            value={userData.sum ? userData.sum : ""}
                            min="1"
                        />
                        {/* <span className="absolute inset-y-0 right-4 flex items-center">€</span> */}
                    </div>
                </div>
                <div className="col-span-9 py-4 flex items-center text-xl lg:text-2xl xl:text-5xl ">Euro</div>
            </motion.div>
        </div>
    );
}

export default Sum;
