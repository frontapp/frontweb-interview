import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faqBlock',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [{type: 'faqItem'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
