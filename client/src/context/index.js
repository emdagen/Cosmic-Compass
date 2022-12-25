import { createContext } from 'react';
import { TarotProvider } from './TarotContext';
import { UserProvider } from './UserContext';

export const SuperContext = createContext();

export const SuperProvider = ({ children }) => {
	return (
		<UserProvider>
			<TarotProvider>{children}</TarotProvider>
		</UserProvider>
	);
};
