import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: 0,
    width: '100%',
    borderRadius: 0,
    overflow: 'hidden',
    height: 'fit-content',
    borderTop: `1px solid ${theme.colors.neutral[4]}`,
    borderBottom: `1px solid ${theme.colors.neutral[4]}`,

    [theme.fn.largerThan('md')]: {
      borderRadius: theme.radius.sm,
    },
  },
}));
