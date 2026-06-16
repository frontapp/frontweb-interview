import { Meta, StoryObj } from '@storybook/nextjs';
import { FeatureItem } from './index';

import { THEME_NAMES, ThemeNameType } from '@/tailwind-config/theme.constants';
import { ComponentProps } from 'react';
import Grid from '../Grid';
import { ICON_VARIANTS } from '../Icon/Icon.registry';
import ThemeWrapper from '../ThemeWrapper';

type StoryArgs = ComponentProps<typeof FeatureItem> & {
  theme?: ThemeNameType;
};


const meta: Meta<StoryArgs> = {
  title: 'Atoms/Feature Item',
  component: FeatureItem,
  argTypes: {
    theme: {
      control: 'select',
      options: THEME_NAMES,
    },
    iconName: {
      control: 'select',
      options: Object.keys(ICON_VARIANTS),
    },
    title: {
      control: 'text',
    },
    link: {
      control: 'text',
    },
  },
  render: (args) => (
    <ThemeWrapper theme={args.theme || 'theme-white'}>
      <Grid className="surface-l0 flex justify-center px-md py-4xl">
        <div className="col-span-5 col-start-4">
          <FeatureItem {...args} />
        </div>
      </Grid>
    </ThemeWrapper>
  ),
} satisfies Meta<StoryArgs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'alarm-clock',
    title: 'Feature Item',
    link: '/',
  },
};
