import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import { ThemeProvider } from "next-themes";
import { Inter } from "@next/font/google";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  // weight: ["400", "700"],
});

export default function App({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <ThemeProvider
        // enableSystem
        themes={["light", "dark"]}
      >
        <main className={inter.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </ThemeProvider>
    </SessionContextProvider>
  );
}
