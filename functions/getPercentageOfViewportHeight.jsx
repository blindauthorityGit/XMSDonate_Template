export default function getPercentageOfViewportHeight(percentage) {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return (percentage / 100) * viewportHeight;
}
