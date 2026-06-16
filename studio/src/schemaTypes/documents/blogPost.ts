import {defineField, defineType} from 'sanity'
import {blogPortableText} from '../objects/blogPostPortableText'

export default defineType({
  name: 'blogArticle',
  title: 'Blog Article',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    // Craft: blogArticleContent (Vizy). We preserve this as Portable Text w/ custom objects.
    defineField({
      name: 'blogArticleContent',
      title: 'Blog Article Content',
      type: 'array',
      of: blogPortableText,
    }),
  ],
})