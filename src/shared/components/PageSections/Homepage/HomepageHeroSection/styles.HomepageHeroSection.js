import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  layer: {
    height: '480px',
    width: '480px',
    position: 'relative',
    overflowY: 'hidden',
    overflowX: 'hidden',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: theme.spacing['2xl'],

    [theme.fn.largerThan('md')]: {
      height: '480px',
      width: '480px',
      paddingTop: '0px',
    },

    [theme.fn.largerThan('lg')]: {},
  },

  layer1: {
    position: 'absolute',
    zIndex: '1',
    [theme.fn.largerThan('md')]: {
      height: 'inherit',
      width: 'inherit',
    },
  },

  overlay: {
    backgroundColor: theme.colors.barbarianFlesh[5],
    borderRadius: '9999px',
    height: '340px',
    width: '340px',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    top: '223px',
    [theme.fn.largerThan('md')]: {
      height: '480px',
      width: '480px',
    },
  },

  layer2: {
    position: 'absolute',
    zIndex: '3',
    overflowX: 'hidden',
    [theme.fn.largerThan('md')]: {
      height: 'inherit',
      width: 'inherit',
    },
  },

  layer3: {
    position: 'absolute',
    zIndex: '2',
    [theme.fn.largerThan('md')]: {
      height: 'inherit',
      width: 'inherit',
    },
  },

  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  bubbleContainer: {
    position: 'relative',
  },

  ratingContainer: {
    left: '20px',
    top: '220px',
  },

  projectContainer: {
    top: '302px',
    left: '230px',
  },

  bubbleSymbol: {
    display: 'flex',
    borderRadius: '9999px',
    position: 'absolute',
    zIndex: '1',
    height: '40px',
    width: '40px',
  },

  ratingSymbol: {
    backgroundColor: theme.colors.barbarianFlesh[5],
    display: 'flex',
  },

  projectSymbol: {
    backgroundColor: theme.colors.brandPrimary[7],
  },

  bubbleCard: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    borderRadius: '4px',
    padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    backgroundColor: theme.colors.neutral[1],
  },
}));
