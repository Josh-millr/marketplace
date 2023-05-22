import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: 'fit-content',
    padding: theme.spacing.xl,

    [theme.fn.largerThan('md')]: {
      paddingTop: theme.spacing.lg,
      paddingBottom: theme.spacing.lg,
    },
  },
}));
