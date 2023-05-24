import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    borderBottom: `1px solid ${theme.colors.neutral[3]}`,
    '&:last-child': {
      borderBottom: 'none',
      marginBottom: 0,
    },
  },
}));
