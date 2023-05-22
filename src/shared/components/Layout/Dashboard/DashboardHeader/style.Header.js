import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  imageWrapper: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },

  logo: {
    margin: 'auto',
    display: 'block',

    [theme.fn.largerThan('md')]: {
      marginLeft: '0px',
    },
  },

  burgerIcon: {
    margin: 'auto',
  }
}));
