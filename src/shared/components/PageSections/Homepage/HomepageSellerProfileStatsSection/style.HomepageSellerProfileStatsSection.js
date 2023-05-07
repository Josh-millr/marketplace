import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    [theme.fn.smallerThan('sm')]: {
      borderBottom: `1px solid ${theme.colors.neutral[3]}`,
      borderTop: `1px solid ${theme.colors.neutral[3]}`,
    },
  },
}));
