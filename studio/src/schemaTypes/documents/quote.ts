import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text', rows: 3, validation: (Rule) => Rule.required()}),
    defineField({name: 'authorName', title: 'Author Name', type: 'string'}),
    defineField({name: 'authorTitle', title: 'Author Title', type: 'string'}),
  ],
})