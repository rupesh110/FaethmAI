import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
    domain="dev-0q48mrburs38i1zs.us.auth0.com"
    clientId="BooWKDf6nG4J6LWCzFzVLoikblzjYlzc"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-0q48mrburs38i1zs.us.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata",
    }}>
    <Router>
      <React.StrictMode>  
      <App />
      </React.StrictMode>
    </Router>
  {/* // <Router>
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </Router> */}
  </Auth0Provider>,
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
