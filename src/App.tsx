import React, { useState } from 'react';
import ChatInput from './components/ChatInput';
import MessageDisplay from './components/MessageDisplay';
import axios from 'axios';
import { Message } from './interfaces/Message';
import './styles/App.css';

// Main App component as a functional component
const App: React.FC = () => {
  // State variables to manage messages, loading state, and errors
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // State for handling errors

  // Function to handle sending messages
  const handleSendMessage = async (newMessage: Message) => {
    try {
      // Update local state to include the new message
      setMessages(oldMessages => [...oldMessages, newMessage]);
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous error

      // Simulate server response delay
      const response = await axios.post('http://localhost:3001/chat/messages', newMessage);
      setTimeout(async () => {
        // Check the response status and update state accordingly
        if (response.status !== 201) {
          setError('There was an error sending your message.');
          return;
        }

        // Update state with the actual response data
        setMessages(oldMessages => [...oldMessages, response.data]);
        setIsLoading(false); // Set loading state to false
      }, 2000);
    } catch (error) {
      // Handle different types of errors and update state accordingly
      if (axios.isAxiosError(error)) {
        if (!error.response) {
          setError('Cannot reach the server. Please try again later.');
        } else {
          setError('There was an error sending your message.');
        }
      } else {
        setError('There was an unexpected error. Please try again.');
      }
      setIsLoading(false); // Set loading state to false
    }
  };

  // Render the main App component
  return (
    <div className='page-wrapper'>
      {/* Message display area */}
      <div className="messages-area">
        <MessageDisplay messages={messages} isLoading={isLoading} error={error} />
      </div>

      {/* Input area with ChatInput component */}
      <div className="input-area-wrapper">
        <div className="input-area">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default App;
