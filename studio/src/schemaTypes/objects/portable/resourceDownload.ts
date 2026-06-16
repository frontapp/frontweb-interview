import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'resourceDownload',
  title: 'Resource Download',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Placeholder dummy field',
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: 'resource',
    //   title: 'Linked Downloadable Resource',
    //   type: 'reference',
    //   to: [{type: 'downloadableResource'}], // placeholder doc type
    //   validation: (Rule) => Rule.required(),
    // }),
  ],
})
