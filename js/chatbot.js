document.getElementById('chatbot-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let inputField = document.getElementById('chatbot-input');
        let message = inputField.value.trim().toLowerCase();

        if (message !== '') {
            let chatBox = document.getElementById('chatbot-messages');

            // Create user message element
            let userMessage = document.createElement('div');
            userMessage.className = 'text-right text-blue-600 mb-2';
            userMessage.textContent = message;
            chatBox.appendChild(userMessage);

            // Simple chatbot responses
            const responses = {
                hello: "Hello! How can I help you today?",
                hi: "Hi there! How can I assist you?",
                hey: "Hey! Need any help?",
                services: "We offer Web Development, Cloud Solutions, and Cybersecurity services.",
                pricing: "Our pricing varies based on the service. Could you specify which service you're interested in?",
                contact: "You can reach us via email at support@example.com or call us at +1234567890.",
                support: "For support, please describe your issue, and our team will assist you shortly.",
                location: "Our office is located at 123 Tech Street, Silicon Valley, USA.",
                hours: "Our working hours are Monday to Friday, 9 AM - 6 PM.",
                team: "We have a skilled team of developers, designers, and IT consultants ready to assist you.",
                technologies: "We specialize in JavaScript, Python, React, Node.js, AWS, and more.",
                portfolio: "You can check our portfolio on our website under the 'Portfolio' section.",
                hello: "Hello! How can I help you today?",
                hi: "Hi there! How's your day going?",
                hey: "Hey! Need any assistance?",
                bye: "Goodbye! Have a great day!",
                thanks: "You're welcome!",
                joke: "Why don’t skeletons fight each other? Because they don’t have the guts! 😂",
                weather: "I'm not connected to live weather data, but I hope it's nice where you are!",
                time: "I don't have a clock, but you can check your device for the current time!",
                "good morning": "Good morning! Hope you have a wonderful day!",
                "good night": "Good night! Sleep well and take care.",
                "how are you": "I'm just a bot, but I'm doing great! How about you?"
            };
            

            
            let response = "I am a simple chatbot. How can I assist you?";
            
            // **Exact word matching**
            let words = message.split(" "); // Split input into words
            for (let key of Object.keys(responses)) {
                if (words.includes(key) || message === key) {
                    response = responses[key];
                    break; // Stop checking once a match is found
                }
            }

            // Add chatbot response with delay
            setTimeout(() => {
                let botMessage = document.createElement('div');
                botMessage.className = 'text-left text-gray-300 mb-2';
                botMessage.textContent = response;
                chatBox.appendChild(botMessage);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 500);

            // Clear input field
            inputField.value = '';
        }
    }
});