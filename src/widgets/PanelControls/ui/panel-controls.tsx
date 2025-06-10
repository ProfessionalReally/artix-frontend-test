import { Button, TextField } from '@shared/ui';
import React, { useCallback, useState } from 'react';
import { MAX_CARDS } from '@shared/constants';

type PanelControlsProps = {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const PanelControls: React.FC<PanelControlsProps> = ({ onSubmit }) => {
	const [params, setParams] = useState<{ count: number; interval: number }>({
		count: 0,
		interval: 0,
	});

	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setParams((prev) => ({ ...prev, [name]: Number(value) || 0 }));
	}, []);

	return (
		<div
			className={
				'absolute -bottom-[18px] mx-auto flex w-full max-w-[550px]'
			}
		>
			<form
				className={'align-center flex flex-1 items-end gap-2 px-2'}
				onSubmit={onSubmit}
			>
				<TextField
					id={'count'}
					name={'count'}
					value={params.count.toString()}
					onChange={onChange}
					className={'no-spinner'}
					label={`Count of cards(max ${MAX_CARDS})`}
					placeholder={'Enter count of elements...'}
					type={'number'}
				/>
				<TextField
					id={'interval'}
					name={'interval'}
					value={params.interval.toString()}
					onChange={onChange}
					className={'no-spinner'}
					label={'Interval in seconds'}
					placeholder={'Enter the interval...'}
					type={'number'}
				/>
				<div className={'flex items-end'}>
					<Button type={'submit'} className={'h-9'}>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
};
