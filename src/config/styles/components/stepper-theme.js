export const StepperTheme = {
  styles: (theme, params) => {
    // props Styles
    const propStyles = {
      stepLabel: {},
    };

    // Conditional Stying for `size` props
    switch (params.size) {
      case 'xs':
        propStyles.stepLabel = {
          ...theme.other.fontRule.label.sizes.sm,
        };
        break;
      case 'sm':
        propStyles.stepLabel = {
          ...theme.other.fontRule.label.sizes.md,
        };
        break;
      case 'md':
        propStyles.stepLabel = {
          ...theme.other.fontRule.label.sizes.lg,
        };
        break;
      default:
        propStyles.stepLabel = {
          ...theme.other.fontRule.label.sizes.md,
        };
        break;
    }

    return {
      stepBody: {
        display: 'none',
        [`@media (min-width: ${theme.breakpoints.sm})`]: {
          display: 'block',
        },
      },

      stepLabel: {
        fontFamily: theme.other.fontRule.label.fontFamily,
        fontWeight: 400,
        ...propStyles.stepLabel,
      },

      content: {
        padding: '0px',
      },

      steps: {
        padding: `${theme.spacing.lg} 0`,
        borderBottom: `solid 1px ${theme.colors.gray[2]}`,
      },
    };
  },
};
