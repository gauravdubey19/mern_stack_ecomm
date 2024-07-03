import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { PUBLISHABLE_KEY } from "./lib/utils";
import fetcher from "./utils/fetch";
import { store } from "./redux/store";
import { SWRConfig } from "swr";

// export const PUBLISHABLE_KEY = import.meta.env.CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig
        value={{
          refreshInterval: 1000,
          fetcher,
        }}
      >
        <Provider store={store}>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <App />
          </ClerkProvider>
        </Provider>
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>
);
