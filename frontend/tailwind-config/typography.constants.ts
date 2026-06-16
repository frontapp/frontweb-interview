export const MAX_FONT_SIZE = 300;

export const FONT_FAMILIES = {
  sans: [
    'Suisse Intl',
    'Helvetica Neue LT Std',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helvetica Neue',
    'Helvetica',
    'sans-serif',
  ],

  mono: ['Suisse Intl Mono', 'monospace'],

  serif: ['Suisse Works', 'Times New Roman', 'Georgia', 'serif'],
};

export const LEGACY_FONT_SIZES = {
  display1: [
    '62px',
    {
      lineHeight: '68px',
      letterSpacing: '-0.02em',
      fontWeight: '500',
    },
  ],
  display2: [
    '52px',
    {
      lineHeight: '62px',
      letterSpacing: '-0.02em',
      fontWeight: '500',
    },
  ],
  display3: [
    '42px',
    {
      lineHeight: '52px',
      letterSpacing: '-0.0175em',
      fontWeight: '500',
    },
  ],
  h1: [
    '36px',
    {
      lineHeight: '42px',
      letterSpacing: '-0.0175em',
      fontWeight: '500',
    },
  ],
  h2: [
    '30px',
    {
      lineHeight: '36px',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  h3: [
    '25px',
    {
      lineHeight: '30px',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  h4: [
    '20px',
    {
      lineHeight: '28px',
      letterSpacing: '0.0025em',
    },
  ],
  p1: [
    '20px',
    {
      lineHeight: '28px',
      letterSpacing: '0.0025em',
    },
  ],
  p2: [
    '17px',
    {
      lineHeight: '26px',
      letterSpacing: '0.0025em',
    },
  ],
  caption1: [
    '15px',
    {
      lineHeight: '21px',
      letterSpacing: '0.015em',
    },
  ],
  caption2: [
    '12px',
    {
      lineHeight: '16px',
      letterSpacing: '0.02em',
    },
  ],
  micro1: [
    '15px',
    {
      lineHeight: '21px',
      letterSpacing: '0.06em',
    },
  ],
  micro2: [
    '12px',
    {
      lineHeight: '16px',
      letterSpacing: '0.06em',
    },
  ],
  micro3: [
    '14.5px',
    {
      lineHeight: '20px',
      letterSpacing: '0.06em',
    },
  ],
  editorialLead: [
    '24px',
    {
      lineHeight: '36px',
      letterSpacing: '0.025em',
    },
  ],
  editorialP1: [
    '18px',
    {
      lineHeight: '32px',
      letterSpacing: '0.025em',
    },
  ],
  editorialP2: [
    '15px',
    {
      lineHeight: '22px',
    },
  ],
};

export const FONT_WEIGHTS = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
  // Numeric keys for utilities like font-500
  100: 100,
  200: 200,
  300: 300,
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
  900: 900,
};

export const LETTER_SPACING = {
  tight: '-0.02em',
  normal: '0',
  wide: '0.04em',
};

// Will evaluate to `text-*` classes
export const PRIMITIVE_TEXT_SIZES = {
  '12': '12px',
  '15': '15px',
  '16': '16px',
  '17': '17px',
  '20': '20px',
  '25': '25px',
  '30': '30px',
  '36': '36px',
  '40': '40px',
  '43': '43px',
  '48': '48px',
  '52': '52px',
  '62': '62px',
};

// Will evaluate to `leading-*` classes
export const PRIMITIVE_LINE_HEIGHTS = {
  '16': '16px',
  '21': '21px',
  '24': '24px',
  '28': '28px',
  '30': '30px',
  '36': '36px',
  '42': '42px',
  '46': '46px',
  '50': '50px',
  '52': '52px',
  '58': '58px',
  '62': '62px',
  '68': '68px',
};

// Will evaluate to `tracking-*` classes
export const PRIMITIVE_LETTER_SPACINGS = {
  'n125': '-1.25px',
  'n100': '-1px',
  'n75': '-0.75px',
  'n65': '-0.65px',
  'n45': '-0.45px',
  'n25': '-0.25px',
  '0': '0px',
  '25': '0.25px',
  '75': '0.75px',
  '100': '1px',
};

export const RESPONSIVE_FONT_WEIGHT_UTILITIES = {
  '.font-weight-regular': { '@apply font-400': {} },
  '.font-weight-medium': { '@apply font-500': {} },
  '.font-weight-bold': { '@apply font-600': {} },
};

export const RESPONSIVE_FONT_SIZE_UTILITIES = {
  '.font-size-d1': { '@apply text-48 md:text-62': {} },
  '.font-size-d2': { '@apply text-40 md:text-52': {} },
  '.font-size-d3': { '@apply text-36 md:text-43': {} },
  '.font-size-h1': { '@apply text-25 md:text-36': {} },
  '.font-size-h2': { '@apply text-20 md:text-30': {} },
  '.font-size-h3': { '@apply text-20 md:text-25': {} },
  '.font-size-h4': { '@apply text-20 md:text-20': {} },
  '.font-size-p1': { '@apply text-20 md:text-20': {} },
  '.font-size-p2': { '@apply text-16 md:text-16': {} },
  '.font-size-c1': { '@apply text-15 md:text-15': {} },
  '.font-size-c2': { '@apply text-12 md:text-12': {} },
  '.font-size-m1': { '@apply text-15 md:text-15': {} },
  '.font-size-m2': { '@apply text-12 md:text-12': {} },
};

export const RESPONSIVE_LINE_HEIGHT_UTILITIES = {
  '.font-line-height-d1': { '@apply leading-58 md:leading-68': {} },
  '.font-line-height-d2': { '@apply leading-50 md:leading-62': {} },
  '.font-line-height-d3': { '@apply leading-46 md:leading-52': {} },
  '.font-line-height-h1': { '@apply leading-30 md:leading-42': {} },
  '.font-line-height-h2': { '@apply leading-28 md:leading-36': {} },
  '.font-line-height-h3': { '@apply leading-28 md:leading-30': {} },
  '.font-line-height-h4': { '@apply leading-28 md:leading-28': {} },
  '.font-line-height-p1': { '@apply leading-28 md:leading-28': {} },
  '.font-line-height-p2': { '@apply leading-24 md:leading-24': {} },
  '.font-line-height-c1': { '@apply leading-21 md:leading-21': {} },
  '.font-line-height-c2': { '@apply leading-16 md:leading-16': {} },
  '.font-line-height-m1': { '@apply leading-21 md:leading-21': {} },
  '.font-line-height-m2': { '@apply leading-16 md:leading-16': {} },
};

export const RESPONSIVE_LETTER_SPACING_UTILITIES = {
  '.font-letter-spacing-d1': { '@apply tracking-n100 md:tracking-n125': {} },
  '.font-letter-spacing-d2': { '@apply tracking-n75 md:tracking-n100': {} },
  '.font-letter-spacing-d3': { '@apply tracking-n75': {} },
  '.font-letter-spacing-h1': { '@apply tracking-n25 md:tracking-n65': {} },
  '.font-letter-spacing-h2': { '@apply tracking-0 md:tracking-n45': {} },
  '.font-letter-spacing-h3': { '@apply tracking-0 md:tracking-n25': {} },
  '.font-letter-spacing-h4': { '@apply tracking-0': {} },
  '.font-letter-spacing-p1': { '@apply tracking-0': {} },
  '.font-letter-spacing-p2': { '@apply tracking-0': {} },
  '.font-letter-spacing-c1': { '@apply tracking-25': {} },
  '.font-letter-spacing-c2': { '@apply tracking-25': {} },
  '.font-letter-spacing-m1': { '@apply tracking-100': {} },
  '.font-letter-spacing-m2': { '@apply tracking-75': {} },
};
