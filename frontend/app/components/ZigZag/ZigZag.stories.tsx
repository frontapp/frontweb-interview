import { THEME_NAMES } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ZigZag, ZigZagProps } from './index';

const meta = {
  title: 'Components/ZigZag',
  component: ZigZag,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      name: 'Theme',
      control: 'select',
      options: THEME_NAMES,
      table: {
        category: 'Theme',
      },
    },
    eyebrow: {
      name: 'Eyebrow',
      control: 'text',
      table: {
        category: 'Text Combination',
      },
    },
    title: {
      name: 'Title',
      control: 'text',
      table: {
        category: 'Text Combination',
      },
    },
    description: {
      name: 'Description',
      control: 'text',
      table: {
        category: 'Text Combination',
      },
    },
    items: {
      control: 'object',
      name: 'Items',
      description: 'Zig Zag Items - storybook doesn\'t have great controls for arrays. The ZigZagItem\'s story is a better way to see its options.',
      table: {
        category: 'ZigZag Items',
      },
      of: {
        type: 'object',
        properties: {
          eyebrow: { control: 'text' },
          title: { control: 'text' },
          description: { control: 'text' },
          hasSecondButton: { control: 'boolean' },
          imageSrc: { control: 'text' },
          imageAlt: { control: 'text' },
          buttonPair: { control: 'object' },
          hasCheckList: { control: 'boolean' },
          checkListItems: { control: 'object' },
        },
      },
    },
  },
} satisfies Meta<typeof ZigZag>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    theme: 'theme-white',
    eyebrow: 'Eyebrow',
    title: 'ZigZag section heading.',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    items: [
      {
        eyebrow: 'Eyebrow',
        title: 'Heading of a ZigZag item with button pair.',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageSrc: 'https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fpages%2Fglobal-ai%2FHomepage%2Ffast-modern-intuitive.png&w=1920&q=75',
        imageAlt: 'Image',
        buttonPair: {
          variant: 'filledOutline',
          hasSecondButton: true,
          firstButtonFunctionalityProps: {
            buttonText: 'Demo',
            action: 'demo',
          },
          secondButtonFunctionalityProps: {
            buttonText: 'Trial',
            action: 'trial',
          },
        },
      },
      {
        eyebrow: 'Eyebrow',
        title: 'Simple item without button pair.',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imageSrc: 'https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fpages%2Fglobal-ai%2FHomepage%2Ffast-modern-intuitive.png&w=1920&q=75',
        imageAlt: 'Image',
      },
      {
        eyebrow: 'Eyebrow',
        title: 'Heading of a ZigZag item with check list.',
        description: undefined,
        imageSrc: 'https://front.com/_next/image?url=https%3A%2F%2Ffront.com%2Fassets%2Fpages%2Fglobal-ai%2FHomepage%2Ffast-modern-intuitive.png&w=1920&q=75',
        imageAlt: 'Image',
        buttonPair: {
          variant: 'filledTertiary',
          hasSecondButton: true,
          firstButtonFunctionalityProps: {
            buttonText: 'Demo',
            action: 'demo',
          },
          secondButtonFunctionalityProps: {
            buttonText: 'Trial',
            action: 'trial',
          },
        },
        checkListItems: [
          { id: '1', text: 'Collect tickets in a convenient customer portal' },
          { id: '2', text: 'Handle customer inquiries and support requests' },
          { id: '3', text: 'Track and manage customer interactions' },
        ],
      },
    ],
  } satisfies ZigZagProps,
};

export const WhatsNewExample: Story = {
  args: {
    items: [
      {
        eyebrow: 'Topics',
        title: 'Automatically analyze your conversations to power automation and uncover key insights with Topics',
        description: 'Simply connect a channel or select your preferred inboxes and Front AI analyzes your past conversations to automatically categorize customer inquiries into Topics. Leverage Topics to identify trends, route messages to the right team members, and pinpoint areas for improvement.',
        imageSrc: 'https://front.com/assets/pages/global-ai/AI/Topics.png',
        imageAlt: 'Image',
        buttonPair: {
          variant: 'filledOutline',
          hasSecondButton: true,
          firstButtonFunctionalityProps: {
            buttonText: 'Request Demo',
            action: 'demo',
          },
          secondButtonFunctionalityProps: {
            buttonText: 'View Documentation',
            action: 'url',
            href: 'https://help.front.com/en/articles/3329344',
          },
        },
      },
      {
        eyebrow: 'Autopilot',
        title: 'Meet Autopilot: The AI agent built for control, not chaos',
        description: 'Autopilot is Front’s new omnichannel AI agent that gives admins control over automation. Autopilot only handles what’s safe to automate — fully autonomous when it should be, and smart enough to hand off when it shouldn’t.',
        imageSrc: 'https://front.com/assets/pages/product/ai/ai-autopilot.png',
        imageAlt: 'Image',
        buttonPair: {
          variant: 'filledOutline',
          hasSecondButton: true,
          firstButtonFunctionalityProps: {
            buttonText: 'Request Demo',
            action: 'demo',
          },
          secondButtonFunctionalityProps: {
            buttonText: 'View AI Features',
            action: 'url',
            href: 'https://front.com/product/ai',
          },
        },
      },
    ],
    theme: 'theme-gray',
  },
};

export default meta;
