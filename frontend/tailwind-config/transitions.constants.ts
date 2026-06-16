export const TIMING_FUNCTIONS = {
  'DEFAULT': 'cubic-bezier(0.16, 1, 0.3, 1)',
  'appear': 'cubic-bezier(0.16, 1, 0.3, 1)',
  'in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  'in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  'in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
  'in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
  'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
  'in-back': 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  'out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
  'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
  'out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  'out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
  'in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
  'in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
  'in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
  'in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

export const TRANSITION_DURATIONS = {
  100: '100ms',
  200: '200ms',
  300: '300ms',
  400: '400ms',
  500: '500ms',
  600: '600ms',
  700: '700ms',
  800: '800ms',
  900: '900ms',
  1000: '1000ms',
};

export const KEYFRAMES = {
  blogHeaderIn: {
    '0%': {
      'clip-path': 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      'opacity': '0',
    },
    '0.1%': {
      'clip-path': 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      'opacity': '1',
    },
    '100%': {
      'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      'opacity': '1',
    },
  },
};

export const ANIMATIONS = {
  'blog-header-fill-in': 'blogHeaderIn 0.5s cubic-bezier(1, 0, 0, 1) forwards',
  'blog-header-img-in': 'blogHeaderIn 0.5s cubic-bezier(1, 0, 0, 1) forwards 0.5s',
};
