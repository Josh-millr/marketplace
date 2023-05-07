import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    height: '100vh',
  },

  button_wrapper: {
    width: '100%',

    [theme.fn.largerThan('sm')]: {
      maxWidth: '240px',
    },
  },
}));
