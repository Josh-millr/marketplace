import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    borderBottom: `1px solid ${theme.colors.neutral[3]}`,
    padding: `${theme.spacing.xl}px 0px`,

    [theme.fn.largerThan('sm')]: {
      padding: `${theme.spacing.xl}px`,
    },
  },
}));
