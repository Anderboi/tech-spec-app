import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from '../components/layout'
import {ThemeProvider} from 'next-themes'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function App({Component, pageProps}: AppProps) {

  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
    <ThemeProvider
        enableSystem
        themes={['light', 'dark']}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    </SessionContextProvider>
  )
}
