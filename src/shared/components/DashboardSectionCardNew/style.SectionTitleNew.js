import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    width: '100%',
    height: 'fit-content',
    padding: `${theme.spacing.lg} 0px`,
    borderBottom: `1px solid ${theme.colors.neutral[3]}`,

    [theme.fn.largerThan('md')]: {
      padding: theme.spacing.lg,
    },
  },
}));
