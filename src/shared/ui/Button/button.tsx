import React from 'react';

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
};
export const Button: React.FC<ButtonProps> = ({
	type = 'button',
	disabled = false,
	className = '',
	children,
	...props
}) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={
				'cursor-pointer rounded-lg bg-blue-600 p-2 text-center text-sm font-medium text-white shadow-sm transition duration-200 ease-in-out hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none active:scale-98 disabled:cursor-not-allowed disabled:opacity-50 ' +
				(className || '')
			}
			{...props}
		>
			{children}
		</button>
	);
};
