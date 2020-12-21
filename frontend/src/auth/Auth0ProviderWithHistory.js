import React from "react";
import {useHistory} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({children}) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    // Use the router's history module to replace the url
    //history.replace(appState?.returnTo || window.location.pathname);
    history.push(process.env.REACT_APP_URL);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={process.env.REACT_APP_URL}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
