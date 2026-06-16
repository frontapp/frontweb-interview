import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'youtubeVideo',
  title: 'YouTube Video',
  type: 'object',
  fields: [
    defineField({name: 'url', title: 'YouTube Video URL', type: 'url', validation: (Rule) => Rule.required()}),
    defineField({name: 'label', title: 'Video Label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
  ],
})
