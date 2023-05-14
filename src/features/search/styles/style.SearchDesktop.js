import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'none',

    [theme.fn.largerThan('lg')]: {
      display: 'block',
    },
  },
}));
