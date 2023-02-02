import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useUserContext } from '../../hooks/context/useUserContext';
import LatoLight from '../../assets/fonts/Lato-Light.ttf';
import PlayfairDisplayRegular from '../../assets/fonts/PlayfairDisplay-Regular.ttf';

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
          primary: {
            main: '#1d7874',
          },
          secondary: {
            main: '#744a45',
          },
        },
        typography: {
          fontFamily: 'Lato',

          h1: {
            fontFamily: 'Playfair Display',
          },
          h2: {
            fontFamily: 'Playfair Display',
          },
          h3: {
            fontFamily: 'Playfair Display',
          },
          h4: {
            fontFamily: 'Playfair Display',
          },
          h5: {
            fontFamily: 'Playfair Display',
          },
          h6: {
            fontFamily: 'Playfair Display',
          },
          p: {
            fontFamily: 'Lato, sans-serif',
          },
          body1: {
            fontFamily: 'Lato, sans-serif',
          },
          body2: {
            fontFamily: 'Lato, sans-serif',
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              '@font-face': [
                {
                  fontFamily: 'Playfair Display',
                  fontDisplay: 'swap',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  src: `local('Playfair Display'), local('font-family: 'Playfair Display-Regular'), url(${PlayfairDisplayRegular}) format('truetype')`,
                },
                {
                  fontFamily: 'Lato',
                  fontStyle: 'normal',
                  fontDisplay: 'swap',
                  fontWeight: 300,
                  src: `local('Lato'), local('font-family: 'Lato-Light'), url(${LatoLight}) format('truetype')`,
                },
              ],
            },
          },
        },
      }),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
