import type { Meta, StoryObj } from '@storybook/react';

import Banner from './Banner';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleLine: Story = {
  args: {
    title: 'This is a title',
  },
};

export const MultiLine: Story = {
  args: {
    title: 'This is a title',
    subtitle: 'This is an optional description text',
  },
};
