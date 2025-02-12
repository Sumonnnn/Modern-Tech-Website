document.getElementById('chatbot-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let inputField = document.getElementById('chatbot-input');
        let message = inputField.value.trim();
        
        if (message !== '') {
            let chatBox = document.getElementById('chatbot-messages');
            chatBox.innerHTML += `<div class="text-right text-blue-600 mb-2">${message}</div>`;
            
            // Simple responses
            let response = 'I am a simple chatbot. How can I assist you?';
            if (message.toLowerCase().includes('hello')) response = 'Hello! How can I help you today?';
            if (message.toLowerCase().includes('services')) response = 'We offer Web Development, Cloud Solutions, and Cybersecurity services.';

            setTimeout(() => {
                chatBox.innerHTML += `<div class="text-left text-gray-700 mb-2">${response}</div>`;
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 500);
            
            inputField.value = '';
        }
    }
});
