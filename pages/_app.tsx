import type { AppProps } from 'next/app'
import 'antd/dist/reset.css'
import 'animate.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
