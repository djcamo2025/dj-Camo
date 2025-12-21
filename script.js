// Set the release date
const releaseDate = new Date("Jan 1, 2026 0:00:00").getTime();

// Update countdown every second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`; 

    // If countdown finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Released!";
        document.getElementById("NR").innerHTML = "Latest Release!";
    }
}, 1000);




// Set the release date
const xmasday = new Date("Dec 25, 2025 0:00:00").getTime();

// Update countdown every second
const xmasfunc = setInterval(() => {
    const now = new Date().getTime();
    const distance = xmasday - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("xmascountdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If countdown finished
    if (distance < 0) {
        clearInterval(xmasfunc);
        document.getElementById("countdown").innerHTML = "Released!";
    }
}, 1000);



document.getElementById("infobutt").addEventListener("click", function() {
    alert("Song: Hold My Hand (Before i go) [AI Version]\nArtist: DJ Camo\nRelease Date: 01/01/2026\nDescription: An AI-generated version of the popular song 'Hold My Hand' by Before i go, reimagined by DJ Camo.");
});



document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("snow-audio");

    // Start muted to bypass autoplay restrictions
    audio.muted = true;
    audio.play().then(() => {
        // Unmute after playback starts
        setTimeout(() => {
            audio.muted = false;
        }, 500);
    }).catch(err => {
        console.log("Autoplay blocked:", err);
    });
});
