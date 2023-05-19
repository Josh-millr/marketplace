import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    marginBottom: theme.spacing.xl,
    width: '100%',
    height: '200px',
    borderRadius: '0px',
    color: theme.colors.neutral[1],
    backgroundColor: theme.colors.brandPrimary[10],
    padding: `0px ${theme.spacing['3xl']}`,

    [theme.fn.largerThan('md')]: {
      padding: `0px ${theme.spacing['7xl']}`,
      width: '95%',
      margin: `${theme.spacing.xl} auto`,
      height: '240px',
      borderRadius: '24px',
    },
  },
}));
