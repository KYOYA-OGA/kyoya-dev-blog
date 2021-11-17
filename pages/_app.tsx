import '@/css/tailwind.css'
import '@/css/prism.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

// import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
// import { ClientReload } from '@/components/ClientReload'
import { GoogleAnalytics, usePageView } from '@/lib/gtag'

// const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'

export default function App({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* {isDevelopment && <ClientReload />} */}
      {isProduction && <GoogleAnalytics />}
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        language="ja"
      >
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </GoogleReCaptchaProvider>
    </ThemeProvider>
  )
}
