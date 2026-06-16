import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import button from './objects/button'
import {blockContentTextOnly} from './objects/blockContentTextOnly'
import {theme} from './objects/theme'
import {textCombination} from './objects/textCombination'
import {zigZag} from './objects/zigZag'
import {zigZagItem} from './objects/zigZagItem'
import {buttonPair} from './objects/buttonPair'
import {featureItem} from './objects/featureItem'
import {exploration} from './objects/exploration'
import {icon} from './objects/icon'
import blogPost from './documents/blogPost'
import quote from './documents/quote'

// shared
import {horizontalAlignment, blogTheme, ctaLink, mediaType, statsItem, faqItem, carouselSlide} from './objects/portable/shared'

// portable objects
import image from './objects/portable/image'
import videoAsset from './objects/portable/videoAsset'
import youtubeVideo from './objects/portable/youtubeVideo'
import cta from './objects/portable/cta'
import resourceDownload from './objects/portable/resourceDownload'
import blockquoteLinked from './objects/portable/blockquoteLinked'
import blockquoteStandalone from './objects/portable/blockquoteStandalone'
import embed from './objects/portable/embed'
import hubspotFormModal from './objects/portable/hubspotFormModal'

// blog CTAs
import ctaEvergreenBlock from './objects/portable/ctaEvergreenBlock'
import ctaFullWidthBlock from './objects/portable/ctaFullWidthBlock'
import ctaCustomBlock from './objects/portable/ctaCustomBlock'
import ctaDownloadBlock from './objects/portable/ctaDownloadBlock'
import ctaSmallBlock from './objects/portable/ctaSmallBlock'

// blog content
import calloutInline from './objects/portable/calloutInline'
import pullQuote from './objects/portable/pullQuote'
import stats from './objects/portable/stats'
import media from './objects/portable/media'
import mediaCarousel from './objects/portable/mediaCarousel'
import faqBlock from './objects/portable/faqBlock'


// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/studio/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  blogPost,
  quote,

  // Objects
  button,
  blockContent,
  blockContentTextOnly,
  infoSection,
  callToAction,
  link,
  theme,
  textCombination,
  zigZag,
  zigZagItem,
  buttonPair,
  featureItem,
  exploration,
  icon,

  // shared
  horizontalAlignment,
  blogTheme,
  ctaLink,
  mediaType,
  statsItem,
  faqItem,
  carouselSlide,

  // base portable objects
  image,
  videoAsset,
  youtubeVideo,
  cta,
  resourceDownload,
  blockquoteLinked,
  blockquoteStandalone,
  embed,
  hubspotFormModal,

  // blog CTAs
  ctaEvergreenBlock,
  ctaFullWidthBlock,
  ctaCustomBlock,
  ctaDownloadBlock,
  ctaSmallBlock,

  // blog content
  calloutInline,
  pullQuote,
  stats,
  media,
  mediaCarousel,
  faqBlock,
]
