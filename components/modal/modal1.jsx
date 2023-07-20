import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "../../store/store";

const Modal = ({ onClose }) => {
    const isModalOpen = useStore((state) => state.isModalOpen);
    const modalPosition = useStore((state) => state.modalPosition);
    const closeModal = useStore((state) => state.closeModal);

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener("keydown", handleEscapeKey);
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isModalOpen]);

    return (
        <AnimatePresence>
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: "10%", x: "-50%" }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: "100%",
                        x: 0,
                        transition: { type: "spring", stiffness: 300, damping: 25 },
                    }}
                    exit={{ opacity: 0, scale: 0.8, y: "50%" }}
                    transition={{ duration: 0.3 }}
                    className="modal-container z-50 h-[50%] lg:left-[10%] lg:h-[80%] w-[80%] xl:w-[40%]"
                    style={{
                        background: "#fff",
                        borderRadius: "8px",
                        padding: "20px",
                        position: "fixed",

                        // Default desktop positions
                        left: "10%",
                        // transform: "translate(0%, 0%)",

                        // Media queries for mobile version
                    }}
                >
                    {/* Your modal content goes here */}
                    <button onClick={onClose}>Close Modal</button>
                    oikheioheoi
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
