// ========================= // MOBILE NAVBAR // ========================= 
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// ========================= // ACTIVE NAV LINKS // ========================= 
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

if (sections.length && navItems.length) {
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href")?.includes(current)) {
                link.classList.add("active");
            }
        });
    });
}

// ========================= // SCROLL ANIMATIONS // ========================= 
const fadeElements = document.querySelectorAll(".fade-in");
if (fadeElements.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    fadeElements.forEach(el => observer.observe(el));
}

// ========================= // BACK TO TOP BUTTON // ========================= 
const backToTop = document.getElementById("backToTop");
if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
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
}

// ========================= // CONTACT FORM // ========================= 
const form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        form.reset();
    });
}