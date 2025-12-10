const button = document.getElementById("startBtn");
const overlay = document.getElementById("overlay");
const contents = document.querySelectorAll(".content");
const audio = document.getElementById("music")

document.body.style.zoom = "100%";

button.addEventListener("click", () => {
    overlay.classList.add("fade-out");
    audio.volume = 1;
    audio.play();

    setTimeout(() => {
        contents.forEach(el => {
            el.classList.add("show");
        });
    }, 300);
});

const door = document.getElementById("door");
const roomOverlay = document.getElementById("roomOverlay");
const closeRoom = document.getElementById("closeRoom");

// show full screen room
door.addEventListener("click", () => {
    roomOverlay.classList.remove("hidden");
}); 

// close the room
closeRoom.addEventListener("click", () => {
    roomOverlay.classList.add("hidden");
});

const simeon = document.getElementById("simeon");
const darkenOverlay = document.getElementById("darkenOverlay");
const yesBtn = document.getElementById("yesBtn");
const sheets = document.getElementById("sheets");
const finalVideo = document.getElementById("finalVideo");
const videoContainer = document.getElementById("videoContainer");
const closeVideo = document.getElementById("closeVideo");

if (simeon) {
    simeon.addEventListener("click", () => {
        const ok = confirm("Are you ready?");
        if (!ok) return;

        // show dark overlay
        darkenOverlay.classList.remove("hidden");

        // play audio
        sheets.currentTime = 0;
        sheets.volume = 1;
        sheets.play();
        audio.pause();
    });
}

// when audio ends → show + play video
sheets.addEventListener("ended", () => {
    videoContainer.classList.remove("hidden");
    finalVideo.currentTime = 0;
    finalVideo.play();
    audio.play();
});

closeVideo.addEventListener("click", () => {
    finalVideo.pause();
    finalVideo.currentTime = 0;
    videoContainer.classList.add("hidden");

    // remove dark overlay
    darkenOverlay.classList.add("hidden");
});

