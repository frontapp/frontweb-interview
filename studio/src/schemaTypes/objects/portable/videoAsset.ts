import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'videoAsset',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'video',
      title: 'Video Asset',
      type: 'file',
      options: {accept: 'video/*'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'label', title: 'Video Label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'autoplay', title: 'Looping Video', type: 'boolean', initialValue: false}),
    defineField({name: 'roundedCorners', title: 'Rounded Corners', type: 'boolean', initialValue: false}),
  ],
})
