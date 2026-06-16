import {defineField, defineType} from 'sanity'
import {StackIcon} from '@sanity/icons'

export const zigZag = defineType({
  name: 'zigZag',
  title: 'ZigZag',
  type: 'object',
  icon: StackIcon,
  fields: [
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'theme',
    }),
    defineField({
      name: 'textCombination',
      title: 'Text Combination',
      type: 'textCombination',
    }),
    defineField({
      name: 'zigZagItems',
      title: 'ZigZag Items',
      type: 'array',
      of: [{type: 'zigZagItem'}],
    }),
  ],
  preview: {
    select: {
      title: 'textCombination.title',
      subtitle: 'textCombination.eyebrow',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled ZigZag',
        subtitle: 'ZigZag',
      }
    },
  },
})