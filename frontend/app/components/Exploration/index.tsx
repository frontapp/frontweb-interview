import {Text} from '@/app/components/Text'
import {ThemeNameType} from '@/tailwind-config/theme.constants'
import Image from '@/app/components/SanityImage'
import {FC} from 'react'
import {FeatureItem, FeatureItemProps} from '../FeatureItem'
import Grid from '../Grid'
import ThemeWrapper from '../ThemeWrapper'
import {Exploration as ExplorationType} from '@/sanity.types'
export type ExplorationProps = {
  block: ExplorationType
  // theme: ThemeNameType;
  // title: string;
  // items: FeatureItemProps[];
  // imageSrc: string;
  // imageAlt: string;
}

export const Exploration: FC<ExplorationProps> = ({block}) => {
  const {theme, title, items, image} = block
  return (
    <ThemeWrapper theme={theme?.name || 'theme-white'}>
      <div className="surface-l0 py-margin-section-md">
        <Grid className="gap-y-2xl">
          <div className="col-span-4 md:col-span-12 ">
            <Text type="display3" className="text-primary">
              {title}
            </Text>
          </div>
          <div className="col-span-4 md:col-span-5 flex flex-col justify-center">
            {items?.map((item) => (
              <FeatureItem key={item.title} {...item} />
            ))}
          </div>
          <div className="col-span-4 md:col-span-6 md:col-start-7">
            {image && (
            <Image
              id={image?.asset?._ref}
              alt={image?.alt || ''}
              width={624}
                height={624}
                crop={image?.crop}
                mode="cover"
              />
            )}
          </div>
        </Grid>
      </div>
    </ThemeWrapper>
  )
}
