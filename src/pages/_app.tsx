import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { BLOG_COMPONENTS } from '@/components/atoms/blog_components/BlogComponents'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={BLOG_COMPONENTS}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp