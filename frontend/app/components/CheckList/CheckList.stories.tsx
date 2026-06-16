import { THEME_NAMES, ThemeNameType } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import ThemeWrapper from '../ThemeWrapper';
import { CheckList } from './index';

type StoryArgs = ComponentProps<typeof CheckList> & {
  theme?: ThemeNameType;
};

const meta = {
  title: 'Atoms/CheckList',
  component: CheckList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      name: 'Items',
      control: 'object',
      description: 'Items to display in the check list',
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: THEME_NAMES,
      table: {
        category: 'Theme',
      },
    },
  },
  render: (args: StoryArgs) => {
    const { theme, ...componentArgs } = args;
    const items = componentArgs.items?.map((item, index) => ({
      id: index.toString(),
      text: item.text,
    }));
    const content = <CheckList items={items} />;

    return <ThemeWrapper theme={theme || 'theme-white'}>
      <div className="surface-l0 flex px-md py-4xl">
        {content}
      </div>
    </ThemeWrapper>;
  },
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: '1', text: 'Collect tickets in a convenient customer portal' },
      { id: '2', text: 'Handle customer inquiries and support requests' },
      { id: '3', text: 'Track and manage customer interactions' },
    ],
  },
};
