import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from "./redux/store";
import { hydrate } from './redux/cart';
import { Provider } from 'react-redux';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}  
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);