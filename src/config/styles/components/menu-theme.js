export const MenuTheme = {
  styles: (theme) => ({
    dropdown: {},

    item: {
      dipslay: 'flex',
      gap: theme.spacing.lg,
      padding: `${theme.spacing.sm} ${theme.spacing.lg}
      ${theme.spacing.sm} ${theme.spacing.lg}`,
    },

    itemIcon: {
      marginRight: 0,
    },
  }),
};
