import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

const meta = {
	component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: () => (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				gap: 16,
				maxWidth: 320,
			}}
		>
			{(
				[
					'gray',
					'sky',
					'green',
					'teal',
					'indigo',
					'violet',
					'pink',
					'tomato',
					'orange',
				] as const
			).map((color) => (
				<>
					<Badge color={color} style="rectangle" text="Badge" />
					<Badge color={color} style="pill" text="Badge" />
				</>
			))}
		</div>
	),
};
