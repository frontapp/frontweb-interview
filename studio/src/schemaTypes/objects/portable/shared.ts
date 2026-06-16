import {defineType, defineField} from 'sanity'

export const horizontalAlignment = defineType({
  name: 'horizontalAlignment',
  title: 'Horizontal Alignment',
  type: 'string',
  options: {
    list: [
      {title: 'Left', value: 'left'},
      {title: 'Center', value: 'center'},
      {title: 'Right', value: 'right'},
    ],
    layout: 'radio',
  },
})

export const blogTheme = defineType({
  name: 'blogTheme',
  title: 'Theme',
  type: 'string',
  // Tighten this list once you confirm the Craft option values.
  options: {
    list: [
      {title: 'Default', value: 'default'},
      {title: 'Light', value: 'light'},
      {title: 'Dark', value: 'dark'},
      {title: 'Brand', value: 'brand'},
      {title: 'Accent', value: 'accent'},
    ],
  },
})

export const ctaLink = defineType({
  name: 'ctaLink',
  title: 'CTA Link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'href', title: 'URL', type: 'url'}),
    defineField({
      name: 'internalRef',
      title: 'Internal reference',
      type: 'reference',
      to: [{type: 'blogArticle'}], // refine to include other targets later
    }),
    defineField({name: 'openInNewTab', title: 'Open in new tab', type: 'boolean', initialValue: false}),
  ],
  validation: (Rule) =>
    Rule.custom((v) => {
      if (!v) return true
      if (!v.href && !v.internalRef) return 'Provide a URL or internal reference.'
      return true
    }),
})

export const mediaType = defineType({
  name: 'mediaType',
  title: 'Media Type',
  type: 'string',
  options: {
    list: [
      {title: 'Image', value: 'image'},
      {title: 'Video', value: 'video'},
    ],
    layout: 'radio',
  },
})

export const statsItem = defineType({
  name: 'statsItem',
  title: 'Statistics Item',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'description', title: 'Description', type: 'string'}),
  ],
})

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const carouselSlide = defineType({
  name: 'carouselSlide',
  title: 'Carousel Slide',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'caption', title: 'Caption', type: 'string'}),
  ],
})
