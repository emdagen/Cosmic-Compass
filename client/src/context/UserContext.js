import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState(null); //create board
	const [loadingObj, setLoadingObj] = useState({
		user: 'loading', //loading, checked, verify
		zodiac: 'loading', //loading, checked, verify
	}); //create board
	const [darkTheme, setDarkTheme] = useState(true);

	return (
		<UserContext.Provider
			value={{
				userData,
				setUserData,
				loadingObj,
				setLoadingObj,
				darkTheme,
				setDarkTheme,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
