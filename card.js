// produksi desc card
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    const cover = card.querySelector(".cover");
    const desc = card.querySelector(".desc");
    cover.addEventListener("click", event => {
        desc.classList.toggle("open");
    });
    const closeBtn = card.querySelector(".closeBtn");
    closeBtn.addEventListener("click", event => {
        desc.classList.toggle("open");
    });
});