import type { Meta, StoryObj } from '@storybook/react';

import Banner from './Banner';

const meta = {
	component: Banner,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariations: Story = {
	args: {},
	parameters: {
		controls: { disable: true },
	},
	render: () => (
		<div
			style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr 1fr' }}
		>
			{(['neutral', 'success', 'warning', 'error'] as const).map((type) => {
				const text =
					type === 'success'
						? 'Operation completed successfully.'
						: type === 'warning'
							? 'This is your final warning.'
							: type === 'error'
								? 'Something went wrong.'
								: 'This message displays non-critical information.';

				return (
					<>
						<Banner
							type={type}
							title={`${type[0].toUpperCase() + type.slice(1)}`}
							text={text}
						/>
						<Banner
							type={type}
							title={`${type[0].toUpperCase() + type.slice(1)}`}
						/>
					</>
				);
			})}
		</div>
	),
};

export const SingleLine: Story = {
	args: {
		title: 'Informational message',
		type: 'neutral',
	},
};

export const MultiLine: Story = {
	args: {
		title: 'Information',
		text: 'This message is shown to inform user of something.',
		type: 'neutral',
	},
};
