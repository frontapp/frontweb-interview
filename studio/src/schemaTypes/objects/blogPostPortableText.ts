import {defineArrayMember} from 'sanity'

// Base blocks (existing)
import blogPortableTextImage from './portable/image'
import videoAsset from './portable/videoAsset'
import youtubeVideo from './portable/youtubeVideo'
import cta from './portable/cta'
import resourceDownload from './portable/resourceDownload'

// Quotes
import blockquoteLinked from './portable/blockquoteLinked'
import blockquoteStandalone from './portable/blockquoteStandalone'

// Embeds (provider-specific but identical shape)
import embed from './portable/embed'

// Modals
import hubspotFormModal from './portable/hubspotFormModal'

// Blog CTAs (new WIP)
import ctaEvergreenBlock from './portable/ctaEvergreenBlock'
import ctaFullWidthBlock from './portable/ctaFullWidthBlock'
import ctaCustomBlock from './portable/ctaCustomBlock'
import ctaDownloadBlock from './portable/ctaDownloadBlock'
import ctaSmallBlock from './portable/ctaSmallBlock'

// Blog Content (new WIP)
import calloutInline from './portable/calloutInline'
import pullQuote from './portable/pullQuote'
import stats from './portable/stats'
import media from './portable/media'
import mediaCarousel from './portable/mediaCarousel'
import faqBlock from './portable/faqBlock'

export const blogPortableText = [
  // Rich text
  defineArrayMember({
    type: 'block',
    styles: [
      {title: 'Normal', value: 'normal'},
      {title: 'H2', value: 'h2'},
      {title: 'H3', value: 'h3'},
      {title: 'H4', value: 'h4'},
      {title: 'Quote', value: 'blockquote'},
    ],
    marks: {
      decorators: [
        {title: 'Strong', value: 'strong'},
        {title: 'Emphasis', value: 'em'},
        {title: 'Underline', value: 'underline'},
        {title: 'Code', value: 'code'},
      ],
      annotations: [
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {name: 'href', title: 'URL', type: 'url', validation: (Rule: any) => Rule.required()},
            {name: 'openInNewTab', title: 'Open in new tab', type: 'boolean', initialValue: false},
          ],
        },
      ],
    },
  }),

  // Inline “components” mirrored from Craft Vizy block handles
  defineArrayMember({type: blogPortableTextImage.name}),
  defineArrayMember({type: videoAsset.name}),
  defineArrayMember({type: youtubeVideo.name}),
  defineArrayMember({type: cta.name}),
  defineArrayMember({type: resourceDownload.name}),

  defineArrayMember({type: blockquoteLinked.name}),
  defineArrayMember({type: blockquoteStandalone.name}),

  // In Craft these are separate: twitter/linkedin/slideshare. We consolidate into one.
  defineArrayMember({type: embed.name}),

  defineArrayMember({type: hubspotFormModal.name}),

  // Blog CTAs (WIP)
  defineArrayMember({type: ctaEvergreenBlock.name}),
  defineArrayMember({type: ctaFullWidthBlock.name}),
  defineArrayMember({type: ctaCustomBlock.name}),
  defineArrayMember({type: ctaDownloadBlock.name}),
  defineArrayMember({type: ctaSmallBlock.name}),

  // Blog Content (WIP)
  defineArrayMember({type: calloutInline.name}),
  defineArrayMember({type: pullQuote.name}),
  defineArrayMember({type: stats.name}),
  defineArrayMember({type: media.name}),
  defineArrayMember({type: mediaCarousel.name}),
  defineArrayMember({type: faqBlock.name}),
]