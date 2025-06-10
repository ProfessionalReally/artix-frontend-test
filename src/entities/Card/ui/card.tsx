export const Card = () => {
	return (
		<div
			className={
				'relative flex h-50 w-full cursor-pointer flex-col items-center justify-center gap-5 overflow-clip overflow-hidden rounded-lg bg-gray-300 font-mono break-words text-ellipsis whitespace-normal shadow-md transition duration-200 ease-in-out hover:scale-102 active:scale-98'
			}
		>
			<h2
				className={
					'line-clamp-1 w-full max-w-full text-center text-2xl font-bold text-gray-900'
				}
			>
				#ffffff
			</h2>
			<p
				className={
					'line-clamp-1 w-full max-w-full text-center text-lg text-gray-600'
				}
			>
				5s
			</p>
			<div className='absolute bottom-0 left-0 h-1 w-full bg-white shadow-[0_0_2px_black]'>
				<div className='h-full bg-blue-600' style={{ width: '50%' }} />
			</div>
		</div>
	);
};
