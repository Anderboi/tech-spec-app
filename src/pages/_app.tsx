import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Layout from '../components/layout'
import {ThemeProvider} from 'next-themes'

export default function App({Component, pageProps}: AppProps) {

  return (
    <ThemeProvider
        enableSystem
        themes={['light', 'dark']}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
