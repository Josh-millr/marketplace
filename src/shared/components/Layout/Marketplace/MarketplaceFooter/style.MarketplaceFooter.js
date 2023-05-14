import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  ul: {
    margin: 0,
    padding: 0,
    display: 'grid',
    listStyleType: 'none',
  },

  innerTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.neutral[3]}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  innerBottom: {
    borderTop: `1px solid ${theme.colors.neutral[3]}`,
    padding: `${theme.spacing.lg} 0px`,
  },

  logoWrapper: {
    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      placeContent: 'center',
    },
  },

  rightCalloutWrapper: {
    display: 'flex',
    placeContent: 'end',
    [theme.fn.smallerThan('sm')]: {
      placeContent: 'center',
    },
  },
}));
