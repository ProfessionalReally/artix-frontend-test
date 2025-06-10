import logo from '../assets/logo.png';
import { PanelControls } from '@widgets/index';

export const Header = () => {
	return (
		<header
			className={
				'relative flex h-[200px] items-center justify-center bg-white'
			}
		>
			<img
				src={logo}
				alt={'logo'}
				className={'max-h-[120px] max-w-[120px]'}
			/>
			<PanelControls />
		</header>
	);
};
