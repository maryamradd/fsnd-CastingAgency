import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory";
import {ChakraProvider} from "@chakra-ui/react";
import customTheme from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <Auth0ProviderWithHistory>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </Auth0ProviderWithHistory>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
