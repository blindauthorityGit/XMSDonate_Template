export default function hexToRgb(hex) {
    // Remove '#' symbol if present
    hex = hex.replace("#", "");

    // Extract individual color channels (r, g, b)
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return the RGB representation
    return `rgb(${r}, ${g}, ${b})`;
}
