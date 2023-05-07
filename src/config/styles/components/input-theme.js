export const InputTheme = {
  styles: (theme, params) => {
    let variableStyles = {};

    switch (params.size) {
      case 'xs':
        variableStyles = {
          marginTop: theme.spacing.xs,
          marginBottom: theme.spacing.xs,
        };
        break;
      case 'sm':
        variableStyles = {
          marginTop: theme.spacing.sm,
          marginBottom: theme.spacing.sm,
        };
        break;
      case 'md':
        variableStyles = {
          marginTop: theme.spacing.md,
          marginBottom: theme.spacing.md,
        };
        break;
      default:
        variableStyles = {};
    }

    return {
      input: {
        ...variableStyles,
      },
    };
  },
};
