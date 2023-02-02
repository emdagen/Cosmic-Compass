import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useUserContext } from '../../hooks/context/useUserContext';
import TelegrafRegular from '../../assets/fonts/Telegraf-Regular.ttf';
import SeasonsLight from '../../assets/fonts/SeasonsLight.ttf';

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
          h1: {
            fontFamily: 'SeasonsLight',
          },
          h2: {
            fontFamily: 'SeasonsLight',
          },
          h3: {
            fontFamily: 'SeasonsLight',
          },
          h4: {
            fontFamily: 'SeasonsLight',
          },
          h5: {
            fontFamily: 'SeasonsLight',
          },
          h6: {
            fontFamily: 'SeasonsLight',
          },
          p: {
            fontFamily: 'TelegrafRegular',
          },
          body1: {
            fontFamily: 'TelegrafRegular',
          },
        },

        components: {
          MuiCssBaseline: {
            styleOverrides: `
              @font-face {
                font-family: 'TelegrafRegular';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('TelegrafRegular'), local('TelegrafRegular-Regular'), url(${TelegrafRegular}) format('truetype');
              }
              @font-face {
                font-family: 'SeasonsLight';
                font-style: normal;
                font-display: swap;
                font-weight: light;
                src: local('SeasonsLight'), local('SeasonsLight-Light'), url(${SeasonsLight}) format('truetype');
              }
            `,
          },
        },
      }),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
