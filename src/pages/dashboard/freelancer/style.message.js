import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 650,
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: theme.spacing['2xl'],
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        marginLeft: 6,
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#000',
        marginTop: 25,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
    },
    chatAvatarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        width: 80,
        height: 80,
        borderRadius: '50%',
        backgroundColor: '#000',
        marginTop: 25,
    },
    chatAvatar: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.2s ease',
        padding: 4,
    '&:hover': {
      backgroundColor: theme.colors.green[0],
    },
        borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : 'rgba(0, 0, 0, 0.1)'}`,
    },
    profileContainer: {
        flex: 1,
        padding: 8,
        
    },
    name: {
        fontWeight: 'bold',
    },
    service: {
        color: theme.colors.green[9],
        textDecoration: 'underline',
        fontStyle: 'italic', 
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    message: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : 'rgba(0, 0, 0, 0.2)',
      paddingBottom: 4,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
    chatContainer: {
        display: 'flex',
        flexDirection: 'column-reverse', 
        gap: theme.spacing.lg,
        padding: theme.spacing.lg,
        backgroundColor: 'white',
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[0],
        borderRadius: theme.radius.md,
        maxHeight: '80vh',
        // width: '45vw',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: theme.colors.dark[5] + ' ' + theme.colors.dark[7],
        '&::-webkit-scrollbar': {
          width: 8,
        },
        '&::-webkit-scrollbar-track': {
          background: theme.colors.dark[7],
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: theme.colors.dark[5],
          borderRadius: 4,
        },
      },
      messageContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: theme.spacing.xs,
        flexDirection: 'row',
      },
      senderMessage: {
        justifyContent: 'flex-start',
      },
      userMessage: {
        justifyContent: 'flex-end',
      },
      messageText: {
        display: 'flex',
        backgroundColor: theme.colors.green[9],
        color: theme.colors.green[0],
        borderRadius: theme.radius.sm,
        padding: theme.spacing.lg,  
        fontWeight: 'bold',
      },
     
      inputContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing.xs,
        paddingBottom: '16px',
        marginTop: theme.spacing.md,
      },
      input: {
        flex: 1,
      },
      icon: {
        cursor: 'pointer',
        color: theme.colors.blue[6],
    },
    timestamp: {
        fontSize: '12px',
        color: 'gray',
        marginTop: '4px',
        clear: 'both',
        display: 'inline-block',
    },
    userMediaImage: {
      maxWidth: '100%',
      maxHeight: '300px',
      borderRadius: '4px',
    },
    userMediaVideo: {
      maxWidth: '100%',
      maxHeight: '300px',
      borderRadius: '4px',
    },
    userMediaPDF: {
      width: '100%',
      height: '600px',
      border: 'none',
    },
    mediaPDF: {
      width: '100%',
      height: '600px',
      border: 'none',
    },
    mediaImage: {
      maxWidth: '100%',
      maxHeight: '300px',
      borderRadius: '4px',
    },
    mediaVideo: {
      maxWidth: '100%',
      maxHeight: '300px',
      borderRadius: '4px',
    },
      
      
}));


