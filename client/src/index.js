import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserContext';
import { Auth0Provider } from '@auth0/auth0-react';
import GlobalStyle from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-2ctovblp.us.auth0.com'
    clientId='0TWIF5Mfu01ry2nnyEOcbDl0dqsAhAue'
    redirectUri={window.location.origin}
  >
    <UserProvider>
      <GlobalStyle />
      <App />
    </UserProvider>
  </Auth0Provider>
);
