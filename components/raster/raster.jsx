import React, { useState, useEffect } from "react";
//COMPS
import Row from "./row";
// CONFIG
import { anzahlRows, dev, anzahlBaumKugeln, bgColors } from "../../config";

const Raster = () => {
    const rowCount = Array(anzahlRows).fill("");

    useEffect(() => {
        console.log(anzahlRows);
    });

    return (
        <>
            {rowCount.map((e, i) => {
                let kugelCount = [];
                if (i > 4 && i < 8) {
                    kugelCount = Array(i + -1).fill("");
                } else if (i >= 8) {
                    kugelCount = Array(i - 3).fill("");
                } else {
                    kugelCount = Array(i + 1).fill("");
                }

                return (
                    <Row
                        key={i + "nene"}
                        klasse={`h-[${100 / anzahlRows}%] relative `}
                        style={{ height: 100 / anzahlRows + "%" }}
                    ></Row>
                );
            })}
        </>
    );
};

export default Raster;
