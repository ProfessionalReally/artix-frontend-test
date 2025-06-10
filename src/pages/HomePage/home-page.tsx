import { Header, PanelControls } from '@widgets/index';
import { CardList } from '@widgets/index';
import { useCards } from '@features/index';
import React, { useCallback, useState } from 'react';

export const HomePage = () => {
	const [paramsSubmitted, setParamsSubmitted] = useState({
		count: 0,
		interval: 0,
	});

	const { cards, updateCountdown } = useCards(
		paramsSubmitted.count,
		paramsSubmitted.interval,
	);

	const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { count, interval } = e.currentTarget;
		setParamsSubmitted({
			count: Number(count.value),
			interval: Number(interval.value),
		});
	}, []);

	return (
		<div className={'flex min-h-screen flex-col gap-15 bg-gray-100'}>
			<Header className={'relative'}>
				<PanelControls onSubmit={onSubmit} />
			</Header>
			<div className={'container mx-auto flex-1'}>
				<CardList cards={cards} updateCountdown={updateCountdown} />
			</div>
		</div>
	);
};
