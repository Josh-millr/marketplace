import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  link: {
    color: theme.colors.neutral[6],
    textDecoration: 'none',
    padding: '2px 0px',
    '&:hover': {
      color: theme.colors.neutral[8],
      textDecoration: 'underline',
    },
  },
}));
