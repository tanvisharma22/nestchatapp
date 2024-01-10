import React, { useState } from 'react';
import { Message } from '../interfaces/Message'; // Importing the Message interface
import '../styles/ChatInput.css'; // Importing the styles for the ChatInput component

// Define the props interface for the ChatInput component
interface ChatInputProps {
  onSendMessage: (message: Message) => void; // Callback function to handle sending a message
}

// Define the ChatInput component as a functional component
const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  // State hook to manage the input value
  const [message, setMessage] = useState('');

  // Event handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (message.trim() !== '') {
      // Check if the message is not empty or just whitespace
      onSendMessage({ sender: 'user', text: message }); // Invoke the onSendMessage callback with the message object
      setMessage(''); // Clear the input field after sending the message
    }
  };

  // Render the ChatInput component
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        {/* Input field for typing the message */}
        <input
          type="text"
          className="input-box"
          placeholder="Enter your text here"
          value={message}
          autoFocus // Automatically focus on the input field when the component mounts
          onChange={(e) => setMessage(e.target.value)} // Update the message state on input change
        />
        {/* Button to submit the message */}
        <button className="round-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
