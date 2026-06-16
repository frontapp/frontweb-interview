import { ButtonPair } from "@/app/components/ButtonPair";
import Grid from "@/app/components/Grid";
import { TextCombination } from "@/app/components/TextCombination";
import cn from "classnames";
import { CheckList } from "@/app/components/CheckList";
import { ZigZagItem as ZigZagItemType } from "@/sanity.types";
import Image from '@/app/components/SanityImage'
import { PortableTextBlock } from "next-sanity";

export type ZigZagItemProps = {
  direction?: 'left' | 'right';
  content: ZigZagItemType
};

const ZigZagItem = ({ direction = 'left', content }: ZigZagItemProps) => {
  const {textCombination, image, buttonPair, checkListItems, hasButtonPair} = content;
  const {eyebrow, title, description} = textCombination || {};
  const textColumnClassNames = direction === 'left' ? 'md:col-span-5 md:order-1' : 'md:col-span-5 md:col-start-8';
  const imageColumnClassNames = direction === 'left' ? 'md:col-span-6 md:col-start-7 md:order-2' : 'md:col-span-6';

  return (
    <div className="pt-margin-section-md">
      <Grid className="gap-y-spacing-48 md:gap-y-0">
        <div className={cn("col-span-4", imageColumnClassNames)}>
          {image && (
          <Image
            id={image.asset?._ref}
            alt={image.alt || ''}
            className="w-full h-full object-cover"
            width={500}
            crop={image.crop}
            mode="cover"
          />
          )}
        </div>
        <div className={cn("col-span-4 md:flex md:flex-col md:justify-center", textColumnClassNames)}>
          <TextCombination
            type="h2p2"
            align="left"
            headingLevel="h3"
            eyebrow={eyebrow || ''}
            title={title || ''}
            description={description as PortableTextBlock[]}
          />
          {hasButtonPair && buttonPair &&
            <ButtonPair className="mt-xl"
              variant={buttonPair.variant}
              hasSecondButton={buttonPair.hasSecondButton}
              firstButtonFunctionalityProps={buttonPair.firstButton}
              secondButtonFunctionalityProps={buttonPair.secondButton}
            />
          }
          {checkListItems &&
            <div className="pt-2xl">
              <CheckList items={checkListItems} />
            </div>
          }
        </div>
      </Grid >
    </div >
  );
};

export { ZigZagItem };
