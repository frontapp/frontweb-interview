import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blockquoteStandalone',
  title: 'Blockquote (Standalone)',
  type: 'object',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'authorName', title: 'Quotee Name', type: 'string'}),
    defineField({name: 'authorTitle', title: 'Quotee Title', type: 'string'}),
  ],
})
