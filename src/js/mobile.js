let startTouchX = 0;
let startTouchY = 0;
let scrollMultiplier = 500; // Adjust this value to control the scroll sensitivity


window.addEventListener('touchstart', (e) => {
    startTouchX = e.touches[0].clientX; // Track X-axis starting point
    startTouchY = e.touches[0].clientY; // Track Y-axis starting point
}, false);

window.addEventListener('touchmove', (e) => {
    const currentTouchX = e.touches[0].clientX;
    const currentTouchY = e.touches[0].clientY;

    const deltaX = currentTouchX - startTouchX;
    const deltaY = currentTouchY - startTouchY;

    // Check for horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            // Swiping right
            animationScroll(e, true, Math.abs(deltaX * scrollMultiplier), "right");
        } else {
            // Swiping left
            animationScroll(e, true, Math.abs(deltaX * scrollMultiplier), "left");
        }
    }
}, false);

