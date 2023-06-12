/* eslint-disable prefer-destructuring */
export const BadgeTheme = {
  styles: (theme, params, { variant }) => {
    const root = {};

    switch (variant) {
      case 'filled':
        root.backgroundColor = theme.colors.brandPrimary[8];
        break;
      case 'light':
        root.backgroundColor = theme.colors.brandPrimary[2];
        break;
      default:
        root.backgroundColor = 'transparent';
        break;
    }

    return {
      root: {
        ...root,
      },

      inner: {
        textTransform: 'uppercase',
      },
    };
  },
};
