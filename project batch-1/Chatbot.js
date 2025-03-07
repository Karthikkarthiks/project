document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    let userInput = document.getElementById('user-input').value.trim();

    if (userInput !== "") {
        addUserMessage(userInput);
        document.getElementById('user-input').value = "";

        setTimeout(() => {
            addBotMessage(generateBotResponse(userInput));
        }, 1000);
    }
}

function addUserMessage(message) {
    let messageContainer = document.createElement('div');
    messageContainer.classList.add('chat-message', 'user-message');
    messageContainer.innerHTML = `<span class="user-text">${message}</span>`;
    document.getElementById('chat-box').appendChild(messageContainer);
    scrollToBottom();
}

function addBotMessage(message) {
    let messageContainer = document.createElement('div');
    messageContainer.classList.add('chat-message', 'bot-message');
    messageContainer.innerHTML = `<span class="bot-text">${message}</span>`;
    document.getElementById('chat-box').appendChild(messageContainer);
    scrollToBottom();
}

function generateBotResponse(userMessage) {
    let response = "";
    const userInput = userMessage.toLowerCase();

    if (userInput.includes("hello") || userInput.includes("hi")) {
        response = "Hello! How can I assist you today?";
    } else if (userInput.includes("how are you")) {
        response = "I'm doing great, thanks for asking! How about you?";
    } else if (userInput.includes("what is your name")) {
        response = "I'm a friendly AI chatbot here to help you!";
    } else if (userInput.includes("what can you do")) {
        response = "I can chat with you, answer questions, or just keep you company!";
    } else if (userInput.includes("bye") || userInput.includes("goodbye")) {
        response = "Goodbye! Have a great day!";
    } else if (userInput.includes("help")) {
        response = "How can I help you? Feel free to ask me anything!";
    } else if (userInput.includes("your favorite color")) {
        response = "I don't have a favorite color, but I think blue is quite calming!";
    } else if (userInput.includes("tell me a joke")) {
        response = "Why don't skeletons fight each other? They don't have the guts!";
    } else if (userInput.includes("what is the time")) {
        response = `The current time is: ${new Date().toLocaleTimeString()}`;
    } else if (userInput.includes("how old are you")) {
        response = "I don't have an age, but I'm constantly learning!";
    } else if (userInput.includes("weather")) {
        response = "I can't check the weather for you, but you can try looking it up online!";
    } else if (userInput.includes("good morning")) {
        response = "Good morning! How can I make your day better?";
    } else if (userInput.includes("good night")) {
        response = "Good night! Sleep tight and have sweet dreams!";
    } else if (userInput.includes("what is love")) {
        response = "Love is a beautiful feeling, but I think it's best to experience it with others!";
    } else if (userInput.includes("can you sing")) {
        response = "I wish I could sing! But I can always send you some lyrics!";
    } else if (userInput.includes("do you like pizza")) {
        response = "Pizza sounds delicious! What toppings do you like?";
    } else if (userInput.includes("what is your purpose")) {
        response = "My purpose is to help, chat, and make your experience enjoyable!";
    } else if (userInput.includes("who created you")) {
        response = "I was created by a team of amazing developers!";
    } else if (userInput.includes("are you real")) {
        response = "I'm as real as any AI can be! But no, I'm not human.";
    } else if (userInput.includes("tell me something interesting")) {
        response = "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3000 years old!";
    } else if (userInput.includes("why")) {
        response = "That's a good question! Why not explore and find the answers together?";
    } else {
        response = "I'm not sure what you mean. Can you ask something else?";
    }

    return response;
}

function scrollToBottom() {
    let chatBox = document.getElementById('chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
}
