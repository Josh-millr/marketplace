import { createContext, useState } from 'react';

const ConversationContext = createContext({});

const ConversationProvider = ({ children }) => {
  const [conversation, setConversationData] = useState({});
  const [message, setMessageData] = useState([]);

  function setConversation(conversation) {
    setConversationData(conversation);
  }

  function setMessage(message) {
    console.log(message);
    setMessageData(message);
  }

  return (
    <ConversationContext.Provider
      value={{
        conversation,
        message,
        setConversation,
        setMessage,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export { ConversationContext, ConversationProvider };
