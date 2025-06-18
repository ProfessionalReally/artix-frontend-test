import type { FC } from 'react';

type ProgressBarProps = {
	className?: string;
	progress: number;
};

export const ProgressBar: FC<ProgressBarProps> = ({
	className = '',
	progress,
}) => {
	return (
		<div className={'h-1 w-full bg-white ' + (className || '')}>
			<div
				className='linear h-full origin-left bg-blue-600 transition-transform duration-200'
				style={{
					transform: `scaleX(${progress})`,
					willChange: 'transform',
				}}
			/>
		</div>
	);
};
