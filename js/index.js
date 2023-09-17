// JavaScript code to handle the "Back to Top" button
const backToTopButton = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// JavaScript code to close the WhatsApp chat bubble
function closeChatBubble() {
    const chatBubble = document.getElementById("whatsapp-chat-bubble");
    chatBubble.style.display = "none";
}











// JavaScript code to create the ticker effect
const ticker = document.getElementById("ticker");

ticker.addEventListener("animationiteration", () => {
    ticker.appendChild(ticker.firstElementChild);
});
