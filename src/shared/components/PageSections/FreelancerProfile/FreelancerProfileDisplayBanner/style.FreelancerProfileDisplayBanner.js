import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    // marginBottom: `${theme.spacing.xl}px`,
    width: '100%',
    height: '200px',
    borderRadius: '0px',
    color: theme.colors.neutral[1],
    backgroundColor: theme.colors.brandPrimary[10],
    padding: '0px 64px',

    [theme.fn.largerThan('md')]: {
      padding: '0px 114px',
      width: '95%',
      margin: `${theme.spacing.xl} auto`,
      height: '240px',
      borderRadius: '24px',
    },

    [theme.fn.largerThan('lg')]: {
      padding: '0px 114px',
      width: '95%',
      margin: `${theme.spacing.xl} auto`,
      height: '240px',
      borderRadius: '24px',
    },
  },
}));
