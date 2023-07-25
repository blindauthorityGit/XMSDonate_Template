import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useStore from "../../store/store";

const ModalSidebar = ({ onClose }) => {
    const isSidebarOpen = useStore((state) => state.isSidebarOpen);
    const closeModal = useStore((state) => state.closeModal);

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        if (isSidebarOpen) {
            document.addEventListener("keydown", handleEscapeKey);
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isSidebarOpen]);

    const animationProps = {
        initial: { x: "-100%", opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 25 },
        },
        exit: { x: "-100%", opacity: 0 },
    };

    return (
        <AnimatePresence>
            {isSidebarOpen && (
                <motion.div
                    key={isSidebarOpen ? "open" : "closed"} // Use the key prop to force re-render on animation changes
                    initial={animationProps.initial}
                    animate={animationProps.animate}
                    exit={animationProps.exit}
                    transition={{ duration: 0.5 }}
                    className="sidebar-container z-50 h-screen w-[33%]"
                    style={{
                        background: "#fff",
                        borderRadius: "0",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        bottom: 0,
                    }}
                >
                    {/* Your sidebar content goes here */}
                    <button onClick={onClose}>Close Sidebar</button>
                    oikheioheoi
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalSidebar;
