import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  nav: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  wrapper: {
    height: '54px',
    borderBottom: `1px solid ${theme.colors.neutral[2]}`,
  },

  label: {
    whiteSpace: 'nowrap',
  },
}));
