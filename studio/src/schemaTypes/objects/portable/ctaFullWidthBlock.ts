import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ctaFullWidthBlock',
  title: 'CTA Full Width',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'CTA Full Width Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'backgroundImage', title: 'Background Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'primaryButton', title: 'Primary Button', type: 'ctaLink'}),
    defineField({name: 'secondaryButton', title: 'Secondary Button', type: 'ctaLink'}),
  ],
})
