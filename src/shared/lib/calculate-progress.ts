import { MAX_PROGRESS, MIN_PROGRESS } from '@shared/constants';

export const calculateProgress = (
	now: number,
	countdown: number,
	createdAt: number,
) => {
	const elapsed = Math.max(0, (now - createdAt) / 1000);
	const remaining = Math.max(0, countdown - elapsed);
	const progress = Math.min(
		Math.max(remaining / countdown, MIN_PROGRESS),
		MAX_PROGRESS,
	);

	return { remaining, progress };
};
