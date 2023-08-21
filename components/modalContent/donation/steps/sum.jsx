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

    const sumRef = useRef();

    const handleChange = (e) => {
        const value = { sum: Number(e.target.value) };
        addToUserData(value);
    };

    useEffect(() => {
        console.log(userData);
    }, [userData]);

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
                <div className="col-span-2 flex items-center ">
                    <div data-tip={props.dataTip} className="text-5xl font-black opacity-50 text-[#C6D5DD]">
                        <GiPayMoney />
                    </div>
                </div>
                <div className="col-span-9 md:col-span-9 xl:col-span-9 mt-2 lg:mt-0">
                    <div className={`wrapper flex justify-between ${props.wrapperKlasse}`} ref={sumRef}>
                        <input
                            type="number"
                            className="border-b-2 w-full text-xl lg:text-5xl py-4 font-bold pl-4"
                            onChange={handleChange}
                            placeholder="Ihre Spendensumme in EUR"
                            value={userData.sum}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Sum;
