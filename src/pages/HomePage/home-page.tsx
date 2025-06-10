import { Header } from '@widgets/index';
import { CardList } from '@widgets/index';

export const HomePage = () => {
	return (
		<div className={'flex min-h-screen flex-col gap-15 bg-gray-100'}>
			<Header />
			<div className={'container mx-auto flex-1'}>
				<CardList />
			</div>
		</div>
	);
};
