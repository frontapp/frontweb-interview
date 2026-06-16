import { THEME_NAMES, ThemeNameType } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import ThemeWrapper from '@/app/components/ThemeWrapper';
import { Text } from './index';

type StoryArgs = ComponentProps<typeof Text> & {
  theme?: ThemeNameType;
};

const meta = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'display1',
        'display2',
        'display3',
        'h1',
        'h2',
        'h3',
        'h4',
        'p1',
        'p1-medium',
        'p2',
        'p2-medium',
        'caption1',
        'caption2',
        'micro1',
        'micro2',
      ],
    },
    as: {
      control: 'select',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5'],
    },
    theme: {
      control: 'select',
      options: THEME_NAMES,
    },
  },
  render: (args: StoryArgs) => {
    const { theme, ...componentArgs } = args;
    const content = <Text className="text-primary" {...componentArgs} />;

    return <ThemeWrapper theme={theme || 'theme-white'}>
      <div className="surface-l0 flex justify-center px-md py-4xl">
        {content}
      </div>
    </ThemeWrapper>;
  },
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

// Display variants
export const Display1: Story = {
  args: {
    children: 'Display 1: Make five-star service a reality',
    type: 'display1',
    as: 'h1',
  },
};

export const Display2: Story = {
  args: {
    children: 'Display 2: Make five-star service a reality',
    type: 'display2',
    as: 'h1',
  },
};

export const Display3: Story = {
  args: {
    children: 'Display 3: Make five-star service a reality',
    type: 'display3',
    as: 'h1',
  },
};

// Heading variants
export const Heading1: Story = {
  args: {
    children: 'Heading 1: Transform customer service with AI-powered collaboration',
    type: 'h1',
    as: 'h1',
  },
};

export const Heading2: Story = {
  args: {
    children: 'Heading 2: Transform customer service with AI-powered collaboration',
    type: 'h2',
    as: 'h2',
  },
};

export const Heading3: Story = {
  args: {
    children: 'Heading 3: Transform customer service with AI-powered collaboration',
    type: 'h3',
    as: 'h3',
  },
};

export const Heading4: Story = {
  args: {
    children: 'Heading 4: Transform customer service with AI-powered collaboration',
    type: 'h4',
    as: 'h4',
  },
};

// Paragraph variants
export const Paragraph1: Story = {
  args: {
    children: 'Paragraph 1: Front\'s powerful workspace helps teammates collaborate—supported by AI—across your customer\'s entire experience. Exceed expectations for speed, ease, and quality.',
    type: 'p1',
    as: 'p',
  },
};

export const Paragraph1Medium: Story = {
  args: {
    children: 'Paragraph 1 Medium: Front\'s powerful workspace helps teammates collaborate—supported by AI—across your customer\'s entire experience. Exceed expectations for speed, ease, and quality.',
    type: 'p1-medium',
    as: 'p',
  },
};

export const Paragraph2: Story = {
  args: {
    children: 'Paragraph 2: Front\'s powerful workspace helps teammates collaborate—supported by AI—across your customer\'s entire experience. Exceed expectations for speed, ease, and quality.',
    type: 'p2',
    as: 'p',
  },
};

export const Paragraph2Medium: Story = {
  args: {
    children: 'Paragraph 2 Medium: Front\'s powerful workspace helps teammates collaborate—supported by AI—across your customer\'s entire experience. Exceed expectations for speed, ease, and quality.',
    type: 'p2-medium',
    as: 'p',
  },
};

// Caption variants
export const Caption1: Story = {
  args: {
    children: 'Caption 1: Additional context or supporting information',
    type: 'caption1',
    as: 'p',
  },
};

export const Caption2: Story = {
  args: {
    children: 'Caption 2: Additional context or supporting information',
    type: 'caption2',
    as: 'p',
  },
};

// Micro variants
export const Micro1: Story = {
  args: {
    children: 'Micro 1: Label or tag text',
    type: 'micro1',
    as: 'p',
  },
};

export const Micro2: Story = {
  args: {
    children: 'Micro 2: Label or tag text',
    type: 'micro2',
    as: 'p',
  },
};
