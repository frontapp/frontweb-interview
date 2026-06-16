import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'embed',
  title: 'Embed',
  type: 'object',
  fields: [
    defineField({
      name: 'provider',
      title: 'Provider',
      type: 'string',
      options: {
        list: [
          {title: 'Twitter', value: 'twitter'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'SlideShare', value: 'slideshare'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'embedCode',
      title: 'Embed Code',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
