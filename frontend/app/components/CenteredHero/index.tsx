import { ThemeNameType } from "@/tailwind-config/theme.constants";
import Grid from "../Grid";
import { TextCombination } from "../TextCombination";
import ThemeWrapper from "../ThemeWrapper";
import BackgroundPattern from "./BackgroundPattern";

export type CenteredHeroProps = {
  theme?: ThemeNameType;
  eyebrow?: string;
  title: string;
  description?: string;
}

const CenteredHero = ({ theme, eyebrow, title, description }: CenteredHeroProps) => {
  return <ThemeWrapper theme={theme || "theme-white"}>
    <div className="surface-l0 -mt-header-height-mobile md:-mt-header-height-desktop pt-header-height-mobile md:pt-header-height-desktop relative">
      <Grid className=" py-margin-section-md relative z-10">
        <div className="col-span-4 md:col-span-6 md:col-start-4">
          <TextCombination
            type="d2p1"
            align="center"
            headingLevel="h1"
            eyebrow={eyebrow || ''}
            title={title || ''}
            description={description as string}
          />
        </div>
      </Grid>
      <div className="hidden xl:flex items-end justify-end absolute inset-0 h-full">
        <BackgroundPattern className="h-full w-auto" />
      </div>
    </div>
  </ThemeWrapper>;
};

export default CenteredHero;
