document.addEventListener("DOMContentLoaded", () => {

    /* CONTACT FORM VALIDATION */
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const service = document.getElementById("service")?.value;

            if (!name || !email || !service) {
                alert("Please fill in all required fields.");
            } else {
                alert("Message sent successfully! We will contact you soon.");
                form.reset();
            }
        });
    }

    /* MODAL POP-UP (HOME ONLY) */
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    if (modal && !sessionStorage.getItem("modalShown")) {
        modal.style.display = "block";
        sessionStorage.setItem("modalShown", "true");
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    /* THEME TOGGLE (PERSISTENT) */
    const themeBtn = document.getElementById("themeToggle");

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        if (themeBtn) themeBtn.textContent = "☀️";
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                themeBtn.textContent = "☀️";
                localStorage.setItem("theme", "dark");
            } else {
                themeBtn.textContent = "🌙";
                localStorage.setItem("theme", "light");
            }
        });
    }

    /* HERO IMAGE SLIDER */
    const hero = document.querySelector(".hero");

    if (hero) {
        const images = [
            "images/hero1.jpg",
            "images/hero2.jpg",
            "images/hero3.jpg",
            "images/hero4.jpg",
            "images/hero5.jpg",
            "images/hero6.jpg"
        ];

        let index = 0;

        // Set first image immediately
        hero.style.backgroundImage = `
            linear-gradient(rgba(31,41,55,0.85), rgba(31,41,55,0.85)),
            url(${images[index]})
        `;

        setInterval(() => {
            index = (index + 1) % images.length;
            hero.style.backgroundImage = `
                linear-gradient(rgba(31,41,55,0.85), rgba(31,41,55,0.85)),
                url(${images[index]})
            `;
        }, 4000);
    }

});