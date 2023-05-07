export const BadgeTheme = {
  styles: (theme, params) => {
    let styleOveride = {
      root: {},
      inner: {},
    };

    switch (params.size) {
      case 'xs':
        styleOveride = {
          root: {
            padding: `${theme.spacing.sm} ${theme.spacing.xs}
             ${theme.spacing.sm} ${theme.spacing.xs}`,
          },
          inner: {
            ...theme.other.font.label.size[0],
          },
        };
        break;
      case 'sm':
        styleOveride = {
          root: {
            padding: `${theme.spacing.md} ${theme.spacing.sm}
            ${theme.spacing.md} ${theme.spacing.sm}`,
          },
          inner: {
            ...theme.other.font.label.size[0],
          },
        };
        break;
      case 'md':
        styleOveride = {
          root: {
            padding: `${theme.spacing.lg} ${theme.spacing.md}
            ${theme.spacing.lg} ${theme.spacing.md}`,
          },
          inner: {
            ...theme.other.font.label.size[0],
          },
        };
        break;
      case 'lg':
        styleOveride = {
          root: {
            padding: `${theme.spacing.xl} ${theme.spacing.lg}
            ${theme.spacing.xl} ${theme.spacing.lg}`,
          },
          inner: {
            ...theme.other.font.label.size[0],
          },
        };
        break;
      case 'xl':
        styleOveride = {
          root: {
            padding: `${theme.spacing['2xl']} ${theme.spacing.xl}
            ${theme.spacing['2xl']} ${theme.spacing.xl}`,
          },
          inner: {
            ...theme.other.font.label.size[0],
          },
        };
        break;
      default:
        break;
    }
    return {
      root: {
        ...styleOveride.root,
      },

      inner: {
        textTransform: 'initial',
        fontFamily: theme.other.font.label.size[0],
        ...styleOveride.inner,
      },
    };
  },
};
