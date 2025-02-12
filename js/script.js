document.addEventListener("DOMContentLoaded", function () {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotClose = document.getElementById("chatbot-close");

    // Toggle chatbot on button click
    chatbotToggle.addEventListener("click", () => {
        chatbotContainer.classList.toggle("hidden");
    });

    // Close chatbot when close button is clicked
    chatbotClose.addEventListener("click", () => {
        chatbotContainer.classList.add("hidden");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.08)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });
});


function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

