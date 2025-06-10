import React from 'react';

type ProgressBarProps = {
	className?: string;
	percent: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
	className = '',
	percent,
}) => {
	return (
		<div className={'h-1 w-full bg-white ' + (className || '')}>
			<div
				className='linear h-full bg-blue-600 transition-all duration-200'
				style={{ width: `${percent}%` }}
			/>
		</div>
	);
};
