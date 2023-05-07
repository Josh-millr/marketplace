import { createStyles } from '@mantine/core';

export const useStyle = createStyles((theme) => ({
  // Styles goes here...
  testimonialContainer: {
    paddingTop: theme.spacing['7xl'],
    paddingBottom: theme.spacing['7xl'],
    overflow: 'hidden',
  },

  authorImageContainer: {
  },

  avatar: {
    height: 'fit-content',
    width: 'fit-content',
    borderRadius: '9999px',
    padding: theme.spacing.xs,
  },

  activeAvatar: {
    border: `3px solid ${theme.colors.brandPrimary[5]}`,
  },
}));
