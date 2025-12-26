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
const newyear = new Date("Jan 1, 2026 0:00:00").getTime();

// Update countdown every second
const xmasfunc = setInterval(() => {
    const now = new Date().getTime();
    const distance = newyear - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display result
    document.getElementById("newyear").innerHTML =
        `New Year In: ${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If countdown finished
    if (distance < 0) {
        clearInterval(xmasfunc);
        document.getElementById("newyear").innerHTML = "Happy New Year!";
    }
}, 1000);





