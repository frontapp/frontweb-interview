import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA (Inline)',
  type: 'object',
  fields: [
    defineField({name: 'primary', title: 'Primary CTA', type: 'ctaLink', validation: (Rule) => Rule.required()}),
    defineField({name: 'secondary', title: 'Secondary CTA', type: 'ctaLink'}),
    defineField({
      name: 'primaryCtaType',
      title: 'Primary CTA Type',
      type: 'string',
      options: {list: [{title: 'Button', value: 'button'}, {title: 'Text Link', value: 'text'}]},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'horizontalAlignment', title: 'Horizontal Alignment', type: 'horizontalAlignment'}),
  ],
})
