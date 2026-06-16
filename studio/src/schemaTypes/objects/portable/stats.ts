import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'stats',
  title: 'Stats',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Statistics Items',
      type: 'array',
      of: [{type: 'statsItem'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
