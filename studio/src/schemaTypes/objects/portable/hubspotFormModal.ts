import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hubspotFormModal',
  title: 'Hubspot Form Modal',
  type: 'object',
  fields: [
    defineField({name: 'ctaText', title: 'CTA Text', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'modalHeading', title: 'Modal Heading', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'modalText', title: 'Modal Text', type: 'text', rows: 3}),
    defineField({
      name: 'hubspotFormId',
      title: 'Hubspot Form',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'hubspotCustomFields', title: 'Hubspot Form Custom Fields', type: 'text', rows: 6}),
    defineField({
      name: 'successCopy',
      title: 'Form Success Copy',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
