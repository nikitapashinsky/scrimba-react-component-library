import type { Meta, StoryObj } from '@storybook/react';

import Banner from './Banner';

const meta = {
	component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleLineNeutral: Story = {
	args: {
		title: 'Informational message',
		status: 'neutral',
	},
};

export const SingleLineSuccess: Story = {
	args: {
		title: 'Success',
		status: 'success',
	},
};

export const SingleLineWarning: Story = {
	args: {
		title: 'Warning',
		status: 'warning',
	},
};

export const SingleLineError: Story = {
	args: {
		title: 'Error',
		status: 'error',
	},
};

export const MultiLineNeutral: Story = {
	args: {
		title: 'Information',
		subtitle: 'This message is shown to inform user of something.',
		status: 'neutral',
	},
};

export const MultiLineSuccess: Story = {
	args: {
		title: 'Success',
		subtitle: 'This message is shown when action was completed successfully.',
		status: 'success',
	},
};

export const MultiLineWarning: Story = {
	args: {
		title: 'Warning',
		subtitle: 'This message is shown to warn user of something.',
		status: 'warning',
	},
};

export const MultiLineError: Story = {
	args: {
		title: 'Error',
		subtitle: 'This message is shown when something went wrong.',
		status: 'error',
	},
};
