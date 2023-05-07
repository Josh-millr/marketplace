import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  stepStripContainer: {
    width: '100%',
    paddingTop: theme.spacing['4xl'],
    paddingBottom: theme.spacing['4xl'],
    color: theme.colors.neutral[1],
    backgroundColor: theme.colors.brandPrimary[10],

    [theme.fn.largerThan('md')]: {
      paddingTop: theme.spacing['5xl'],
      paddingBottom: theme.spacing['5xl'],
    },
  },

  icon: {
    height: '24px',
    width: '24px',
    color: theme.colors.neutral[1],
  },

  stepCard: {
    paddingLeft: `${theme.spacing.xl}`,

    [theme.fn.largerThan('md')]: {
      paddingLeft: '0px',
    },
  },
}));
