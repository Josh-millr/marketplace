import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: '0px 12px'
  },

  label: {
    whiteSpace: 'nowrap',
  },

  active: {
    borderBottom: `2px solid ${theme.colors.brandPrimary[6]}`,
  },

  inActive: {
    borderBottom: `1px solid ${theme.colors.neutral[2]}`,
  },
}));
