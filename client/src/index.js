import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { HashRouter } from 'react-router-dom';
import { SuperProvider } from './context';

const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENTID } = process.env;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Auth0Provider
		domain={REACT_APP_AUTH0_DOMAIN}
		clientId={REACT_APP_AUTH0_CLIENTID}
		redirectUri={window.location.origin}
	>
		<SuperProvider>
			<HashRouter>
				<App />
			</HashRouter>
		</SuperProvider>
	</Auth0Provider>
	// </React.StrictMode>
);
