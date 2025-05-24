import './badge.css';

export interface BadgeProps {
	color:
		| 'gray'
		| 'sky'
		| 'green'
		| 'teal'
		| 'indigo'
		| 'violet'
		| 'pink'
		| 'tomato'
		| 'orange';
	text: string;
	style: 'rectangle' | 'pill';
}

export default function Badge({
	color,
	text = 'Badge',
	style = 'rectangle',
}: BadgeProps) {
	return (
		<div className={`badge ${color} ${style}`}>
			<span>{text}</span>
		</div>
	);
}
