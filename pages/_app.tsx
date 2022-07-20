import "../styles/globals.scss";
import type { AppProps } from "next/app";
import AppContext from "../components/util/state/AppContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [searchString, setSearchString] = useState(null);

  return (
    <AppContext.Provider
      value={{
        state: {
          searchString: searchString,
        },
        handleSearchStringChange: setSearchString,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
