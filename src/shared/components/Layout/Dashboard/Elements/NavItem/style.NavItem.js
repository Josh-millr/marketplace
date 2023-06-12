import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, variant) => ({
  wrapper: {
    width: '100%',
  },

  root: {
    padding: `${theme.spacing.xl} ${theme.spacing.md}`,
    backgroundColor:
      variant === 'filled' ? theme.colors.blue[7] : 'transparent',
  },
}));
