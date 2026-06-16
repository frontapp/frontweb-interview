import { THEME_NAMES, ThemeNameType } from "@/tailwind-config/theme.constants";
import { Meta, StoryObj } from "@storybook/nextjs";
import Image from "next/image";
import { ComponentProps } from "react";
import { useState } from "storybook/internal/preview-api";
import ThemeWrapper from "../ThemeWrapper";
import MobileCarouselItem from "./index";

type StoryArgs = ComponentProps<typeof MobileCarouselItem> & {
  theme?: ThemeNameType;
};

const meta: Meta<StoryArgs> = {
  title: 'Atoms/Mobile Carousel Item',
  component: MobileCarouselItem,
  argTypes: {
    theme: {
      control: 'select',
      options: THEME_NAMES,
    },
  },
  render: (args: StoryArgs) => {
    const [isActive, setIsActive] = useState(args.isActive);
    const { theme, ...componentArgs } = args;

    return (
      <ThemeWrapper theme={theme || 'theme-white'}>
        <div className="surface-l0 flex justify-center px-md py-4xl">
          <MobileCarouselItem {...componentArgs}
            isActive={isActive}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
      </ThemeWrapper>
    );
  },
};

export default meta;

export const Default: StoryObj<StoryArgs> = {
  args: {
    title: 'Fast, modern, and intuitive',
    description: 'Front helps your team work smarter—not harder—with a lightning-fast user experience that combines the familiarity of a shared inbox with the efficiency of ticketing.',
    theme: 'theme-white',
    image: <Image className="w-full" src="https://front.com/webassets/rebrand/bumper-image-2x.webp" alt="Image" width={100} height={100} />,
    iconName: 'globe-01',
  },
};

export const WithoutImage: StoryObj<StoryArgs> = {
  args: {
    title: 'Fast, modern, and intuitive',
    description: 'Front helps your team work smarter—not harder—with a lightning-fast user experience that combines the familiarity of a shared inbox with the efficiency of ticketing.',
    theme: 'theme-white',
    image: null,
  },
};

export const WithImageOnly: StoryObj<StoryArgs> = {
  args: {
    title: 'Fast, modern, and intuitive',
    description: null,
    theme: 'theme-white',
    image: <Image className="w-full" src="https://front.com/webassets/rebrand/bumper-image-2x.webp" alt="Image" width={100} height={100} />,
  },
};
