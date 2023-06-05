import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { RecoilRoot } from 'recoil'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  dayjs.locale('ja')

  // useEffect
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return (
    <>
      <Head>
        <title></title>
      </Head>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
