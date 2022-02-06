import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/footer'
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <body>
          <main>
            {children}
          </main>
          <Footer />
      </body>
  </>
)

export default Layout