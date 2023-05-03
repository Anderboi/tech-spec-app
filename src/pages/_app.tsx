import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/layout";
import { ThemeProvider, useTheme } from "next-themes";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

export default function App({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  // const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    // <SessionContextProvider
    // supabaseClient={supabaseClient}
    // initialSession={pageProps.initialSession}>
    <ThemeProvider
      // enableSystem
      themes={["light", "dark"]}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    /* </SessionContextProvider> */
  );
}
