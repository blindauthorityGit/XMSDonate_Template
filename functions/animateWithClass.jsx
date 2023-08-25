export default function animateWithClass(element, animationClass, onAnimationEnd) {
    // Add the animation class to the element
    element.classList.add(animationClass);

    // Listen for the "animationend" event
    element.addEventListener("animationend", () => {
        // Remove the animation class after the animation ends
        element.classList.remove(animationClass);
        console.log("ANIMATION HAS ENBDEN");
        // Execute the provided onAnimationEnd function if it exists
        if (onAnimationEnd && typeof onAnimationEnd === "function") {
            onAnimationEnd();
        }
    });
}
