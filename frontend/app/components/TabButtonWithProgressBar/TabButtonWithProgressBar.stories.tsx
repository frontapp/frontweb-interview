import { THEME_NAMES, ThemeNameType } from "@/tailwind-config/theme.constants";
import { Meta, StoryObj } from "@storybook/nextjs";
import { ComponentProps } from "react";
import { useState } from "storybook/internal/preview-api";
import ThemeWrapper from "../ThemeWrapper";
import TabButtonWithProgressBar, { TabButtonWithProgressBarProps } from "./index";

type StoryArgs = ComponentProps<typeof TabButtonWithProgressBar> & {
  theme?: ThemeNameType;
};

const meta: Meta<StoryArgs> = {
  title: 'Atoms/Tab Button with Progress Bar',
  component: TabButtonWithProgressBar,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      name: 'Theme',
      control: 'select',
      options: THEME_NAMES,
      description: 'Color theme - this normally comes from the parent component, shown here for demonstration purposes',
      table: {
        category: 'Theme',
      },
    },
    title: {
      control: 'text',
    },
  },
  render: (args: StoryArgs) => {
    const [isActive, setIsActive] = useState(false);
    const { theme, ...componentArgs } = args;
    const content = <TabButtonWithProgressBar {...componentArgs} isActive={isActive} onClick={() => setIsActive(!isActive)} />;

    return (
      <ThemeWrapper theme={theme || 'theme-white'} >
        <div className="surface-l0 flex justify-center px-md py-4xl">
          {content}
        </div>
      </ThemeWrapper>
    );
  },
};

export default meta;

export const Default: StoryObj<TabButtonWithProgressBarProps> = {
  args: {
    iconName: 'eye',
    title: 'Intuitive',
    isActive: false,
  },
};

export const OnDarkSurface: StoryObj<StoryArgs> = {
  args: {
    ...Default.args,
    theme: 'theme-dark-violet',
  },
};
