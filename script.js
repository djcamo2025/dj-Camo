// Set the release date
const releaseDate = new Date("Jan 19, 2026 00:00:00");

// Update countdown every second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate.getTime() - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display readable date
    document.getElementById("date").innerHTML =
        "Next Release: " + releaseDate.toDateString();

    // Display countdown
    document.getElementById("countdown").innerHTML =
        `Releases in: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If countdown finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Released!";
        document.getElementById("title").innerHTML = "Latest Release!";
        document.getElementById("presavelink").style.display = "none"
    }
}, 1000);