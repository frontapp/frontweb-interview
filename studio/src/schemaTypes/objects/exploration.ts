import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const exploration = defineType({
  name: 'exploration',
  title: 'Exploration',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'theme',    
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'featureItem'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Exploration',
        subtitle: 'Exploration',
      }
    },
  },
})