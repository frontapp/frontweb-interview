import { Meta, StoryObj } from '@storybook/nextjs';
import { Text } from '../Text';
import Grid from './index';

export default {
  title: 'Atoms/Grid',
  component: Grid,
  tags: ['autodocs'],
  render: (args) => (
    <Grid {...args} className="gap-3xl">
      <div className="flex flex-start col-span-4 md:col-span-12 w-full bg-gray-400 bg-opacity-40  h-[20vh] p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1">
          <Text className="md:block hidden" type="p2-medium">Max desktop width is 1272px</Text>
          <Text className="md:hidden block" type="p2-medium">On mobile (&lt;800px screens), the grid fill the viewport with 16px padding on each side</Text>
        </div>
      </div>
      <div className="flex flex-start col-span-2 md:col-span-6 w-full bg-gray-400 bg-opacity-40 h-[20vh]  p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1">
        </div>
      </div>
      <div className="flex flex-start col-span-2 md:col-span-6 w-full bg-gray-400 bg-opacity-40 h-[20vh]  p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="flex flex-start w-full bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="flex w-full flex-start bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="flex w-full flex-start bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="flex w-full flex-start bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="hidden md:flex w-full bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="hidden md:flex w-full bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="hidden md:flex w-full bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="hidden md:flex w-full bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="hidden md:flex w-full bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="hidden md:flex w-full bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="hidden md:flex w-full bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
      <div className="hidden md:flex w-full bg-gray-400 bg-opacity-40 h-[20vh]  justify-center p-1 rounded-10">
        <div className="bg-white bg-opacity-50 mb-auto rounded-10 p-1"></div>
      </div>
    </Grid >
  ),
} as Meta<typeof Grid>;

export const Default: StoryObj<typeof Grid> = {
  args: {
    children: <div>Grid</div>,
  },
};
