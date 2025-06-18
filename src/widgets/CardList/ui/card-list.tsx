import type { CardType } from '@shared/types';
import { Card } from '@entities/index';
import { memo } from 'react';
import type { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNow } from '../model/use-now';

type CardListProps = {
	cards: CardType[];
	updateCountdown: (id: string) => void;
};

export const CardList: FC<CardListProps> = memo(
	({ cards, updateCountdown }) => {
		const now = useNow();

		if (!cards.length) return null;

		return (
			<div
				className={
					'mx-auto mb-10 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
				}
			>
				<AnimatePresence>
					{cards.map((card) => (
						<motion.div
							key={card.id}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
							className='transition-scale transition-opacity duration-200 ease-in-out'
						>
							<Card
								card={card}
								now={now}
								updateCountdown={updateCountdown}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		);
	},
);
