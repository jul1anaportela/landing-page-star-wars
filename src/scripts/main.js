document.addEventListener('DOMContentLoaded', function() {
    const saberButtons = document.querySelectorAll(".saber-button");
    const hoverSound = document.querySelector(".hoverSound");

    saberButtons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });
});
