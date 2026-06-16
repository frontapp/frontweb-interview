import { THEME_NAMES } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import CenteredHero from './index';

const meta = {
  title: 'Components/Centered Hero',
  component: CenteredHero,
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
    }
  },
} satisfies Meta<typeof CenteredHero>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    theme: 'theme-dark-violet',
    eyebrow: 'Eyebrow',
    title: 'Heading etiam in scelerisque consectetur',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};
