const generateClassNames = (isMobile, claimed, showUnclaimed, kugelColor, kugelWidth, props) => {
    const isClaimed = kugelColor.id === props.parent;
    const claimedClass = isClaimed ? "shadow-md shine" : `border-2 sm:border-4 border-white border-dotted`;

    const sizeClass = `h-[100%] ${
        showUnclaimed && !claimed ? "opacity-50 bg-transparent" : claimed ? "opacity-100" : "opacity-0 scale-out-center"
    } ${claimed ? claimedClass : showUnclaimed ? "scale-in-center" : null}`;

    const kugelStyle = {
        background: kugelColor.color || null,
        aspectRatio: "1 / 1",
    };

    const tooltipStyle = {
        right: !isMobile ? kugelWidth + 16 + "px" : "",
        top: isMobile ? kugelWidth + 16 + "px" : 0,
        background: kugelColor.color ? kugelColor.color.toLowerCase() : "",
    };

    const tooltipColor = kugelColor.color
        ? kugelColor.color.toLowerCase() === "rgb(255, 255, 255)" ||
          kugelColor.color.toLowerCase() === "rgb(220, 223, 220)" ||
          !kugelColor.color.toLowerCase() === "rgb(235, 69, 17)"
            ? "text-black"
            : "text-white"
        : "";

    return {
        sizeClass,
        kugelStyle,
        tooltipStyle,
        tooltipColor,
    };
};
