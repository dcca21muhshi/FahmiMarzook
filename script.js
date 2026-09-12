/* =========================
   WEDDING DATE
========================= */

/*
   CHANGE THIS DATE!

   Example:
   If your wedding date was January 15, 2026:

   new Date("2026-01-15T00:00:00")

*/

const weddingDate = new Date("2026-07-13T00:00:00");


/* =========================
   LIVE COUNTER
========================= */

function updateCounter() {

    const now = new Date();

    let months =
        (now.getFullYear() - weddingDate.getFullYear()) * 12
        + (now.getMonth() - weddingDate.getMonth());

    if (now.getDate() < weddingDate.getDate()) {
        months--;
    }

    let anniversaryDate = new Date(weddingDate);

    anniversaryDate.setMonth(
        weddingDate.getMonth() + months
    );

    let difference = now - anniversaryDate;

    if (difference < 0) {
        months--;
        anniversaryDate.setMonth(
            weddingDate.getMonth() + months
        );

        difference = now - anniversaryDate;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
}


updateCounter();

setInterval(updateCounter, 60000);


/* =========================
   FLOATING HEARTS
========================= */

const heartContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = "♡";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    heartContainer.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 900);


/* =========================
   LOVE POPUP
========================= */

const loveButton =
    document.getElementById("loveButton");

const lovePopup =
    document.getElementById("lovePopup");

const closePopup =
    document.getElementById("closePopup");


loveButton.addEventListener("click", () => {

    lovePopup.classList.add("show");

});


closePopup.addEventListener("click", () => {

    lovePopup.classList.remove("show");

});


lovePopup.addEventListener("click", (event) => {

    if (event.target === lovePopup) {
        lovePopup.classList.remove("show");
    }

});


/* =========================
   SCROLL REVEAL
========================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(section => {
    observer.observe(section);
});