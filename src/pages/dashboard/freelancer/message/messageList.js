import React, { useContext } from 'react';
import { useStyles } from '../style.message';
import { Avatar, List, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const MessageList = (props) => {
  const { classes } = useStyles();
  const { data } = props;
  const { id, sender, service, chatHistory } = data;
  const isLargeScreen = useMediaQuery('(min-width: 75em)');
  

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
  return (
         <>
      {isLargeScreen ? (
        <List >
          <div key={id} >
            <List.Item
              key={id}
              spacing="lg"
              size="lg"
              center
              icon={
                <div className={classes.avatarContainer}>
                  <Avatar
                    src={sender.avatar}
                    alt={sender.name}
                    className={classes.avatar}
                  />
                </div>
              }
              className={classes.item}
              onClick={() => props.onConversationClick(data)}
            >
              <div
                style={{ display: 'flex' }}
              //  className={classes.profileContainer}
              >
                <div style={{ display: 'flex', flexDirection: 'column', width: '270px' }}>
                  <Text>{sender.name}</Text>
                  <Text className={classes.service}>{service}</Text>
                  <Text className={classes.message}>
                    {chatHistory[chatHistory.length - 1].message}
                  </Text>
                </div>
                  
                <div style={{ display: 'flex', flexDirection: 'column', width: 'auto' }}>
                  <Text>{getLastMessageTime()}</Text>
                  {data.unread && (
                    <div
                      style={{
                        backgroundColor: 'green',
                        borderRadius: '50%',
                        width: '10px',
                        height: '10px',
                        marginTop: '32px',
                        marginLeft: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </List.Item>
          </div>
        </List>
      ) : (
        <List >
        <div key={id} >
          <List.Item
            key={id}
            spacing="lg"
            size="lg"
            center
            icon={
              <div className={classes.avatarContainer}>
                <Avatar
                  src={sender.avatar}
                  alt={sender.name}
                  className={classes.avatar}
                />
              </div>
            }
            className={classes.item}
            onClick={() => props.onConversationClick(data)}
          >
            <div
              style={{ display: 'flex', justifyContent: 'space-between' }}
             //  className={classes.profileContainer}
            >
              <div style={{ display: 'flex', flexDirection: 'column', width: '170px' }}>
                <Text>{sender.name}</Text>
                <Text className={classes.service}>{service}</Text>
                <Text className={classes.message}>
                  {chatHistory[chatHistory.length - 1].message}
                </Text>
              </div>
             
              <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
                <Text>{getLastMessageTime()}</Text>
                {data.unread && (
                   <div
                     style={{
                       backgroundColor: 'green',
                       borderRadius: '50%',
                       width: '10px',
                       height: '10px',
                       marginTop: '32px',
                       marginLeft: '10px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}
                   ></div>
                 )}
              </div>
            </div>
          </List.Item>
        </div>
 </List>
      )}
      </>
       )
     };
     
     export default MessageList;