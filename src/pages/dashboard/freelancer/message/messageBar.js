import React, { useState } from "react";
import conversations from "../../../../../jsonPlaceholder/data.json";
import { Avatar, Button, Text, TextInput } from "@mantine/core";
import MessageList from "./messageList";
import { IconMenu2, IconSearch, IconX } from "@tabler/icons-react";
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from "next/router";
import { useStyles } from "../style.message";

export default function MessageBar({ onConversationClick }) {
  const router = useRouter();
  const { classes } = useStyles();
  const isLargeScreen = useMediaQuery('(min-width: 75em)');
  const conversationsList = conversations.conversation_list;
  const [searchQuery, setSearchQuery] = useState('');
  const [showNavbar, setShowNavbar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleNavbarToggle = () => {
    setShowNavbar((prevShowNavbar) => !prevShowNavbar);
  };  
  const handleGoBack = () => {
    router.push('/dashboard/freelancer/');
  };

  const filteredConversationsList = searchQuery.length > 0
    ? conversationsList.filter((conversationList) => conversationList.sender.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : conversationsList;

  return (
      <>
        {isLargeScreen ? (
            <div style={{ display: "flex", flexDirection: "column", width: "480px", backgroundColor: "#ffffff", borderRight: "1px solid rgba(134,150,160,0.15)" }}>
                <div style={{ display: "flex", backgroundColor: "#ffffff", width: "100%", padding: "20px" }}>
                    <div style={{ position: "relative", width: "100%" }}>
                        <div>
                            <TextInput
                            icon={<IconSearch size="1rem" />}
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search"
                            />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", overflowY: "scroll", padding: "12px" }} id="conversation">
                    {filteredConversationsList.map((conversation, index) => (
                    <MessageList
                    key={index}
                    isFirstConversation={index === 0}
                    data={conversation}
                    onConversationClick={onConversationClick}
                    />
                    ))}
                </div>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", width: "100%", backgroundColor: "#ffffff", border: "1px solid rgba(134,150,160,0.15)" }}>
                {showNavbar ? (
                    <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '4px 16px',
                    }}
                    >
                    <div style={{ flex: '1', backgroundColor: '#ffffff', height: '56px', padding: '20px 0px' }}>
                        <div style={{ display: 'flex', cursor: 'pointer' }}>
                        <Button
                            variant="subtle"
                            color="green"
                            className={classes.icon}
                            onClick={handleGoBack}
                            style={{ textDecoration: 'underline', textDecorationColor: 'green' }}
                            >
                            <Text color="green">Go back</Text>
                            </Button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <div
                        style={{
                            display: 'flex',
                            cursor: 'pointer',
                            width: '40px',
                            height: '40px',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onClick={handleNavbarToggle}
                        >
                        <IconX />
                        </div>
                    </div>
                    </div>
                ) : (
                    <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '4px 16px',
                    }}
                    >
                    <div style={{ flex: '1', backgroundColor: '#ffffff', height: '56px', padding: '20px 0px' }}>
                        <div style={{ display: 'flex', cursor: 'pointer' }}>
                        <Text>Message Inbox</Text>
                        </div>
                    </div>
                    <div
                        style={{
                        display: 'flex',
                        gap: '8px',
                        cursor: 'pointer',
                        width: '40px',
                        height: '40px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}
                        onClick={handleNavbarToggle}
                    >
                        <IconMenu2 />
                    </div>
                    </div>
                )}
                <div style={{ display: "flex", backgroundColor: "#ffffff", width: "100%", padding: "8px" }}>
                    <div style={{ position: "relative", width: "95%" }}>
                        <div>
                            <TextInput
                            icon={<IconSearch size="1rem" />}
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search"
                            />
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: '100%', overflowY: "scroll" }} id="conversation">
                    {filteredConversationsList.map((conversation, index) => (
                    <MessageList
                    key={index}
                    isFirstConversation={index === 0}
                    data={conversation}
                    onConversationClick={onConversationClick}
                    />
                    ))}
                </div>
            </div>      
          )}
    </>
  );
}
