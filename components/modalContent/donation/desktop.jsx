import React from "react";

import { StepOne } from "./desktop/index";

const Desktop = (props) => {
    return (
        <>
            <StepOne isDropped={props.isDropped} isDragging={props.isDragging} />
        </>
    );
};

export default Desktop;
