import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.largerThan('md')]: {
      paddingTop: theme.spacing['4xl'],
      paddingBottom: theme.spacing['4xl'],
    },
  },
}));
