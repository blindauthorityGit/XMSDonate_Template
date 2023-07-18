// BouncyAnimation.js
import { motion } from "framer-motion";

const BouncyAnimation = ({ children }) => {
    return (
        <motion.div
            initial={{ y: 1000 }} // Initial position below the screen
            animate={{ y: 0, scale: 1 }} // Animate to the final position and scale
            transition={{
                type: "spring", // Use a spring animation
                damping: 15, // Controls the bounciness (lower values = bouncier)
                stiffness: 500, // Controls the stiffness (higher values = stiffer)
            }}
        >
            {children}
        </motion.div>
    );
};

export default BouncyAnimation;
