import { createContext, useState } from 'react';

export const TarotContext = createContext();

export const TarotProvider = ({ children }) => {
	const [tarotList, setTarotList] = useState(null);
	const [spreadData, setSpreadData] = useState(null);

	return (
		<TarotContext.Provider
			value={{
				tarotList,
				setTarotList,
				spreadData,
				setSpreadData,
			}}
		>
			{children}
		</TarotContext.Provider>
	);
};
