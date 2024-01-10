// Definition of the Message interface
export interface Message {
  sender: string;     // Represents the sender of the message (e.g., 'user', 'server')
  text: string;       // Represents the text content of the message
  loading?: boolean;  // Optional property to indicate if the message is in a loading state
                      // (e.g., when waiting for a response from the server)
}
