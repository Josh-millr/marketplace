/* eslint-disable prefer-destructuring */
export const ButtonTheme = {
  styles(theme, params) {
    let labelFontRule;
    // let buttonVariantStyle;

    switch (params.size) {
      case 'sm':
        labelFontRule = theme.other.font.button.size[0];
        break;
      case 'md':
        labelFontRule = theme.other.font.button.size[1];
        break;
      case 'lg':
        labelFontRule = theme.other.font.button.size[1];
        break;
      default:
        labelFontRule = theme.other.font.button.size[1];
    }

    return {
      label: {
        ...labelFontRule,
      },
    };
  },
};
