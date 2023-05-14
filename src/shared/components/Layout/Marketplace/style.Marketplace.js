import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  main: {
    overflowX: 'hidden',
  },

  wrapper: {
    borderBottom: `1px solid ${theme.colors.neutral[2]}`,
  },
}));
