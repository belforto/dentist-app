import "../styles/globals.scss";
import type { AppProps } from "next/app";
import AppContext from "../components/util/state/AppContext";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
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
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
