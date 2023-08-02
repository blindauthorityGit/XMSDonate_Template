import React from "react";

import { StepOne } from "./desktop/index";

const Desktop = (props) => {
    return (
        <>
            <StepOne activeId={props.activeId} isDropped={props.isDropped} isDragging={props.isDragging} />
        </>
    );
};

export default Desktop;
