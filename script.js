document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const isExpanded = card.getAttribute("data-expanded") === "true";
            card.setAttribute("data-expanded", !isExpanded); // Переключение состояния
        });
    });
});