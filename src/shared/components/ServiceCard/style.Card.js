import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  image: {
    borderRadius: theme.radius.sm,
  },

  imgWrapper: {
    width: '100%',
    height: '192px',
    position: 'relative',
  },

  title: {
    fontWeight: '700!important',
  },

  titleHovered: {
    color: `${theme.colors.brandPrimary[6]}`,
    textDecoration: 'underline',
  },

  rating: {
    fontWeight: '500!important',
  },

  review: {
    color: theme.colors.neutral[6],
  },

  price: {
    fontWeight: '500!important',
  },

  name: {
    fontWeight: '500!important',
  },
}));
