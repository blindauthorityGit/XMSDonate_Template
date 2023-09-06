function isElementOverflowing(element) {
    // if (!element) {
    //     return false; // Handle the case where the element doesn't exist
    // }
    const elementRect = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Check if any of the element's boundaries are outside the viewport
    const isLeftOverflowing = elementRect.left < 0;
    const isRightOverflowing = elementRect.right > viewportWidth;
    const isTopOverflowing = elementRect.top < 0;
    const isBottomOverflowing = elementRect.bottom > viewportHeight;
    console.log(element, elementRect.left, elementRect.right, viewportWidth, viewportHeight);
    console.log(element.parentNode);

    // return isLeftOverflowing || isRightOverflowing || isTopOverflowing || isBottomOverflowing;
    return isLeftOverflowing
        ? (element.style.left = "-28px")
        : null || isRightOverflowing
        ? (element.style.right = "-28px")
        : null || isTopOverflowing || isBottomOverflowing;
}

export default isElementOverflowing;
