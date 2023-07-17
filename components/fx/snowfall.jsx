import Snowfall from "react-snowfall";

import React from "react";

const Snow = () => {
    return (
        <div className="absolute w-full h-screen z-10">
            <Snowfall color="#F4F4F3" snowflakeCount={800} />
        </div>
    );
};

export default Snow;
