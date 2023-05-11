import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  carouselWrapper: {
    display: 'flex',
    height: 320,
    width: '100%',

    [theme.fn.largerThan(558)]: {
      height: 420,
    },

    [theme.fn.largerThan(720)]: {
      height: 520,
    },

    [theme.fn.largerThan(960)]: {
      height: 580,
    },
  },

  imageWrapper: {
    position: 'relative',
  },
}));
