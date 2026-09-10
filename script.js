/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   HEADER ON SCROLL
========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    if (!name || !phone || !message) {

        alert("Please fill in your name, phone number and message.");

        return;

    }


    /*
        Currently this form is frontend-only.

        Later we can connect it to:
        - WhatsApp
        - Email
        - Formspree
        - PHP
        - Node.js
        - FastAPI
    */


    const whatsappMessage =
        `Hello Advocate Suryansh Mishra,%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Email: ${email}%0A%0A` +
        `Message:%0A${message}`;


    const whatsappURL =
        `https://wa.me/919519776709?text=${whatsappMessage}`;


    window.open(whatsappURL, "_blank");


    contactForm.reset();

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================================
   AOS-STYLE SCROLL REVEAL
========================================================= */

const scrollRevealGroups = [
    [
        ".intro-grid > div",
        ".about-image",
        ".about-content",
        ".why-content",
        ".why-visual",
        ".contact-info",
        ".contact-form-wrapper"
    ],
    [
        ".stats-grid .stat",
        ".practice-card",
        ".why-item",
        ".contact-item",
        ".gallery-item"
    ],
    [
        ".section-heading",
        ".contact-cta-content",
        ".disclaimer .container",
        ".footer-grid"
    ]
];


const scrollRevealElements = document.querySelectorAll(
    scrollRevealGroups.flat().join(", ")
);


scrollRevealElements.forEach((element, index) => {

    const groupIndex = scrollRevealGroups.findIndex(group =>
        group.some(selector => element.matches(selector))
    );

    const animationType = groupIndex === 0
        ? (index % 2 === 0 ? "slide-in-left" : "slide-in-right")
        : groupIndex === 1
            ? "entrance"
            : "fade-in";

    element.classList.add("scroll-reveal", animationType);
    element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index % 4, 3) * 0.08}s`
    );

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15,
        rootMargin: "0px 0px -40px"
    }

);


scrollRevealElements.forEach(element => observer.observe(element));