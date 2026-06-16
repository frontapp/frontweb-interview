import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pullQuote',
  title: 'Pull Quote',
  type: 'object',
  fields: [
    defineField({
      name: 'quoteText',
      title: 'Quote Text',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'authorName', title: 'Author Name', type: 'string'}),
    defineField({name: 'authorTitle', title: 'Author Title', type: 'string'}),
    defineField({name: 'authorImage', title: 'Author Image', type: 'image', options: {hotspot: true}}),
  ],
})
