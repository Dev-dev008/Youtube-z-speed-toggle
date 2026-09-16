const speeds = [1, 1.25, 1.5, 2];
let currentIndex = 0;

function showSpeed(speed) {
    const old = document.getElementById("yt-speed-popup");
    if (old) old.remove();

    const popup = document.createElement("div");
    popup.id = "yt-speed-popup";
    popup.textContent = `Speed: ${speed}x`;

    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.padding = "10px 15px";
    popup.style.background = "black";
    popup.style.color = "white";
    popup.style.fontSize = "18px";
    popup.style.borderRadius = "8px";
    popup.style.zIndex = "999999";

    document.body.appendChild(popup);

    setTimeout(() => popup.remove(), 1000);
}

window.addEventListener(
    "keydown",
    function (e) {
        if (e.key.toLowerCase() !== "z") return;

        const video = document.querySelector("video");
        if (!video) return;

        currentIndex = (currentIndex + 1) % speeds.length;

        const speed = speeds[currentIndex];
        video.playbackRate = speed;

        showSpeed(speed);
    },
    true
);