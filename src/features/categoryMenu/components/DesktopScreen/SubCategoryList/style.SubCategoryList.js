import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'block',
  },

  subCategory: {
    backgroundColor: theme.colors.neutral[1],
    padding: `${theme.spacing.xl} 0px`,
  },
}));
