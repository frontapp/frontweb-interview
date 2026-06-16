import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'mediaCarousel',
  title: 'Media Carousel',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'slides',
      title: 'Slides',
      type: 'array',
      of: [{type: 'carouselSlide'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
