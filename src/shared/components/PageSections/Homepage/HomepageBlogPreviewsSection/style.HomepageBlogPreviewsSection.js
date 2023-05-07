import { createStyles } from '@mantine/core';

export const useStyle = createStyles((theme) => ({
  insightContainer: {
    color: theme.colors.neutral[1],
    backgroundColor: theme.colors.brandPrimary[10],
    padding: `${theme.spacing['7xl']} 0px`,
  },

  insightCardImage: {
    height: '248px',
    width: '100%',
    position: 'relative',
  },
}));
