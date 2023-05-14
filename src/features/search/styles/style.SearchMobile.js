import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'block',

    [theme.fn.largerThan('lg')]: {
      display: 'none',
    },
  },
}));
