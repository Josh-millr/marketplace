import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    backgroundColor: '#F0EFEB',

    [theme.fn.largerThan('md')]: {
      padding: theme.spacing['4xl'],
    },
  },
}));
