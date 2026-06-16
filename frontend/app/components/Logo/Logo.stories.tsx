import { ThemeNameType } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import type { ComponentProps } from 'react';
import { Text } from '../Text';
import ThemeWrapper from '../ThemeWrapper';
import Logo, { LogoNames, LogoNameType } from './index';

type StoryArgs = ComponentProps<typeof Logo> & {
  theme?: ThemeNameType;
};

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: Object.keys(LogoNames) as Array<LogoNameType>,
    },
    theme: {
      control: 'select',
      options: ['theme-white', 'theme-gray', 'theme-dark-violet'] as ThemeNameType[],
    },
  },
  render: (args: StoryArgs) => {
    const { theme, ...componentArgs } = args;
    const content = <Logo {...componentArgs} />;

    return (
      <ThemeWrapper theme={theme || 'theme-white'}>
        <div className="surface-l0 flex justify-center px-md py-4xl">
          {content}
        </div>
      </ThemeWrapper>
    );
  },
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'Baggu',
    theme: 'theme-white',
  },
};

export const Gallery: Story = {
  args: {
    type: 'Baggu',
    theme: 'theme-white',
  },
  render: (args: StoryArgs) => {
    const names = Object.keys(LogoNames) as LogoNameType[];

    return (
      <ThemeWrapper theme={args.theme || 'theme-white'}>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
            {names.map((name) => (
              <div
                key={name}
                className="surface-l0 flex flex-col gap-2 rounded-10 border border-solid border-gray-100 bg-white p-3 shadow-sm"
              >
                <div className="flex min-h-[80px] items-center justify-center">
                  <Logo type={name} />
                </div>
                <div className="text-xs leading-tight">
                  <Text type="p2" className="text-primary">{name}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ThemeWrapper>
    );
  },
};
