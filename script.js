/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   STUDIO PHOTO PARALLAX
========================= */

const heroPhoto =
    document.querySelector(".hero-photo img");


window.addEventListener("scroll", () => {

    if (window.innerWidth > 650) {

        const scroll =
            window.scrollY;

        heroPhoto.style.transform =
            `scale(1.08) translateY(${scroll * 0.12}px)`;

    }

});