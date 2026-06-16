import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const featureItem = defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'icon',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link.href',
    },
  },
})