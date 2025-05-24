import '../../styles/global.css';
import './banner.css';

import {
	PiInfoFill,
	PiCheckCircleFill,
	PiWarningFill,
	PiWarningOctagonFill,
} from 'react-icons/pi';

export interface BannerProps {
	type: 'neutral' | 'success' | 'warning' | 'error';
	title: string;
	text?: string;
}

export default function Banner({
	title,
	text: subtitle,
	type: status = 'neutral',
}: BannerProps) {
	const iconSize = 24;
	const icon =
		status === 'success' ? (
			<PiCheckCircleFill size={iconSize} />
		) : status === 'warning' ? (
			<PiWarningFill size={iconSize} />
		) : status === 'error' ? (
			<PiWarningOctagonFill size={iconSize} />
		) : (
			<PiInfoFill size={iconSize} />
		);

	return (
		<div className={`banner ${status}`}>
			{icon}
			<div className="banner-text">
				<h4>{title}</h4>
				{subtitle && <p>{subtitle}</p>}
			</div>
		</div>
	);
}
