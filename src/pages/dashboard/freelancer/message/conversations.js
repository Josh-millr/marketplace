import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from '@mantine/hooks';
import MessageDetails from './messageDetails';
import {  IconMenu2, IconX } from '@tabler/icons-react';
import {Text, Button } from '@mantine/core';
import { useStyles } from '../style.message';

export default function Conversations() {
  const router = useRouter();
  const { classes } = useStyles();
  const isLargeScreen = useMediaQuery('(min-width: 75em)');
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbarToggle = () => {
    setShowNavbar((prevShowNavbar) => !prevShowNavbar);
  };

  const handleGoBack = () => {
    router.reload();
  };
  

  return (
    <>
      {isLargeScreen ? (
        <>
          <MessageDetails />
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(134,150,160,0.15)',
          }}
        >
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
          <MessageDetails />
        </div>
      )}
    </>
  );
}
