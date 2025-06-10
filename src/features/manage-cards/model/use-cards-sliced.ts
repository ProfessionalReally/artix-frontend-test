import { generateRandomColor } from '@shared/lib/generate-random-color';
import { generateRandomCountdown } from '@shared/lib/generate-random-countdown';
import type { CardType } from '@shared/types';
import { MAX_CARDS, SECONDS_TO_MILLISECONDS } from '@shared/constants';

export const generateNewCards = (count: number) => {
	if (!count) return [];

	return Array.from({ length: count }).map(() => ({
		id: crypto.randomUUID(),
		bgColor: generateRandomColor(),
		countdown: generateRandomCountdown(),
		createdAt: Date.now(),
	}));
};

export const filterExpiredCards = (cards: CardType[]) => {
	const now = Date.now();

	return cards.filter(
		(card) =>
			now - card.createdAt < card.countdown * SECONDS_TO_MILLISECONDS,
	);
};

export const addCardsWithLimit = (
	prevCards: CardType[],
	newCardsCount: number,
) => {
	const remainingSlots = MAX_CARDS - prevCards.length;
	const addCount = Math.min(newCardsCount, remainingSlots);
	const newCards = generateNewCards(addCount);
	return [...prevCards, ...newCards];
};
