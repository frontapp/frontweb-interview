export const GRID_COLUMNS = 12;
export const GRID_MAX_WIDTH = 1300;

export const RESPONSIVE_GRID_GUTTER_UTILITY = {
  '.gap-x-grid-gutter': {
    '@apply gap-x-grid-gutter-mobile md:gap-x-grid-gutter-desktop': {},
  },
};

export const SPACING = {
  // LEGACY Special spacing constants for backwards compatibility
  'container-mobile-modern': '12px',
  'container-mobile': '24px',
  'container-desktop': '96px',
  'gutter-mobile': '32px',
  'gutter-desktop': '24px',

  'header-height-mobile': '96px',
  'header-height-desktop': '80px',

  // Design system gutter spacing primitives
  'grid-gutter-mobile': '20px',
  'grid-gutter-desktop': '24px',

  // Design system spacing primitives
  'spacing-0': '0px',
  'spacing-2': '2px',
  'spacing-4': '4px',
  'spacing-8': '8px',
  'spacing-12': '12px',
  'spacing-16': '16px',
  'spacing-20': '20px',
  'spacing-24': '24px',
  'spacing-32': '32px',
  'spacing-40': '40px',
  'spacing-48': '48px',
  'spacing-64': '64px',
  'spacing-80': '80px',
  'spacing-120': '120px',
  'spacing-160': '160px',
};

export const WIDTHS = {
  'dimensions-192': '192px',
  'dimensions-300': '300px',
  'dimensions-348': '348px',
  'dimensions-408': '408px',
  'dimensions-430': '430px',
  'dimensions-516': '516px',
  'dimensions-624': '624px',
  'dimensions-732': '732px',
  'dimensions-840': '840px',
  'dimensions-1056': '1056px',
  'dimensions-1272': '1272px',
  'dimensions-1512': '1512px',
};

// Used in generateResponsiveSpacingUtilities() to format these primitives into specific classes like p-3xl, my-2xs, etc.
export const RESPONSIVE_SPACING_MAP = {
  'margin-section-md': { mobile: 'spacing-64', desktop: 'spacing-120' },
  'margin-section-lg': { mobile: 'spacing-80', desktop: 'spacing-160' },
  '4xl': { mobile: 'spacing-48', desktop: 'spacing-80' },
  '3xl': { mobile: 'spacing-40', desktop: 'spacing-64' },
  '2xl': { mobile: 'spacing-32', desktop: 'spacing-48' },
  'xl': { mobile: 'spacing-24', desktop: 'spacing-32' },
  'lg': { mobile: 'spacing-20', desktop: 'spacing-24' },
  'md': { mobile: 'spacing-16', desktop: 'spacing-20' },
  's': { mobile: 'spacing-16', desktop: 'spacing-16' },
  'xs': { mobile: 'spacing-12', desktop: 'spacing-12' },
  '2xs': { mobile: 'spacing-8', desktop: 'spacing-8' },
  '3xs': { mobile: 'spacing-4', desktop: 'spacing-4' },
  '4xs': { mobile: 'spacing-2', desktop: 'spacing-2' },
  'none': { mobile: 'spacing-0', desktop: 'spacing-0' },
};

/*
 * Width utilities - unlike the responsiveSpacingMap, these are already usable classes
 * These numbers correspond to grid column dimensions,
 * see https://www.figma.com/design/7lJPsq1DMhXcvhvG4d0OGm/Web-Design-System?node-id=3284-4883&t=coM8h9ENFj1FsZBt-0
 */

export const RESPONSIVE_WIDTH_UTILITIES = {
  '.w-2xs': { '@apply w-dimensions-348 md:w-dimensions-192': {} },
  '.w-xs': { '@apply w-dimensions-348 md:w-dimensions-300': {} },
  '.w-s': { '@apply w-dimensions-348 md:w-dimensions-408': {} },
  '.w-md': { '@apply w-dimensions-348 md:w-dimensions-516': {} },
  '.w-lg': { '@apply w-dimensions-348 md:w-dimensions-624': {} },
  '.w-xl': { '@apply w-dimensions-348 md:w-dimensions-732': {} },
  '.w-2xl': { '@apply w-dimensions-348 md:w-dimensions-840': {} },
  '.w-3xl': { '@apply w-dimensions-348 md:w-dimensions-1056': {} },
  '.w-4xl': { '@apply max-w-dimensions-348 md:max-w-dimensions-1272': {} },
  '.w-5xl': { '@apply w-dimensions-430 md:w-dimensions-1512': {} },
};

export const BORDER_RADIUS = {
  0: '0px',
  4: '4px',
  10: '10px',
  12: '12px',
  20: '20px',
  30: '30px',
  40: '40px',
  circle: '9999px',
  full: '100%',
};

export const ASPECT_RATIO = {
  square: '1 / 1',
  video: '1920 / 1080',
  book: '1 / 1.3',
  bookShort: '1 / 1.1',
};
