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
      <body className='flex flex-col min-h-screen'>
        <div className='container mx-auto mt-24'>
          {children}
        </div>
        <Footer />
      </body>
  </>
)

export default Layout
