import { useContext } from "react";
import MessageBar from "./messageBar";
import { ConversationContext } from "@/context/ConversationContext";
import Image from "next/image";
import React, { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { PageContainer } from '@/shared/components/PageContainer';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { useStyles } from '../style.message';
import Conversations from "./conversations";

export default function Message() {
  const isLargeScreen = useMediaQuery('(min-width: 75em)');
  const [showMessageDetails, setShowMessageDetails] = useState(false);
  const { conversation, setConversation } = useContext(ConversationContext);
  const { classes } = useStyles();

  const IconHome = () => (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", paddingTop: '4rem' }}>
      <Image src="/logo/hamzry/PNG/messagingIcon.png" alt="Hamzry Messaging" width={500} height={300} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    <h1 style={{ color: "#e9edef", fontSize: "3xl", fontWeight: "light" }}>Hamzry Web</h1>
    <div style={{ display: "flex", flexDirection: "column", marginTop: "1rem", width: "11/12", textAlign: "center", color: "#8696a0", fontSize: "base", fontWeight: "light" }}>
      <h2>Keep your phone connected</h2>
      <h2>Connect with prospective clients. To reduce data usage, connect your phone to Wi-Fi</h2>
    </div>
    <div style={{ marginTop: "1.5rem", borderBottom: "1px solid rgba(134, 150, 160, 0.15)", width: "100%" }}></div>
    <div style={{ display: "flex", gap: "0.5rem", color: "#8696a0" }}>
      <svg viewBox="0 0 21 18" width="21" height="18">
        <path fill="currentColor" d="M10.426 14.235a.767.767 0 0 1-.765-.765c0-.421.344-.765.765-.765s.765.344.765.765-.344.765-.765.765zM4.309 3.529h12.235v8.412H4.309V3.529zm12.235 9.942c.841 0 1.522-.688 1.522-1.529l.008-8.412c0-.842-.689-1.53-1.53-1.53H4.309c-.841 0-1.53.688-1.53 1.529v8.412c0 .841.688 1.529 1.529 1.529H1.25c0 .842.688 1.53 1.529 1.53h15.294c.841 0 1.529-.688 1.529-1.529h-3.058z"></path>
      </svg>
      <span style={{ fontSize: "sm", fontWeight: "light" }}>Sent data and work on projects. <a href="https://www.hamzry.com/download" style={{ color: "#53bdeb" }}>Start now</a></span>
    </div>
  </div>
      
    </div>
  )


  const handleConversationClick = (data) => {
    setConversation(data);
    setShowMessageDetails(true);
  };

  return (
    <div style={{ backgroundColor: useMediaQuery(`(max-width:75em)`) ? '#ffffff' : '#F0EFEB' }}>
      <PageContainer.Dashboard layout="freelancer">
        <DashboardPageHeader title="Messages" />
        {isLargeScreen ? (
          <div style={{ display: 'flex',  justifyContent: 'center' }}>
            <div style={{ display: 'flex', width: '100%', gap: '30px', container: 'xl', height: '100%' }}>
              <MessageBar onConversationClick={handleConversationClick} />
              <div style={{ display: 'flex', width: '70%', backgroundColor: '#ffffff' }}>
                {conversation.sender ? <Conversations /> : <IconHome />}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {showMessageDetails ? (
              <div style={{ width: '100%', container: 'xl', padding: '8px' }}>
                <Conversations />
              </div>
            ) : (
              <div style={{ width: '100%', container: 'xl', padding: '4px' }}>
                <MessageBar onConversationClick={handleConversationClick} />
              </div>
            )}
          </div>
        )}
      </PageContainer.Dashboard>
    </div>
  );
}