import { THEME_NAMES, ThemeNameType } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import ThemeWrapper from '../ThemeWrapper';
import { TextCombination } from './index';

type StoryArgs = ComponentProps<typeof TextCombination> & {
  theme?: ThemeNameType;
};

const meta = {
  title: 'Atoms/Text Combination',
  component: TextCombination,
  tags: ['autodocs'],
  argTypes: {
    type: {
      name: 'Type',
      control: 'select',
      options: ['d1p1', 'd2p1', 'd3p1', 'h1p1', 'h2p2', 'h3p2'],
      description: 'Type of the text combination',
    },
    align: {
      name: 'Align',
      control: 'select',
      options: ['center', 'left'],
      description: 'Toggles Left Text Combination and Center Text Combination - shown for demonstration purposes, this will be hardcoded when used in a component',
    },
    eyebrow: {
      name: 'Eyebrow',
      description: 'Text for the optional eyebrow',
      control: 'text',
    },
    title: {
      name: 'Title',
      control: 'text',
    },
    description: {
      name: 'Description',
      description: 'Text for the optional description',
      control: 'text',
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: THEME_NAMES,
      description: 'Color theme - this normally comes from the parent component, shown here for demonstration purposes',
      table: {
        category: 'Theme',
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: StoryArgs) => {
    const { theme, ...componentArgs } = args;
    const content = <TextCombination {...componentArgs} />;

    return <ThemeWrapper theme={theme || 'theme-white'}>
      <div className="surface-l0 flex justify-center px-md py-4xl">
        {content}
      </div>
    </ThemeWrapper>;
  },
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const D1P1: Story = {
  args: {
    type: 'd1p1',
    eyebrow: 'Eyebrow Text',
    title: 'Main Title',
    description: 'This is a description of the content. It provides additional context and information about the main title.',
    align: 'left',
  },
};

export const D2P1: Story = {
  args: {
    type: 'd2p1',
    eyebrow: 'Eyebrow Text',
    title: 'Main Title',
    description: 'This is a description of the content. It provides additional context and information about the main title.',
    align: 'left',
  },
};

export const D3P1: Story = {
  args: {
    type: 'd3p1',
    eyebrow: 'Eyebrow Text',
    title: 'Main Title',
    description: 'This is a description of the content. It provides additional context and information about the main title.',
    align: 'left',
  },
};

export const H1P1: Story = {
  args: {
    type: 'h1p1',
    eyebrow: 'Eyebrow Text',
    title: 'Main Title',
    description: 'This is a description of the content. It provides additional context and information about the main title.',
    align: 'left',
  },

};

export const H2P2: Story = {
  args: {
    type: 'h2p2',
    eyebrow: 'Eyebrow Text',
    title: 'Main Title',
    description: 'This is a description of the content. It provides additional context and information about the main title.',
    align: 'left',
  },
};

export const H3P2: Story = {
  args: {
    type: 'h3p2',
    eyebrow: 'Eyebrow Text',
    title: 'Main Title',
    description: 'This is a description of the content. It provides additional context and information about the main title.',
    align: 'left',
  },
};
