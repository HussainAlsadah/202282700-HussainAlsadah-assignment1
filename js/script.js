document.addEventListener('DOMContentLoaded', () => {
    // =============================
    // Smooth Scrolling
    // =============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    // =============================
    // Dark / Light Theme Toggle
    // =============================

    // Create button dynamically
    const themeButton = document.createElement("button");
    themeButton.id = "theme-toggle";
    themeButton.setAttribute("aria-label", "Toggle dark mode");

    // SVG icons
    const sunIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n        <circle cx="12" cy="12" r="5"></circle>\n        <line x1="12" y1="1" x2="12" y2="3"></line>\n        <line x1="12" y1="21" x2="12" y2="23"></line>\n        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>\n        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>\n        <line x1="1" y1="12" x2="3" y2="12"></line>\n        <line x1="21" y1="12" x2="23" y2="12"></line>\n        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>\n        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>\n    </svg>`;

    const moonIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>\n    </svg>`;

    themeButton.innerHTML = sunIcon;
    themeButton.classList.add("theme-toggle-btn");

    document.body.appendChild(themeButton);

    themeButton.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        themeButton.innerHTML = isDarkMode ? moonIcon : sunIcon;
    });

    // =============================
    // Mobile nav toggle
    // =============================
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }));
    }
});


