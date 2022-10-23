import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "recharts";
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from "./redux/store";
import { Provider } from 'react-redux';
import { ProductContextProvider } from "./context/ProductContext";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const audience = process.env.REACT_APP_AUTH0_API;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      audience={audience}
      scope='openid profile email'
    >
      <Provider store={store}>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);