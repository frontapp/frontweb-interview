import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const textCombination = defineType({
  name: 'textCombination',
  title: 'Text Combination',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContentTextOnly',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eyebrow',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Text Combination',
        subtitle: 'Text Combination',
      }
    },
  },
})