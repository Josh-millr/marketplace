export const ChipTheme = {
  styles: (theme) => ({
    label: {
      fontFamily: theme.other.fontRule.label.fontFamily,
      ...theme.other.fontRule.label.sizes.sm,
      color: 'green',
    },
  }),
};
