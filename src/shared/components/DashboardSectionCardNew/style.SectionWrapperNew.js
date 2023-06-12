import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
    marginTop: 24,
    marginBottom: 24,
    padding: 0,
    width: '100%',
    height: 'fit-content',
    borderTop: `1px solid ${theme.colors.neutral[4]}`,
    borderBottom: `1px solid ${theme.colors.neutral[4]}`,

    [theme.fn.largerThan('md')]: {
      borderRadius: theme.radius.sm,
    },
  },
}));
