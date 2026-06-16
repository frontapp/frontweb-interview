import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ctaSmallBlock',
  title: 'CTA Small',
  type: 'object',
  fields: [
    defineField({name: 'theme', title: 'Theme', type: 'blogTheme'}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'ctaLink'}),
  ],
})
