// script.js
function openPopup() {
    const messages = [
        "Growth happens through action.",
        "Kindness shapes your world.",
        "Every emotion has meaning.",
        "You are learning, always."
    ];

    document.getElementById("popup-text").textContent = messages[Math.floor(Math.random()*messages.length)];
    document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}
