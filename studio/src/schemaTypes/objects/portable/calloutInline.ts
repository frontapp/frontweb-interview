import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'calloutInline',
  title: 'Callout Inline',
  type: 'object',
  fields: [
    defineField({name: 'theme', title: 'Theme', type: 'blogTheme'}),
    defineField({name: 'showLogo', title: 'Show Logo', type: 'boolean', initialValue: false}),
    defineField({name: 'showCta', title: 'Show CTA', type: 'boolean', initialValue: false}),
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
    defineField({name: 'ctaLink', title: 'CTA Link', type: 'ctaLink'}),
  ],
})
