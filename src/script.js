const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light")
            ? "🌙"
            : "✨";
});

document.querySelector(".cta-btn").addEventListener("click", () => {
    alert("Welcome to your aesthetic website!");
});
