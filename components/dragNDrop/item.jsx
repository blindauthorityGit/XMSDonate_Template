// import React from "react";

// const Item = (props) => {
//     return <div className="tester absolute w-10 h-10 bg-red-500">{props.value}</div>;
// };
import { motion } from "framer-motion";

import React, { forwardRef } from "react";

const Item = ({ children, ...props }, ref) => {
    return (
        <motion.div
            ref={ref}
            style={props.style}
            initial={{ scale: 1 }}
            whileDrag={{ scale: 2.2 }}
            {...props}
            className={`tester w-10 h-10 bg-red-500 ${props.klasse}`}
        >
            {children}
        </motion.div>
    );
};

export default forwardRef(Item);
