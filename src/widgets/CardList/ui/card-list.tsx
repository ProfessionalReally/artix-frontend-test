import { Card } from '@entities/index';

export const CardList = () => {
	return (
		<div
			className={
				'mx-auto mb-10 grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
			}
		>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};
