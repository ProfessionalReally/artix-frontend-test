import { MAX_PERSENTAGE, MIN_PERSENTAGE } from '@shared/constants';

export const calculateProgress = (
	now: number,
	countdown: number,
	createdAt: number,
) => {
	const elapsed = (now - createdAt) / 1000;
	const remaining = countdown - elapsed;
	const percent = Math.max(
		MIN_PERSENTAGE,
		Math.min((remaining / countdown) * MAX_PERSENTAGE, MAX_PERSENTAGE),
	);
	return { remaining, percent };
};