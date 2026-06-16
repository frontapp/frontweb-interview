import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blockquoteLinked',
  title: 'Blockquote (Linked)',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Associated Quotes',
      type: 'reference',
      to: [{type: 'quote'}], // placeholder quote library
      validation: (Rule) => Rule.required(),
    }),
  ],
})
