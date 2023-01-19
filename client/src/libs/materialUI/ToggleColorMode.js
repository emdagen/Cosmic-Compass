import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useUserContext } from '../../hooks/context/useUserContext';

export const ToggleColorMode = ({ children }) => {
	const [mode, setMode] = React.useState('light');
	const { userData } = useUserContext();

	React.useEffect(() => {
		setMode(userData?.theme ? 'dark' : 'light');
	}, [userData?.theme]);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
