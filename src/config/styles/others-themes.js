import { ColorTokenCase } from '@/shared/utils/colorTokenCase';

// Other custom themes tokens goes here

// export const fontFamilyStack = `--font-dm-sans,
//  Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT",
//  "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L",
//  Tahoma, Geneva, "Helvetica Neue",  Helvetica, Arial, sans-serif`;

const otherThemes = {
  // Color Tokens should be accessed using index starting from [1] to [10]
  // with 1 representing the the lightest shade and 10 representing the darkest.
  colors: {
    neutral: new ColorTokenCase([
      '#FBFBFB',
      '#F2F2F3',
      '#E9EAEB',
      '#D7D9DB',
      '#C5C8CB',
      '#989EA3',
      '#3F4244',
      '#333638',
      '#282A2B',
      '#1D1E1F',
    ]).getCase(),

    brand: {
      primary: new ColorTokenCase([
        '#DCFDDB',
        '#B8FBBD',
        '#B8FBBD',
        '#75EB94',
        '#4ADE80',
        '#36BE75',
        '#259F6A',
        '#17805D',
        '#0E6A54',
        '#094739',
      ]).getCase(),
    },

    status: {
      success: new ColorTokenCase([
        '#F0FCD6',
        '#DDF9AC',
        '#BFED80',
        '#A1DC5C',
        '#77C62D',
        '#5CAA20',
        '#448E15',
        '#30720E',
        '#205E08',
        '#174206',
      ]).getCase(),

      danger: new ColorTokenCase([
        '#FFE1D7',
        '#FFBCB0',
        '#FF9088',
        '#FF6B6E',
        '#FF3A51',
        '#DB2A4F',
        '#B71D4B',
        '#931245',
        '#7A0B41',
        '#54082D',
      ]).getCase(),

      warning: new ColorTokenCase([
        '#FFF6CF',
        '#FFE9A0',
        '#FFD86F',
        '#FFC94B',
        '#FFAF12',
        '#DB8E0C',
        '#B77008',
        '#935405',
        '#7B4102',
        '#472601',
      ]).getCase(),

      info: new ColorTokenCase([
        '#D9DFFF',
        '#B2C0FF',
        '#8DA0FF',
        '#7185FE',
        '#425BFE',
        '#3044DB',
        '#2230B7',
        '#152093',
        '#0C157A',
        '#070C47',
      ]).getCase(),
    },

    decorative: {
      barbarianFlesh: new ColorTokenCase([
        '#FEF1DE',
        '#FDDFBD',
        '#FCC79B',
        '#F9B181',
        '#F78D59',
        '#D46841',
        '#B1472D',
        '#8F2B1C',
        '#821F19',
        '#761711',
      ]).getCase(),

      eastSide: new ColorTokenCase([
        '#F8EDFB',
        '#F0DCF8',
        '#DDC2EB',
        '#C6A9D9',
        '#A788C1',
        '#8363A4',
        '#63448A',
        '#452C70',
        '#3A2469',
        '#2F1A5B',
      ]).getCase(),

      mediumAquamarine: new ColorTokenCase([
        '#E1FDE7',
        '#C3FBD6',
        '#A2F3C8',
        '#87E8BD',
        '#61D8B0',
        '#46B99C',
        '#309B8B',
        '#1E7D79',
        '#196F73',
        '#126367',
      ]).getCase(),

      flatBlue: new ColorTokenCase([
        '#DBEFFA',
        '#B7DCF6',
        '#8DBEE6',
        '#689CCD',
        '#3C70AC',
        '#2B5794',
        '#1E407D',
        '#132C64',
        '#11275E',
        '#0B1F52',
      ]).getCase(),

      apricotSorbet: new ColorTokenCase([
        '#FDF5E2',
        '#FCE8C5',
        '#F7D5A7',
        '#F0C18D',
        '#E6A468',
        '#C57F4C',
        '#A55E34',
        '#864122',
        '#7A351A',
        '#6E2C12',
      ]).getCase(),

      tropicalTide: new ColorTokenCase([
        '#E1FCEB',
        '#C4F9DD',
        '#A3EECD',
        '#84DDBF',
        '#5FC7AE',
        '#44AA9C',
        '#2F8F8B',
        '#1E6F73',
        '#1A616E',
        '#125460',
      ]).getCase(),

      orangeville: new ColorTokenCase([
        '#FEECE0',
        '#FBD5C0',
        '#F7B79E',
        '#ED9883',
        '#E16C5B',
        '#C24843',
        '#A22E31',
        '#831D2A',
        '#78192C',
        '#6C1123',
      ]).getCase(),
    },
  },

  // Font Shorthand property in use
  // font: [font-style] [font-variant] [font-weight] [font-size]/[line-height]
  // [font-family] [letter-spacing]

  font: {
    // Link text is the text that is used to hyperlink to another page or
    // resource.It is usually underlined and a different color than the body
    // text to indicate it is clickable.It may use a slightly larger font size
    // than the body text to make it stand out
    link: {
      size: [
        { font: 'normal 400 14px/1.4 var(--dm-sans)' },
        { font: 'normal 400 16px/1.4 var(--dm-sans)' },
      ],
    },

    // label text is a piece of text that is used to identify or describe an
    // input field, a button, or any other UI element on a form or interface
    label: {
      size: [
        { font: 'normal 400 12px/1.4 var(--dm-sans)' },
        { font: 'normal 400 14px/1.4 var(--dm-sans)' },
        { font: 'normal 400 16px/1.4 var(--dm-sans)' },
        { font: 'normal 400 18px/1.4 var(--dm-sans)' },
      ],
    },

    // The body text is the main content of a page or section. It is usually
    // smaller and less prominent than headings and sub- headings, with a font
    // size that is easy to read for long periods of time.
    body: {
      size: [
        { font: 'normal 400 14px/1.4 var(--dm-sans)' },
        { font: 'normal 400 16px/1.4 var(--dm-sans)' },
      ],
    },

    // A button is a text element that is used to indicate an action or a call
    // to action on a web page.It may use a bold font weight and larger font size
    // than other text elements.
    button: {
      size: [
        { font: 'normal 600 12px/1.4 var(--dm-sans)' },
        { font: 'normal 600 14px/1.4 var(--dm-sans)' },
        { font: 'normal 600 16px/1.4 var(--dm-sans)' },
      ],
    },

    // A sub-heading is a text element that is used to provide additional
    // information and context to a heading.It is usually smaller and less
    // prominent than the heading, with a font size slightly smaller than the headings.
    subheading: {
      size: [
        { font: 'normal 600 16px/1.4 var(--dm-sans)' },
        { font: 'normal 600 18px/1.4 var(--dm-sans)' },
        { font: 'normal 600 22px/1.4 var(--dm-sans)' },
        { font: 'normal 600 24px/1.4 var(--dm-sans)' },
      ],
    },

    // A heading is a text element that is used to describe a specific section
    // or content on a page.It is typically larger and more prominent than the
    // body text, but smaller than titles and sub- titles.It may use a bold or
    // medium font weight, with a font size slightly smaller than the sub- titles.
    heading: {
      size: [
        { font: 'normal 600 24px/1.4 var(--dm-sans)' },
        { font: 'normal 600 32px/1.4 var(--dm-sans)' },
        { font: 'normal 600 40px/1.4 var(--dm-sans)' },
        { font: 'normal 600 48px/1.4 var(--dm-sans)' },
      ],
    },

    // A sub-title is a text element that is used to provide additional context
    // to a section.It is typically smaller and less prominent than the title and
    // heading, with a font size slightly smaller than the title
    subtitle: {
      size: [
        { font: 'normal 400 14px/1.4 var(--dm-sans)' },
        { font: 'normal 400 18px/1.4 var(--dm-sans)' },
        { font: 'normal 400 24px/1.4 var(--dm-sans)' },
        { font: 'normal 400 32px/1.4 var(--dm-sans)' },
      ],
    },

    // A title is a text element that is used to describe the content of a
    // section.It is usually larger and more prominent than sub- titles and
    // headings, but smaller than display text.It may use a bold font weight,
    // with a font size slightly larger than headings.
    title: {
      size: [
        { font: 'normal 600 18px/1.4 var(--dm-sans)' },
        { font: 'normal 600 24px/1.4 var(--dm-sans)' },
        { font: 'normal 600 32px/1.4 var(--dm-sans)' },
        { font: 'normal 600 40px/1.4 var(--dm-sans)' },
        { font: 'normal 600 48px/1.4 var(--dm-sans)' },
        { font: 'normal 600 56px/1.4 var(--dm-sans)' },
      ],
    },

    // Display is a large and prominent text element that is used for headings
    // and to capture the user's attention. It typically has a bold nd heavy font
    // weight, larger font size, and more generous letter spacing and line height
    // than other text elements.
    display: {
      size: [
        { font: 'normal 600 32px/1.4 var(--dm-sans)' },
        { font: 'normal 600 40px/1.4 var(--dm-sans)' },
        { font: 'normal 600 48px/1.4 var(--dm-sans)' },
        { font: 'normal 600 56px/1.4 var(--dm-sans)' },
      ],
    },
  },
};

export default otherThemes;
