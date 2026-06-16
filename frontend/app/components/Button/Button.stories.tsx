import { THEME_NAMES, ThemeNameType } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import ThemeWrapper from '../ThemeWrapper';
import { Button } from './index';

type StoryArgs = ComponentProps<typeof Button> & {
  theme?: ThemeNameType;
};

const meta: Meta<StoryArgs> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Primary/Secondary variants are a larger/smaller versions of our filled/outlined buttons. Tertiary is a text button with an arrow',
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    buttonType: {
      name: 'Type',
      description: 'Filled/Outlined types are only available for Primary/Secondary variants',
      control: 'select',
      options: ['filled', 'outlined'],
      if: { arg: 'variant', neq: 'tertiary' },
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
    action: {
      name: 'Action',
      control: 'select',
      description: 'Demo and Trial actions will open modals, URL action will navigate to a specified href',
      options: ['demo', 'trial', 'url'],
    },
    href: {
      name: 'Href',
      if: { arg: 'action', eq: 'url' },
      description: 'Link href for button with "url" action',
      control: 'text',
    },
    target: {
      name: 'Target',
      description: 'Target for the link',
      control: 'select',
      options: ['_self', '_blank'],
      if: { arg: 'action', eq: 'url' },
    },
    buttonText: {
      name: 'Text',
      description: 'Text for the button',
      control: 'text',
    },
  },
  render: (args: StoryArgs) => {
    const { theme, ...componentArgs } = args;
    const content = <Button {...componentArgs} />;

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

export const PrimaryFilled: StoryObj<typeof Button> = {
  args: {
    buttonText: 'Primary',
    variant: 'primary',
    buttonType: 'filled',
  },
};


export const PrimaryOutlined: StoryObj<typeof Button> = {
  args: {
    buttonText: 'Primary',
    variant: 'primary',
    buttonType: 'outlined',
  },
};


export const SecondaryFilled: StoryObj<typeof Button> = {
  args: {
    buttonText: 'Secondary',
    variant: 'secondary',
    buttonType: 'filled',
  },
};


export const SecondaryOutlined: StoryObj<typeof Button> = {
  args: {
    buttonText: 'Secondary',
    variant: 'secondary',
    buttonType: 'outlined',
  },
};

export const Tertiary: StoryObj<typeof Button> = {
  args: {
    buttonText: 'Tertiary',
    variant: 'tertiary',
  },
};
