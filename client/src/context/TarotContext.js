import { createContext, useState } from 'react';

export const TarotContext = createContext();

export const TarotProvider = ({ children }) => {
	const [tarotList, setTarotList] = useState(null);
	const [spreadData, setSpreadData] = useState(null);
	const [activeTarot, setActiveTarot] = useState(false);

	return (
		<TarotContext.Provider
			value={{
				tarotList,
				setTarotList,
				spreadData,
				setSpreadData,
				activeTarot,
				setActiveTarot,
			}}
		>
			{children}
		</TarotContext.Provider>
	);
};
