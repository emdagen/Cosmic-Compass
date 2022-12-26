import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { SuperProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Auth0Provider
		domain='dev-2ctovblp.us.auth0.com'
		clientId='0TWIF5Mfu01ry2nnyEOcbDl0dqsAhAue'
		redirectUri={window.location.origin}
	>
		<SuperProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SuperProvider>
	</Auth0Provider>
	// </React.StrictMode>
);
