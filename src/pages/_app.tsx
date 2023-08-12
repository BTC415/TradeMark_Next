import React from 'react'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import '@/styles/globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import 'semantic-ui-css/semantic.min.css'
import MySVG from '@/components/svg'
export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  user?: string
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  const title = `Invest Farm`

  const description = 'Invest farm'

  const imageWidth = '1920'

  const imageHeight = '960'
  return (
    <>
      {
        getLayout(
          (<>
            <Head>
              <meta name="description" content={description} />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />

              {/* <meta property="og:url" content={url} /> */}
              <meta property="og:site_name" content="Invest farm" />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              {/* <meta property="og:image" content={image} /> */}
              <meta property="og:image:type" content="image/png" />
              <meta property="og:image:width" content={imageWidth} />
              <meta property="og:image:height" content={imageHeight} />

              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={title} />
              <meta property="twitter:description" content={description} />
              {/* <meta property="twitter:image:src" content={image} /> */}
              <meta property="twitter:image:width" content={imageWidth} />
              <meta property="twitter:image:height" content={imageHeight} />
              <title> Invest Farm </title>
              <link rel="icon" href="/trademarktoday.ico" />
            </Head>
            <MySVG/>
            <Component {...pageProps} />
          </>)
        )
      }
    </>
  )
}
export default MyApp
