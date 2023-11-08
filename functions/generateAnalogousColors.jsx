import chroma from "chroma-js";

const generateAnalogousColors = (baseColor, count) => {
    const colors = [];
    const baseHue = chroma(baseColor).hsl()[0];
    const step = 30; // Adjust the step to control the similarity of colors (e.g., 30 for analogous colors)
    const maxHue = 360;

    for (let i = 0; i < count; i++) {
        const offset = (baseHue + step * i) % maxHue;
        const analogousColor = chroma.hsl(offset, 1, 0.5).hex();
        colors.push(analogousColor);
    }
    console.log(colors);
    return colors;
};

export default generateAnalogousColors;
