"use client"
import { useState } from 'react';

export default function ChatBot() {
    const [messages, setMessages] = useState([
      { id: 1, text: "Hello! Ask me anything about Kundan Kumar.", sender: "bot" },
      { id: 2, text: "Education", sender: "bot" },
        { id: 3, text: "Experience", sender: "bot" },

    ]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, { id: messages.length + 1, text: input, sender: "user" }]);
            // Simulate a response
            setMessages(prev => [...prev, { id: prev.length + 1, text: "I'm a chatbot created by Kundan to provide information about him.", sender: "bot" }]);
            setInput('');
        }
    };

    return (
        <div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
            <div className="overflow-y-auto h-80">
                {messages.map(message => (
                    <div key={message.id} className={`p-2 my-2 rounded-lg text-white ${message.sender === 'bot' ? 'bg-blue-500 ml-2' : 'bg-green-500 mr-2 self-end'}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded-lg"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded-lg ml-2"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
