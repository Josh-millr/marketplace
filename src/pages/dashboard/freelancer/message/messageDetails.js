import { useContext, useEffect, useState } from 'react';
import { Container,  Paper, Stack, Input, Button, Avatar, Divider, Text } from '@mantine/core';
import { ConversationContext } from '@/context/ConversationContext';
import { useStyles } from '../style.message';
import { IconPlus, IconSend } from '@tabler/icons-react';

export default function MessageDetails() {
    const { classes } = useStyles();
    const [messageInput, setMessageInput] = useState('');
    const { conversation, message, setMessage } = useContext(ConversationContext);
    const { sender, service, chatHistory, timestamp } = conversation;
  

    const handleSend = () => {
      sendMessage();
    };

    useEffect(() => {
        setMessage(chatHistory);
      }, [conversation]);
    
      const sendMessage = () => {
        if (messageInput.trim() !== '') {
          const newMessage = {
            "me": true,
            "message": messageInput,
            "timestamp": new Date(),
          };
          setMessage([...message, newMessage]);
          setMessageInput('');
        } 
      };
    
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          sendMessage();
        }
      };
    
      const handleMediaUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const newMessage = {
            "me": true,
            "media": URL.createObjectURL(file),
            "timestamp": new Date(),
            "type": file.type,
          };
          setMessage([...message, newMessage]);
        }
      };
  
      const getTimeAgo = (timestamp) => {
        const now = new Date();
        const diffInMinutes = Math.round((now - new Date(timestamp)) / (1000 * 60));
      
        if (diffInMinutes <= 0) {
          return `${Math.abs(diffInMinutes)}m ago`;
        } else if (diffInMinutes < 60) {
          return `${diffInMinutes}m ago`;
        } else if (diffInMinutes < 24 * 60) {
          const diffInHours = Math.floor(diffInMinutes / 60);
          const remainingMinutes = diffInMinutes % 60;
          return `${diffInHours}h ${remainingMinutes}m ago`;
        } else {
          const diffInDays = Math.floor(diffInMinutes / (24 * 60));
          return `${diffInDays}d ago`;
        }
      };
      
      const getLastMessageTime = () => {
        const lastMessage = chatHistory[chatHistory.length - 1];
        if (lastMessage) {
          const timestamp = new Date(lastMessage.timestamp);
          const hours = timestamp.getHours();
          const minutes = timestamp.getMinutes();
          const ampm = hours >= 12 ? 'pm' : 'am';
          const formattedHours = hours % 12 || 12;
          const formattedMinutes = minutes.toString().padStart(2, '0');
          return `${formattedHours}:${formattedMinutes}${ampm}`;
        }
        return '';
      };
      
    const handleViewProject = () => {
      // Handle view project action
      console.log('View project clicked');
    };
  
    const handleDeleteConversation = () => {
      setMessage([]);
      console.log('Delete conversation clicked');
    };
  


  return (
    <Container>
        <Stack style={{ display: 'flex', flexDirection: "column", marginBottom: '16px', marginTop: '2px'}}>
       
            <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginBottom: '4px' }}>
                <div className={classes.chatAvatarContainer}>
                    <Avatar className={classes.chatAvatar} size="md" src={sender.avatar} alt={sender.name} />
                </div>
                <div style={{ display: 'flex', flexDirection: "column", marginBottom: '4px' }}>
                    <Text weight={500} style={{fontSize: '20px' }}>
                    {sender.name}
                    </Text>
                    <Text weight={500} style={{opacity: '50%', fontSize: '16px' }}>
                    {getLastMessageTime()}
                    </Text>
                </div>
            </div>
            <Text weight={500} style={{ marginLeft: '12px', opacity: '50%' }}>
                {service}
            </Text>
        </Stack>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px', justifyContent: 'space-between' }}>
            <Button
            variant="subtle"
            color="green"
            className={classes.icon}
            onClick={handleViewProject}
            style={{ textDecoration: 'underline', textDecorationColor: 'green' }}
            >
            <Text color="green">View Project</Text>
            </Button>
            <Button
            variant="subtle"
            color="red"
            className={classes.icon}
            onClick={handleDeleteConversation}
            style={{ textDecoration: 'underline', textDecorationColor: 'red' }}
            >
            <Text color="red">Delete conversation</Text>
            </Button>
        </div>
        
        <Divider color="gray" style={{ marginTop: '16px', marginBottom: '20px' }} />

        <Paper className={classes.chatContainer}>
            <div>
            {message.map((chat, index) => (
                <div style={{ marginBottom: '8px' }} key={index}>
                <div
                    className={`${classes.messageContainer} ${
                    chat.me ? classes.userMessage : classes.senderMessage
                    }`}
                >
                    {chat.me ? (
                    <div className="flex">
                        {chat.media && (
                        <div className={classes.userMessageMedia}>
                        {typeof chat.media === 'string' && chat.media.startsWith('blob:') && (
                        <img
                            src={chat.media}
                            alt="Media"
                            className={`${classes.userMediaImage} ${classes.userMessageText}`}
                        />
                        )}
                        {typeof chat.media === 'string' && chat.media.startsWith('data:') && (
                        <video
                            src={chat.media}
                            controls
                            className={`${classes.userMediaVideo} ${classes.userMessageText}`}
                        />
                            )}
                        {typeof chat.media === 'string' && chat.media.endsWith('.pdf') && (
                        <div className={classes.userMediaPDF}>
                            <embed
                            src={chat.media}
                            type="application/pdf"
                            width="100%"
                            height="500px"
                            />
                        </div>
                        )}
                    </div>
                        )}
                        {chat.message && (
                        <div className={`${classes.userMessage} ${classes.messageText}`}>
                            <Text>{chat.message}</Text>
                        </div>
                        )}
                        <div className={classes.timestamp}>{getTimeAgo(chat.timestamp)}</div>
                    </div>
                    ) : (
                    <div>
                        {chat.media && (
                        <div className={classes.senderMessageMedia}>
                            {typeof chat.media === 'string' && chat.media.startsWith('blob:') && (
                            <>
                                {chat.media.startsWith('blob:image/') && (
                                <img
                                    src={chat.media}
                                    alt="Media"
                                    className={`${classes.senderMediaImage} ${classes.messageText}`}
                                />
                                )}
                                {chat.media.startsWith('blob:video/') && (
                                <video
                                    src={chat.media}
                                    controls
                                    className={`${classes.senderMediaVideo} ${classes.messageText}`}
                                />
                                )}
                                {typeof chat.media === 'string' && chat.media.endsWith('.pdf') && (
                                <div className={classes.userMediaPDF}>
                                    <embed
                                    src={chat.media}
                                    type="application/pdf"
                                    width="100%"
                                    height="500px"
                                    />
                                </div>
                                )}
                            </>
                            )}
                        </div>
                        )}
                        {chat.message && (
                        <div className={`${classes.senderMessage} ${classes.messageText}`}>
                            <Text>{chat.message}</Text>
                        </div>
                        )}
                        <div className={classes.timestamp}>{getTimeAgo(chat.timestamp)}</div>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </div>
        </Paper>
        <div className={classes.inputContainer}>
            <Button variant="link" className={classes.icon}>
            <label htmlFor="media-upload">
                <IconPlus size={16} color='green' />
            </label>
            <input
                type="file"
                id="media-upload"
                accept="image/*, video/*, application/pdf" 
                style={{ display: 'none' }}
                onChange={handleMediaUpload}
            />
            </Button>
            <Input
            placeholder="Type a chat..."
            className={classes.input}
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
            onKeyDown={handleKeyDown}
            rightSection={
                <Button variant="link" className={classes.icon} onClick={handleSend}>
               <div style={{
                       backgroundColor: 'green',
                       borderRadius: '50%',
                       width: '25px',
                       height: '25px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}> <IconSend size={14} color='white'/> </div>
                </Button>
            }
            />
      </div>
    </Container>
  );
};


