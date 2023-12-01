document.addEventListener("DOMContentLoaded", function () {
    // Simulate content loading delay
    setTimeout(function () {
        // Remove loading overlay
        document.getElementById("loading-overlay").style.display = "none";
        // Enable overflow
        document.body.style.overflow = "auto";
    }, 2000); // Set the delay time (in milliseconds) based on your needs

    const giftList = document.getElementById("gift-list");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function () {
        giftList.classList.toggle("hidden");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Simulate content loading delay
    setTimeout(function () {
        // Remove loading overlay
        document.getElementById("loading-overlay").style.display = "none";
        // Enable overflow
        document.body.style.overflow = "auto";
    }, 2000); // Set the delay time (in milliseconds) based on your needs
});