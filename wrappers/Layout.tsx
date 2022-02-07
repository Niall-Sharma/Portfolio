import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/footer'

type Props = {
  children?: ReactNode
  title?: string
}

//Basic layout for most pages
const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{"NS - " + title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    {/* Tied to styles in index.css needed to keep footer at bottom of page */}
      <body>
          <main> 
            {children}
          </main>
          <Footer />
      </body>
  </>
)

export default Layout
