import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const buttonPair = defineType({
  name: 'buttonPair',
  title: 'Button Pair',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: ['filledOutline', 'filledTertiary'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'firstButton',
      title: 'First Button',
      type: 'button',
    }),
    defineField({
      name: 'hasSecondButton',
      title: 'Has Second Button',
      type: 'boolean',
    }),
    defineField({
      name: 'secondButton',
      title: 'Second Button',
      type: 'button',
      hidden: ({parent}) => parent?.hasSecondButton === false,
    }),
  ],
  preview: {
    select: {
      title: 'firstButton.buttonText',
      subtitle: 'variant',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Untitled Button Pair',
        subtitle: subtitle || 'Button Pair',
      }
    },
  },
})