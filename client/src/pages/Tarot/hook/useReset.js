import { useTarotContext } from '../../../hooks/context/useTarotContext';

export const useReset = () => {
	const { setSpreadData } = useTarotContext();
	const handleReset = () => {
		setSpreadData(null);
	};
	return handleReset;
};
