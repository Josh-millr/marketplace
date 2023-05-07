import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 650,
    maxWidth: '694px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: theme.spacing['7xl'],
    paddingBottom: theme.spacing['7xl'],
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    marginBottom: theme.spacing.lg,
  },

  placeholder: {},
}));
