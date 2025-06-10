import React from 'react';

type TextFieldProps = {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	id: string;
	type?: 'text' | 'password' | 'email' | 'number';
	label?: string;
	className?: string;
	placeholder?: string;
	required?: boolean;
	disabled?: boolean;
};

export const TextField: React.FC<TextFieldProps> = ({
	name,
	id,
	label = '',
	className = '',
	required = false,
	disabled = false,
	...props
}) => {
	return (
		<div className={'flex w-full flex-col gap-1'}>
			{label && (
				<label
					htmlFor={id}
					className={'block text-sm font-medium text-gray-900'}
				>
					{label}
				</label>
			)}
			<input
				name={name}
				id={id}
				className={
					'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 shadow-sm transition duration-100 ease-in-out hover:border-blue-400 hover:ring-1 hover:ring-blue-500 focus:ring-blue-400 focus:outline-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 disabled:opacity-50 disabled:hover:border-gray-300 disabled:hover:ring-0 ' +
					(className || '')
				}
				{...props}
			></input>
		</div>
	);
};
