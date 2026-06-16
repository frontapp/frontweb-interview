import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ctaDownloadBlock',
  title: 'CTA Download',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'previewImage', title: 'Preview Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
    defineField({
      name: 'downloadAsset',
      title: 'Download Asset',
      type: 'file',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
