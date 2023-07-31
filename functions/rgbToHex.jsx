export default function rgbToHex(r, g, b) {
    // Convert each color channel to a hexadecimal representation
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");

    // Combine the hexadecimal values to form the final hex code
    const hexCode = `#${hexR}${hexG}${hexB}`;

    return hexCode;
}
