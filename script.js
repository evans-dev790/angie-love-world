document.addEventListener("DOMContentLoaded", function () {

    const surpriseBtn = document.getElementById("surpriseBtn");
    const surprise = document.getElementById("surprise");

    surpriseBtn.addEventListener("click", function () {

        surprise.classList.toggle("hidden");

        surpriseBtn.textContent =
            surprise.classList.contains("hidden")
                ? "Open Your Surprise 💌"
                : "Close Surprise ❤️";

    });

});