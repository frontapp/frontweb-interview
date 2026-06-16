import { Meta, StoryObj } from '@storybook/nextjs';
import { IconTile } from "./index";

const meta: Meta<typeof IconTile> = {
  title: 'Atoms/Icon Tile',
  component: IconTile,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
  },
} satisfies Meta<typeof IconTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'globe-01',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    iconName: 'globe-01',
    size: 'large',
  },
};
