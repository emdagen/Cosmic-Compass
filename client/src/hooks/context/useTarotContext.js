import { useContext } from 'react';
import { TarotContext } from '../../context/TarotContext';

export const useTarotContext = () => {
	const context = useContext(TarotContext);

	if (!context) {
		throw Error('useTarotContext must be used inside a TarotContextProvider');
	}

	return context;
};
