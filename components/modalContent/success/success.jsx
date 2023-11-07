// Step1.jsx
import React, { useState } from "react";
//TYPO
import { H1, H2, P } from "../../typography";
import { MainButton } from "../../buttons";

import SuccessKids from "../../../assets/successKidsSmall.svg";
import Logo from "../../../assets/logo.png";
import axios from "axios";

//STORE
import useStore from "../../../store/store"; // Import the zustand store

const Success = ({ onNext }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    //GLOBAL USERLIST STATE
    const userData = useStore((state) => state.userData);

    const handleSendEmail = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await axios.post("/api/quittung", {
                email: email,
                userData: userData,
            });

            setSuccessMessage("Die Spendenquittung wurde an die von Ihnen angegebene E-Mail-Adresse verschickt.");
        } catch (error) {
            setErrorMessage("Error sending email. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <img className="lg:max-w-[50%] max-w-[66%] h-auto m-auto" src={SuccessKids.src} alt="" />

            <div width=" grid grid-cols-12  h-full absolute top-0 left-0 w-full h-full overflow-y-auto">
                <div className="col-span-12 p-4 lg:pt-4 xl:pt-10 sm:pt-0 lg:p-10">
                    <H1 klasse="font-success text-primaryColor text-center !text-success">
                        Vielen Dank für Ihre Unterstützung!
                    </H1>
                    <div className="mb-6 xl:mb-8"></div>
                    <div className="mb-6 xl:mb-8"></div>
                    <P klasse="font-semibold text-center">Ihr seid großartig!</P>
                    <P klasse="font-semibold text-center">
                        <a href="https://www.klimahelden.org/">www.klimahelden.org</a>{" "}
                    </P>{" "}
                    <div className="mb-6 xl:mb-66"></div>
                    <P klasse="font-bold text-center !text-lg">Benötigen Sie eine Quittung?</P>{" "}
                    <P klasse="font-semibold text-center mt-4 mb-8">
                        Schreiben Sie uns an <b />{" "}
                        <a className="underline text-success" href="mailto:V.Weber@werkzeugweber.de">
                            V.Weber@werkzeugweber.de
                        </a>{" "}
                    </P>{" "}
                </div>
            </div>
        </>
    );
};

export default Success;
