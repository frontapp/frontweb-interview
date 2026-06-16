import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'mediaType',
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'video', title: 'Video', type: 'file', options: {accept: 'video/*'}}),
    defineField({name: 'caption', title: 'Caption', type: 'string'}),
  ],
  validation: (Rule) =>
    Rule.custom((v) => {
      if (!v) return true
      if (v.mediaType === 'image' && !v.image) return 'Select an image for Media Type = Image.'
      if (v.mediaType === 'video' && !v.video) return 'Select a video for Media Type = Video.'
      return true
    }),
})
