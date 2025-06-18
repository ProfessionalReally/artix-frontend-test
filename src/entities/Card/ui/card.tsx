import type { CardType } from '@shared/types';
import { memo, useMemo } from 'react';
import type { FC } from 'react';
import { ProgressBar } from '@shared/ui';
import { generateContrastColor } from '@shared/lib/generate-contrast-color';
import { calculateProgress } from '@shared/lib/calculate-progress';

type CardProps = {
	card: CardType;
	now: number;
	updateCountdown: (id: string) => void;
};

export const Card: FC<CardProps> = memo(({ card, now, updateCountdown }) => {
	const { id, bgColor, countdown, createdAt } = card;

	const brightnessColor = useMemo(
		() => generateContrastColor(bgColor),
		[bgColor],
	);

	const onClick = () => {
		updateCountdown(id);
	};

	const { remaining, progress } = calculateProgress(
		now,
		countdown,
		createdAt,
	);

	return (
		<div
			className={
				'transition-scale relative flex h-50 w-full cursor-pointer flex-col items-center justify-center gap-5 overflow-clip overflow-hidden rounded-lg bg-gray-300 font-mono break-words text-ellipsis whitespace-normal shadow-md duration-200 ease-in-out hover:scale-102 active:scale-98'
			}
			style={{ backgroundColor: bgColor }}
			onClick={onClick}
		>
			<h2
				className={
					'line-clamp-1 w-full max-w-full text-center text-2xl font-bold'
				}
				style={{ color: brightnessColor }}
			>
				{bgColor}
			</h2>
			<time
				className={'line-clamp-1 w-full max-w-full text-center text-lg'}
				style={{ color: brightnessColor }}
			>
				{Math.ceil(remaining)}s
			</time>
			<ProgressBar
				progress={progress}
				className={'absolute bottom-0 left-0 shadow-[0_0_2px_black]'}
			/>
		</div>
	);
});
