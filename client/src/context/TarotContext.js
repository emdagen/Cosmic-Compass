import { createContext, useState } from 'react';

export const TarotContext = createContext();

export const TarotProvider = ({ children }) => {
	const [tarotList, setTarotList] = useState(null); //create board

	return (
		<TarotContext.Provider
			value={{
				tarotList,
				setTarotList,
			}}
		>
			{children}
		</TarotContext.Provider>
	);
};
