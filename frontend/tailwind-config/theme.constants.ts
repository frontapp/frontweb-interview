export const THEME_NAMES = ['theme-white', 'theme-gray', 'theme-dark-violet'] as const;
export type ThemeColorTokenName = keyof typeof THEME_COLOR_TOKENS;
export type ThemeNameType = (typeof THEME_NAMES)[number];

/*
 * These tokens get mapped by generateThemeUtilities() to create classes like:
 * [data-theme="theme-white"] .text-primary { color: #0d1d39; }
 * Generating them this way instead of putting them directly in .css files allows us to use
 * our color constants for the mapped values.
 *
 * Usage: Add the data-theme attribute to the parent element in the themed component
 * <div data-theme="theme-white">
 *   <div className="surface-l0">
 *     <p className="text-primary">Hello</p>
 *   </div>
 * </div>
 */
export const THEME_COLOR_TOKENS = {
  // TEXT
  'text-primary': {
    property: 'color',
    themes: {
      'theme-white': 'blue-900',
      'theme-gray': 'blue-900',
      'theme-dark-violet': 'blue-100',
    },
  },
  'text-secondary': {
    property: 'color',
    themes: {
      'theme-white': 'gray-700',
      'theme-gray': 'gray-700',
      'theme-dark-violet': 'violet-200',
    },
  },
  // SURFACES
  'surface-l0': {
    property: 'backgroundColor',
    themes: {
      'theme-white': 'white',
      'theme-gray': 'gray-100',
      'theme-dark-violet': 'violet-900',
    },
  },
  'surface-l1': {
    property: 'backgroundColor',
    themes: {
      'theme-white': 'gray-100',
      'theme-gray': 'white',
      'theme-dark-violet': 'violet-800',
    },
  },
  'surface-l1-active': {
    property: 'backgroundColor',
    themes: {
      'theme-white': 'violet-700',
      'theme-gray': 'violet-700',
      'theme-dark-violet': 'blue-100',
    },
  },
  /* BUTTONS */
  /* Filled button surfaces */
  'button-surface': {
    property: 'backgroundColor',
    themes: {
      'theme-white': 'violet-700',
      'theme-gray': 'violet-700',
      'theme-dark-violet': 'citron-500',
    },
  },
  'button-surface-active': {
    property: 'backgroundColor',
    themes: {
      'theme-white': 'violet-800',
      'theme-gray': 'violet-800',
      'theme-dark-violet': 'citron-700',
    },
  },
  'button-focus': {
    property: 'outlineColor',
    themes: {
      'theme-white': 'violet-900',
      'theme-gray': 'violet-900',
      'theme-dark-violet': 'white',
    },
  },
  /* Outline button borders and surfaces (surfaces only for active states) */
  'button-border': {
    property: 'boxShadow',
    cssValue: "inset 0 0 0 1px theme('colors.{color}')",
    themes: {
      'theme-white': 'violet-400',
      'theme-gray': 'violet-400',
      'theme-dark-violet': 'violet-400',
    },
  },
  'button-border-hover': {
    property: 'boxShadow',
    cssValue: "inset 0 0 0 1px theme('colors.{color}')",
    themes: {
      'theme-white': 'violet-700',
      'theme-gray': 'violet-700',
      'theme-dark-violet': 'violet-200',
    },
  },
  'button-surface-outline-hover': {
    property: 'backgroundColor',
    cssValue: "rgba(theme('colors.{color}'), 0.2)",
    themes: {
      'theme-white': 'violet-200',
      'theme-gray': 'violet-200',
      'theme-dark-violet': 'violet-200',
    },
  },
  'button-surface-outline-active': {
    property: 'backgroundColor',
    cssValue: "rgba(theme('colors.{color}'))",
    themes: {
      'theme-white': 'violet-200',
      'theme-gray': 'violet-200',
      'theme-dark-violet': 'violet-200',
    },
  },
  'button-text-outline-active': {
    property: 'color',
    themes: {
      'theme-white': 'blue-900',
      'theme-gray': 'blue-900',
      'theme-dark-violet': 'blue-900',
    },
  },
  /* Button texts - default/inverted used for filled/outlined buttons respectively */
  'button-text-default': {
    property: 'color',
    themes: {
      'theme-white': 'violet-100',
      'theme-gray': 'violet-100',
      'theme-dark-violet': 'blue-900',
    },
  },
  'button-text-inverted': {
    property: 'color',
    themes: {
      'theme-white': 'blue-900',
      'theme-gray': 'blue-900',
      'theme-dark-violet': 'white',
    },
  },
  // Tab button colors
  'button-surface-tab-hover': {
    property: 'backgroundColor',
    themes: {
      'theme-white': 'gray-100',
      'theme-gray': 'gray-100',
      'theme-dark-violet': 'violet-800',
    },
  },
  'button-text-tab': {
    property: 'color',
    themes: {
      'theme-white': 'gray-700',
      'theme-gray': 'gray-700',
      'theme-dark-violet': 'violet-300',
    },
  },
  'button-text-tab-active': {
    property: 'color',
    themes: {
      'theme-white': 'blue-900',
      'theme-gray': 'blue-900',
      'theme-dark-violet': 'blue-100',
    },
  },
  // ICONS
  'icon-brand': {
    property: 'color',
    themes: {
      'theme-white': 'blue-900',
      'theme-gray': 'blue-900',
      'theme-dark-violet': 'citron-500',
    },
  },
} as const satisfies Record<string, { property: string; themes: Record<ThemeNameType, string>; cssValue?: string }>;

export const THEME_DISPLAY_TOKENS = {
  // VISIBILITY
  'visible-dark-theme-only': {
    property: 'display',
    themes: {
      'theme-white': 'none',
      'theme-gray': 'none',
      'theme-dark-violet': 'block',
    },
  },
  'visible-light-theme-only': {
    property: 'display',
    themes: {
      'theme-white': 'block',
      'theme-gray': 'block',
      'theme-dark-violet': 'none',
    },
  },
  'visible-theme-white-only': {
    property: 'display',
    themes: {
      'theme-white': 'block',
      'theme-gray': 'none',
      'theme-dark-violet': 'none',
    },
  },
  'visible-theme-gray-only': {
    property: 'display',
    themes: {
      'theme-white': 'none',
      'theme-gray': 'block',
      'theme-dark-violet': 'none',
    },
  },
  'visible-theme-dark-violet-only': {
    property: 'display',
    themes: {
      'theme-white': 'none',
      'theme-gray': 'none',
      'theme-dark-violet': 'block',
    },
  },
} as const satisfies Record<string, { property: string; themes: Record<ThemeNameType, string> }>;
