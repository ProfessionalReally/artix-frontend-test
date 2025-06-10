import { useCallback, useEffect, useRef, useState } from 'react';
import type { CardType } from '@shared/types';
import { generateRandomCountdown } from '@shared/lib/generate-random-countdown';
import { SECONDS_TO_MILLISECONDS } from '@shared/constants';
import { filterExpiredCards, addCardsWithLimit } from './use-cards-sliced';

export const useCards = (count: number, interval: number) => {
	const [cards, setCards] = useState<CardType[]>([]);
	const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);
	const timerId = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		if (!count || !interval) return;

		if (intervalId.current) {
			clearInterval(intervalId.current);
		}

		intervalId.current = setInterval(() => {
			setCards((prev) => addCardsWithLimit(prev, count));
		}, interval * SECONDS_TO_MILLISECONDS);

		return () => {
			if (intervalId.current) {
				clearInterval(intervalId.current);
				intervalId.current = null;
			}
		};
	}, [count, interval]);

	useEffect(() => {
		if (!cards.length) return;

		if (timerId.current) {
			clearInterval(timerId.current);
		}

		timerId.current = setInterval(() => {
			setCards((prev) => filterExpiredCards(prev));
		}, 500);

		return () => {
			if (timerId.current) {
				clearInterval(timerId.current);
				timerId.current = null;
			}
		};
	}, [cards.length]);

	const updateCountdown = useCallback((id: string) => {
		setCards((prev) =>
			prev.map((card) =>
				card.id === id
					? {
							...card,
							countdown: generateRandomCountdown(),
							createdAt: Date.now(),
						}
					: card,
			),
		);
	}, []);

	return { cards, updateCountdown };
};
