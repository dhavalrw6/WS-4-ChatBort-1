const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const typingIndicator = document.getElementById("typingIndicator");

// AI Responses
const responses = {
    "hello": "Hi there! How can I assist you?",
    "hi": "Hello! How can I help you?",
    "how are you": "I'm just a bot, but I'm doing great! What about you?",
    "what is your name": "I'm an AI chatbot here to assist you!",
    "bye": "Goodbye! Have a great day!",
    "kem cho" : "Majama tame bolo???",
    "default": "I'm sorry, I don't understand that. Can you rephrase?"
};

// Function to send user messages
function sendMessage() {
    let message = userInput.value.trim().toLowerCase();
    if (message === "") return;

    appendMessage("user", message);

    // Show typing indicator
    typingIndicator.style.display = "block";

    // Simulate AI typing delay
    setTimeout(() => {
        let response = responses[message] || responses["default"];
        appendMessage("bot", response);
        typingIndicator.style.display = "none";
    }, 1000);

    userInput.value = "";
}

// Function to append messages
function appendMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === "bot" ? "bot-message" : "user-message");
    messageDiv.textContent = text;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Allow sending messages by pressing Enter
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
