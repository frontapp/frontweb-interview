import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ctaCustomBlock',
  title: 'CTA Custom',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
    defineField({name: 'link', title: 'Link', type: 'ctaLink'}),
  ],
})
