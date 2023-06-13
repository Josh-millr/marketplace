export const ButtonTheme = {
  styles: (theme, params, { variant }) => {
    const root = {};
    let label = null;

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

    switch (params.size) {
      case 'sm':
        label = theme.other.font.button.size[0];
        break;
      case 'md':
        label = theme.other.font.button.size[1];
        break;
      case 'lg':
        label = theme.other.font.button.size[1];
        break;
      default:
        label = theme.other.font.button.size[1];
    }

    return {
      root: { ...root },
      label: { label },
    };
  },
};
