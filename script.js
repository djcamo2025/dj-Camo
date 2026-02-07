// Burger Menu Toggle
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.topbar')) {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Set the release date
const releaseDate = new Date("Feb 13, 2026 00:00:05");

// Update countdown every second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate.getTime() - now;

    // Grab elements once per tick
    const dateElement = document.getElementById("date");
    const countdownElement = document.getElementById("countdown");
    const titleElement = document.getElementById("title");
    const presaveLink = document.getElementById("presavelink");
    const nextrelease = document.getElementById("nextrel");
    const presavelink = document.getElementById("prelink")

    // If countdown finished
    if (distance < 0) {
        clearInterval(countdownFunction);

        if (countdownElement) countdownElement.innerHTML = "Released!";
        if (titleElement) titleElement.innerHTML = "Latest Release!";
        if (presaveLink) presaveLink.style.display = "none";
        if (nextrelease) nextrelease.innerHTML = "No upcoming release.";
        if (dateElement) dateElement.innerHTML = "Release is out now!";
        if (presavelink) presavelink.style.display = "none"

        // 🎉 CONFETTI CELEBRATION
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 }
        });

        // Optional: extra bursts for a bigger celebration
        setTimeout(() => confetti({ particleCount: 120, spread: 100 }), 300);
        setTimeout(() => confetti({ particleCount: 150, spread: 120 }), 600);

        return; // Prevents old text from updating
    }

    // Only runs while counting down
    if (dateElement) {
        dateElement.innerHTML = "Next Release: " + releaseDate.toDateString();
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display countdown
    if (countdownElement) {
        countdownElement.innerHTML =
            `Releases in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

}, 1000);

// Center shine effect for music grid items on mobile
if (window.matchMedia('(max-width: 700px)').matches) {
    const checkCentered = () => {
        const gridItems = document.querySelectorAll('.mygrid, .mygridc');
        
        gridItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const itemCenter = rect.top + rect.height / 2;
            const centerThreshold = 150; // pixels from center
            
            // Check if item is centered in viewport
            if (Math.abs(itemCenter - viewportCenter) < centerThreshold) {
                item.classList.add('center-shine');
            } else {
                item.classList.remove('center-shine');
            }
        });
    };

    window.addEventListener('scroll', checkCentered);
    checkCentered(); // Check on initial load
}


