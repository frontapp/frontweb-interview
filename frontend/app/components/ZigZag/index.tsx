import Grid from "@/app/components/Grid";
import { TextCombination } from "@/app/components/TextCombination";
import ThemeWrapper from "@/app/components/ThemeWrapper";
import { ThemeNameType } from "@/tailwind-config/theme.constants";
import cn from "classnames";
import { FC } from "react";
import { ZigZagItem, ZigZagItemProps } from "./ZigZagItem";
import { ExtractPageBuilderType } from "@/sanity/lib/types";
import { ZigZag as ZigZagType } from "@/sanity.types";
import { PortableTextBlock } from "next-sanity";


export type ZigZagProps = {
  block: ZigZagType
};



const ZigZag: FC<ZigZagProps> = ({ block }) => {
  const {theme, textCombination, zigZagItems} = block;
  const {eyebrow, title, description} = textCombination || {};
  const hasHeading = eyebrow || title || description;
  return (
    <ThemeWrapper theme={theme?.name || "theme-white"}>
      <div className={cn(`surface-l0 pb-margin-section-md`, hasHeading ? 'pt-margin-section-lg' : '')}>
        {hasHeading &&
          <Grid>
            <div className="col-span-4 md:col-span-10 md:col-start-2 ">
              <TextCombination
                className="mx-auto"
                type="d2p1"
                align="center"
                headingLevel="h2"
                eyebrow={eyebrow || ''}
                title={title || ''}
                description={description as PortableTextBlock[]}
              />
            </div>
          </Grid>
        }
        {zigZagItems && zigZagItems.map((item, index) => (
          <ZigZagItem key={`zig-zag-${index}`}
            direction={index % 2 === 0 ? 'left' : 'right'}
            content={item} />
        ))}
      </div>
    </ThemeWrapper>
  );
};

export { ZigZag };
