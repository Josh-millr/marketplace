import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 650,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing['2xl'],
  },

  item: {
    marginBottom: theme.spacing.lg,
  },

  [theme.fn.largerThan('md')]: {
    padding: theme.spacing['4xl'],
    backgroundColor: '#F0EFEB',
  },
}));
