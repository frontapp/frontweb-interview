import { THEME_NAMES, ThemeNameType } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ComponentProps } from 'react';
import { ButtonFunctionalityProps } from '../Button/Button.types';
import { ButtonPairProps, ButtonPairVariant } from '../ButtonPair';
import ThemeWrapper from '../ThemeWrapper';
import { ZigZagItem } from './ZigZagItem';

type StoryArgs = Omit<ComponentProps<typeof ZigZagItem>, 'firstButton' | 'secondButton'> & {
  theme?: ThemeNameType;
  buttonPairVariant?: ButtonPairVariant;
  buttonPairFirstButtonText?: string;
  buttonPairFirstButtonAction?: ButtonFunctionalityProps['action'];
  buttonPairFirstButtonHref?: string;
  buttonPairFirstButtonTarget?: ButtonFunctionalityProps['target'];
  buttonPairHasSecondButton?: boolean;
  buttonPairSecondButtonText?: string;
  buttonPairSecondButtonAction?: ButtonFunctionalityProps['action'];
  buttonPairSecondButtonHref?: string;
  buttonPairSecondButtonTarget?: ButtonFunctionalityProps['target'];
};


const meta = {
  title: 'Molecules/Zig Zag Item',
  component: ZigZagItem,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: THEME_NAMES,
      name: 'Theme',

    },
    direction: {
      control: 'select',
      options: ['left', 'right'],
      name: 'Direction',
    },
    eyebrow: {
      control: 'text',
      name: 'Eyebrow',
      table: {
        category: 'Text Combination',
      },
    },
    title: {
      control: 'text',
      name: 'Title',
      table: {
        category: 'Text Combination',
      },
    },
    description: {
      control: 'text',
      name: 'Description',
      table: {
        category: 'Text Combination',
      },
    },
    checkListItems: {
      control: 'object',
      name: 'Check List Items',
      description: 'Items to display in optional check list. Omitting items will omit the check list. If using a check list, do not add a description.',
      table: {
        category: 'Check List',
      },
    },
    imageSrc: {
      control: 'text',
      name: 'Image Src',
    },
    imageAlt: {
      control: 'text',
      name: 'Image Alt',
    },
    buttonPairVariant: {
      name: 'Variant',
      control: 'select',
      options: ['filledOutline', 'filledTertiary'],
      table: {
        category: 'Button Pair',
      },
    },
    buttonPairFirstButtonText: {
      name: 'First Button Text',
      control: 'text',
      table: {
        category: 'Button Pair',
      },
    },
    buttonPairFirstButtonAction: {
      name: 'First Button Action',
      control: 'select',
      options: ['demo', 'trial', 'url'],
      table: {
        category: 'Button Pair',
      },
    },
    buttonPairFirstButtonHref: {
      name: 'First Button Href',
      control: 'text',
      if: { arg: 'buttonPairFirstButtonAction', eq: 'url' },
      table: {
        category: 'Button Pair',
      },
    },
    buttonPairFirstButtonTarget: {
      name: 'First Button Target',
      control: 'select',
      options: ['_self', '_blank'],
      if: { arg: 'buttonPairFirstButtonAction', eq: 'url' },
      table: {
        category: 'Button Pair',
      },
    },
    buttonPairHasSecondButton: {
      name: 'Has Second Button',
      control: 'boolean',
      table: {
        category: 'Button Pair',
      },
    },
    buttonPairSecondButtonText: {
      name: 'Second Button Text',
      control: 'text',
      if: { arg: 'buttonPairHasSecondButton', eq: true },
      table: {
        category: 'Button Pair',
      },
    },
    buttonPairSecondButtonAction: {
      name: 'Second Button Action',
      control: 'select',
      options: ['demo', 'trial', 'url'],
      if: { arg: 'buttonPairHasSecondButton', eq: true },
      table: {
        category: 'Button Pair',
      },
    },
    buttonPairSecondButtonHref: {
      name: 'Second Button Href',
      control: 'text',
      if: { arg: 'buttonPairSecondButtonAction', eq: 'url' },
      table: {
        category: 'Button Pair',
      },
    },
    buttonPairSecondButtonTarget: {
      name: 'Second Button Target',
      control: 'select',
      options: ['_self', '_blank'],
      if: { arg: 'buttonPairSecondButtonAction', eq: 'url' },
      table: {
        category: 'Button Pair',
      },
    },
    buttonPair: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: StoryArgs) => {
    const {
      theme,
      buttonPairVariant,
      buttonPairFirstButtonText,
      buttonPairFirstButtonAction,
      buttonPairFirstButtonHref,
      buttonPairSecondButtonText,
      buttonPairSecondButtonAction,
      buttonPairSecondButtonHref,
      buttonPairHasSecondButton,
      buttonPairFirstButtonTarget,
      buttonPairSecondButtonTarget,
      ...componentArgs
    } = args;

    const buttonPairProps: ButtonPairProps = {
      variant: buttonPairVariant,
      hasSecondButton: buttonPairHasSecondButton,
      firstButtonFunctionalityProps: {
        buttonText: buttonPairFirstButtonText || '',
        action: buttonPairFirstButtonAction || 'demo',
        href: buttonPairFirstButtonHref,
        target: buttonPairFirstButtonTarget || '_self',
      },
      secondButtonFunctionalityProps: {
        buttonText: buttonPairSecondButtonText || '',
        action: buttonPairSecondButtonAction || 'demo',
        href: buttonPairSecondButtonHref,
        target: buttonPairSecondButtonTarget || '_self',
      },
    };

    return <ThemeWrapper theme={theme || 'theme-white'}>
      <div className="surface-l0 flex justify-center px-md pt-0 pb-2xl">
        <ZigZagItem {...componentArgs} buttonPair={buttonPairProps} />
      </div>
    </ThemeWrapper>;
  },
} satisfies Meta<StoryArgs>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: 'theme-white',
    direction: 'left',
    eyebrow: 'Eyebrow',
    title: 'Heading etiam interdum pallamco laboris nisi ut aliquip ex ea commodo consequat.',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageSrc: 'https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fpages%2Fglobal-ai%2FHomepage%2Ffast-modern-intuitive.png&w=1920&q=75',
    imageAlt: 'Image',
    buttonPairVariant: 'filledOutline',
    buttonPairFirstButtonText: 'First Button',
    buttonPairFirstButtonAction: 'demo',
    buttonPairFirstButtonHref: '#',
    buttonPairHasSecondButton: true,
    buttonPairSecondButtonText: 'Second Button',
    buttonPairSecondButtonAction: 'trial',
    buttonPairSecondButtonHref: '#',
  },
};

export const WithCheckList: Story = {
  args: {
    ...Default.args,
    description: undefined,
    checkListItems: [
      { id: '1', text: 'Collect tickets in a convenient customer portal' },
      { id: '2', text: 'Handle customer inquiries and support requests' },
      { id: '3', text: 'Track and manage customer interactions' },
    ],
  },
};

export default meta;
