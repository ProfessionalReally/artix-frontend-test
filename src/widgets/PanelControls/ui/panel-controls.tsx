import { Button, TextField } from '@shared/ui';

export const PanelControls = () => {
	return (
		<div
			className={
				'absolute -bottom-[18px] mx-auto flex w-full max-w-[550px]'
			}
		>
			<form className={'align-center flex flex-1 items-end gap-2 px-2'}>
				<TextField
					id={'count'}
					name={'count'}
					value={''}
					onChange={() => {}}
					className={'no-spinner'}
					placeholder={'Enter count of elements...'}
					type={'number'}
				/>
				<TextField
					id={'interval'}
					name={'interval'}
					value={''}
					onChange={() => {}}
					className={'no-spinner'}
					placeholder={'Enter the interval...'}
					type={'number'}
				/>
				<div className={'flex items-end'}>
					<Button
						onClick={() => {}}
						type={'submit'}
						className={'h-9'}
					>
						Save
					</Button>
				</div>
			</form>
		</div>
	);
};
