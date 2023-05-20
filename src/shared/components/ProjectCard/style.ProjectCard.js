import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    borderTop: `1px solid ${theme.colors.neutral['4']}`,
    borderBottom: `1px solid ${theme.colors.neutral['4']}`,
    padding: `${theme.spacing.xl} 0px`,
    borderRadius: 0,
    cursor: 'pointer',

    [theme.fn.largerThan('md')]: {
      padding: `${theme.spacing.xl} ${theme.spacing.xl}`,
      borderLeft: `1px solid ${theme.colors.neutral['4']}`,
      borderRight: `1px solid ${theme.colors.neutral['4']}`,
      borderRadius: theme.radius.md,

      ':hover': {
        backgroundColor: theme.colors.brandPrimary['1'],
        border: `1px solid ${theme.colors.brandPrimary['8']}`,
      },
    },
  },
}));
