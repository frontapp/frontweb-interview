import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ctaEvergreenBlock',
  title: 'CTA Evergreen',
  type: 'object',
  fields: [
    defineField({name: 'theme', title: 'CTA Evergreen Theme', type: 'blogTheme'}),
    defineField({name: 'title', title: 'CTA Evergreen Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'image', title: 'CTA Evergreen Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'primaryButton', title: 'CTA Evergreen Primary Button', type: 'ctaLink'}),
    defineField({name: 'secondaryButton', title: 'CTA Evergreen Secondary Button', type: 'ctaLink'}),
  ],
})
