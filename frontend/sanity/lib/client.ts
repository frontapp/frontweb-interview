import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, studioUrl} from '@/sanity/lib/api'
import {token} from '@/sanity/lib/token'
import { THEME_NAMES, ThemeNameType } from '@/tailwind-config/theme.constants'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token, // Required if you have a private dataset
  stega: {
    logger: console,
    studioUrl,
    filter: (props) => {
      const value = props.value;
      if (THEME_NAMES.includes(value as ThemeNameType)) {
        return false
      }
      return props.filterDefault(props)
      // switch (value) {
      //   case 'theme-dark-violet':
      //     console.log('value is theme returning false');
      //     console.log(`value is ${value} returning props.filterDefault(props) ${props.filterDefault(props)}`);
      //     return false
      //   default:
      //     return props.filterDefault(props)
      //  }
    }
  },
  // stega: {enabled: false},
})
