import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const zigZagItem = defineType({
  name: 'zigZagItem',
  title: 'ZigZag Item',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'textCombination',
      title: 'Text Combination',
      type: 'textCombination',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'hasButtonPair',
      title: 'Has Button Pair',
      type: 'boolean',
    }),
    defineField({
      name: 'buttonPair',
      title: 'Button Pair',
      type: 'buttonPair',
      hidden: ({parent}) => parent?.hasButtonPair === false,
    }),
    defineField({
      name: 'checkListItems',
      title: 'Check List Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      title: 'textCombination.title',
      subtitle: 'textCombination.eyebrow',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled ZigZag Item',
        subtitle: 'ZigZag Item',
      }
    },
  },
})
