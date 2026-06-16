import { ThemeNameType } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import { LogoNames, LogoNameType } from '../Logo';
import ThemeWrapper from '../ThemeWrapper';
import LogoStrip from './index';

type StoryArgs = ComponentProps<typeof LogoStrip> & {
  theme?: ThemeNameType;
};

const meta = {
  title: 'Molecules/Logo Strip',
  component: LogoStrip,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'g2'],
    },
    logos: {
      control: 'multi-select',
      options: Object.keys(LogoNames) as Array<LogoNameType>,
    },
    theme: {
      control: 'select',
      options: ['theme-white', 'theme-gray', 'theme-dark-violet'] as ThemeNameType[],
    },
  },
  render: (args: StoryArgs) => {
    const { theme, ...componentArgs } = args;
    const content = <LogoStrip {...componentArgs} />;

    return (
      <ThemeWrapper theme={theme || 'theme-white'}>
        <div className="surface-l0 flex justify-center px-md py-4xl">
          {content}
        </div>
      </ThemeWrapper>
    );
  },

} satisfies Meta<StoryArgs>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    logos: ['Bombas', 'Branch', 'Baggu', 'Spruce', 'GoDaddy'],
  },
};
export const G2: Story = {
  args: {
    type: 'g2',
    logos: ['Bombas', 'Branch', 'Baggu', 'Spruce', 'GoDaddy'],
  },
};

export default meta;
