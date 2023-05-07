const globalStylesThemes = (theme) => ({
  // Global styles goes in here

  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '.display-sm': theme.other.font.display.size[0],
  '.display-md': theme.other.font.display.size[1],
  '.display-lg': theme.other.font.display.size[2],
  '.display-xl': theme.other.font.display.size[3],

  '.title-sm': theme.other.font.title.size[0],
  '.title-md': theme.other.font.title.size[1],
  '.title-lg': theme.other.font.title.size[2],
  '.title-xl': theme.other.font.title.size[3],
  '.title-[2xl]': theme.other.font.title.size[3],
  '.title-[3xl]': theme.other.font.title.size[3],

  '.subtitle-sm': theme.other.font.subtitle.size[0],
  '.subtitle-md': theme.other.font.subtitle.size[1],
  '.subtitle-lg': theme.other.font.subtitle.size[2],
  '.subtitle-xl': theme.other.font.subtitle.size[3],

  '.h1': theme.other.font.heading.size[0],
  '.h2': theme.other.font.heading.size[1],
  '.h3': theme.other.font.heading.size[2],
  '.h4': theme.other.font.heading.size[3],

  '.sub-h1': theme.other.font.subheading.size[0],
  '.sub-h2': theme.other.font.subheading.size[1],
  '.sub-h3': theme.other.font.subheading.size[2],
  '.sub-h4': theme.other.font.subheading.size[3],

  '.body-sm': theme.other.font.body.size[0],
  '.body-md': theme.other.font.body.size[1],

  '.button-sm': theme.other.font.button.size[0],
  '.button-md': theme.other.font.button.size[1],
  '.button-lg': theme.other.font.button.size[2],

  '.label-sm': theme.other.font.label.size[0],
  '.label-md': theme.other.font.label.size[1],
  '.label-lg': theme.other.font.label.size[2],
  '.label-xl': theme.other.font.label.size[3],

  '.link-sm': theme.other.font.link.size[0],
  '.link-md': theme.other.font.link.size[1],

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  ul: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  },
});

export default globalStylesThemes;
