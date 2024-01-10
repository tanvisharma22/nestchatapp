import React, { useEffect, useRef } from 'react';
import '../styles/MessageDisplay.css';
import { Message } from '../interfaces/Message';

// Props interface for the MessageDisplay component
interface MessageDisplayProps {
  messages: Message[];   // Array of messages to display
  isLoading: boolean;    // Flag indicating whether data is loading
  error: string | null;  // Error message, if any
}

// MessageDisplay component as a functional component
const MessageDisplay: React.FC<MessageDisplayProps> = ({ messages, isLoading, error }) => {
  // Ref to the end of messages div for scrolling
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // useEffect to scroll to the end of messages when new messages are added
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Render the component
  if (messages.length === 0) {
    // Display a message when there are no messages
    return (
      <div className="no-message-wrapper">
        <div className="no-messages">No messages yet<br />Send a message to begin...</div>
      </div>
    );
  }

  // Display the messages, loading animation, and error message
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        // Display individual messages
        <div key={index} className={`message ${message.sender}`}>
          {message.sender === 'server' && (
            <div className="message-sender">AI Assistant:</div>
          )}

          {message.sender === 'user' && (
            <div className="message-sender">You:</div>
          )}
          {message.text}
        </div>
      ))}

      {isLoading && <div className="loading-animation">Waiting for server response...</div>}
      {error && <div className="error-message">{error}</div>}
      
      <div ref={endOfMessagesRef} /> {/* Empty div for scrolling to the end of messages */}
    </div>
  );
};

export default MessageDisplay;
