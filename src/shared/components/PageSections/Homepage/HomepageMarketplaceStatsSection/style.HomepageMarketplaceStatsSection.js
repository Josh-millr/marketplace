import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  StatStripContainer: {
    width: '100%',
    paddingTop: theme.spacing['2xl'],
    paddingBottom: theme.spacing['2xl'],
    backgroundColor: theme.colors.neutral[1],
    borderBottom: `1px solid ${theme.colors.neutral[4]}`,

    [theme.fn.largerThan('md')]: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
  },
}));
