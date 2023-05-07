import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    backgroundColor: theme.colors.barbarianFlesh[1],
    height: 'fit-content',

    [theme.fn.largerThan('lg')]: {
      maxWidth: '1154px',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: '40px',
    },
  },

  content: {
    paddingTop: theme.spacing['5xl'],
    paddingBottom: theme.spacing['5xl'],

    [theme.fn.largerThan('lg')]: {
      paddingLeft: '156px',
    },
  },
}));
