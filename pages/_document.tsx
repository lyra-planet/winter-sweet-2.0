import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white  antialiased selection:text-white selection:bg-red-500">
        
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
