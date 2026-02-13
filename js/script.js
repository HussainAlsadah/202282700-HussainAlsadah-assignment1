// =============================
// Smooth Scrolling
// =============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// =============================
// Dark / Light Theme Toggle
// =============================

// Create button dynamically
const themeButton = document.createElement("button");
themeButton.textContent = "Toggle Dark Mode";
themeButton.style.position = "fixed";
themeButton.style.bottom = "20px";
themeButton.style.right = "20px";
themeButton.style.padding = "10px";
themeButton.style.cursor = "pointer";

document.body.appendChild(themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// =============================
// Greeting Message (Time-Based)
// =============================
const greeting = document.createElement("p");
greeting.style.textAlign = "center";
greeting.style.marginTop = "10px";

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning! ☀️";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon! 🌤️";
} else {
    greeting.textContent = "Good Evening! 🌙";
}

document.querySelector("#about .container").prepend(greeting);
