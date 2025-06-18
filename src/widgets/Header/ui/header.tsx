import logo from '../assets/logo.png';
import type { FC, ReactNode } from 'react';

type HeaderProps = {
	className?: string;
	children?: ReactNode;
};

export const Header: FC<HeaderProps> = ({ children, className }) => {
	return (
		<header
			className={
				'flex h-[200px] items-center justify-center bg-white ' +
				(className || '')
			}
		>
			<img
				src={logo}
				alt={'logo'}
				className={'max-h-[120px] max-w-[120px]'}
			/>
			{children}
		</header>
	);
};
