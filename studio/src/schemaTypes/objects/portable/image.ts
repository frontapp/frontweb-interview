import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'blogPortableTextImage',
  title: 'Blog Portable Text Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({name: 'caption', title: 'Image Caption', type: 'string'}),
    defineField({name: 'roundedCorners', title: 'Rounded Corners', type: 'boolean', initialValue: false}),
    defineField({name: 'horizontalAlignment', title: 'Horizontal Alignment', type: 'horizontalAlignment'}),
  ],
})
