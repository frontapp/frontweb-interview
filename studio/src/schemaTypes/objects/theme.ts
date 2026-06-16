import {defineField, defineType} from 'sanity'
import {SunIcon} from '@sanity/icons'

export const theme = defineType({
  name: 'theme',
  title: 'Theme',
  type: 'object',
  icon: SunIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        list: [
          {title: 'Theme White', value: 'theme-white'},
          {title: 'Theme Gray', value: 'theme-gray'},
          {title: 'Theme Dark Violet', value: 'theme-dark-violet'},
        ],
        layout: 'dropdown',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Theme',
        subtitle: 'Theme',
      }
    },
  },
})
