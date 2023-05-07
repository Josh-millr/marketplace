export const AvatarTheme = {
  styles: (theme, params) => {
    const { size } = params;
    let { root } = {};

    switch (size) {
      case 'xs':
        root = { width: 16, minWidth: 16, height: 16 };
        break;
      case 'sm':
        root = { width: 24, minWidth: 24, height: 24 };
        break;
      case 'md':
        root = { width: 32, minWidth: 32, height: 32 };
        break;
      case 'lg':
        root = { width: 40, minWidth: 40, height: 40 };
        break;
      case 'xl':
        root = { width: 48, minWidth: 48, height: 48 };
        break;
      default:
        root = { width: size, minWidth: size, height: size };
        break;
    }

    return {
      root: {
        ...root,
      },
    };
  },
};
