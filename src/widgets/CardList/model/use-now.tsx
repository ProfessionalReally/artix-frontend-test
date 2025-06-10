import { useEffect, useState } from 'react';

export const useNow = () => {
	const [now, setNow] = useState(Date.now());

	useEffect(() => {
		const intervalId = setInterval(() => setNow(Date.now()), 100);
		return () => clearInterval(intervalId);
	}, []);

	return now;
};