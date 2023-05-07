import otherThemes, { fontFamilyStack } from './others-themes';
import ComponentThemes from './components-themes';
import globalStylesThemes from './globalStyles-themes';

// All global theme overides goes here

const themes = {
  // Defines color scheme for all components
  colorScheme: 'light',

  // Used for body and overlays (Modal, Popover) background when
  // `theme.colorScheme` is light
  white: otherThemes.colors.neutral[1],

  // Used as color for all text when `theme.colorScheme` is light
  black: otherThemes.colors.neutral[10],

  colors: {
    neutral: otherThemes.colors.neutral,
    brandPrimary: otherThemes.colors.brand.primary,

    // Decorative colors used purely for aesthetic purposes to enhance the
    // visual appeal of the interface, rather than conveying functional or
    // status- related information to the user.
    eastSide: otherThemes.colors.decorative.eastSide,
    flatBlue: otherThemes.colors.decorative.flatBlue,
    orangeville: otherThemes.colors.decorative.orangeville,
    tropicalTide: otherThemes.colors.decorative.tropicalTide,
    apricotSorbet: otherThemes.colors.decorative.apricotSorbet,
    barbarianFlesh: otherThemes.colors.decorative.barbarianFlesh,
    mediumAquamarine: otherThemes.colors.decorative.mediumAquamarine,

    // Status colors are used to indicate the current state and provide
    // visually feedback to the current state  of an element or action.
    info: otherThemes.colors.status.info,
    danger: otherThemes.colors.status.danger,
    warning: otherThemes.colors.status.warning,
    success: otherThemes.colors.status.success,
  },

  primaryShade: 7,
  primaryColor: 'brandPrimary',

  fontFamily: fontFamilyStack,
  // fontFamilyMonospace: 'Monaco, Courier, monospace', // No monospace font support

  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem', // 72px
    '8xl': '6rem', // 96px
    '9xl': '8rem', // 128px
  },

  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
    '3xl': '2.5rem', // 40px
    '4xl': '3rem', // 48px
    '5xl': '3.5rem', // 56px
    '6xl': '4rem', // 64px
    '7xl': '5rem', // 80px
    '8xl': '6rem', // 96px
    '9xl': '7rem', // 112px
  },

  breakpoints: {
    xs: '36em', // 576px
    sm: '48em', // 768px
    md: '62em', // 992px
    lg: '75em', // 1200px
    xl: '87.5em', // 1400px
  },

  globalStyles: globalStylesThemes,
  components: ComponentThemes,
  other: otherThemes,
};

export default themes;
