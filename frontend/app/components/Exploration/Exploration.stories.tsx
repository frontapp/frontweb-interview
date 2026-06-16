import { THEME_NAMES, ThemeNameType } from "@/tailwind-config/theme.constants";
import { Meta, StoryObj } from "@storybook/nextjs";
import { ComponentProps } from "react";
import { Exploration, ExplorationProps } from ".";
import ThemeWrapper from "../ThemeWrapper";

type StoryArgs = ComponentProps<typeof Exploration> & {
  theme?: ThemeNameType;
};

const meta: Meta<ExplorationProps> = {
  title: "Components/Exploration",
  component: Exploration,
  argTypes: {
    theme: {
      control: "select",
      options: THEME_NAMES,
    },
    title: {
      control: "text",
    },
    imageSrc: {
      control: "text",
    },
    items: {
      control: "object",
    },
    imageAlt: {
      control: "text",
    },
  },
  render: (args) => (
    <ThemeWrapper theme={args.theme || "theme-white"}>
      <Exploration {...args} />
    </ThemeWrapper>
  ),
} satisfies Meta<StoryArgs>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: "theme-dark-violet",
    title: "Where industry complexity meets operational control",
    imageSrc: "https://front.com/assets/pages/homepage/home-operations.png",
    items: [
      {
        iconName: "briefcase-01",
        title: "Technology",
        link: "/",
      },
      {
        iconName: "briefcase-01",
        title: "Logistics",
        link: "/",
      },
      {
        iconName: "briefcase-01",
        title: "Professional Services",
        link: "/",
      },
      {
        iconName: "globe-01",
        title: "Financial Services",
        link: "/",
      },
      {
        iconName: "globe-04",
        title: "Manufacturing",
        link: "/",
      },
      {
        iconName: "marker-pin-01",
        title: "Travel",
        link: "/",
      },
    ],
  },
};
