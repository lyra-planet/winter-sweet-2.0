import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import { StoreProvider } from '../store'
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider initialValue={{ author: {},accessToken: {data:''} }}>
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Clone and deploy your own Next.js portfolio in minutes."
          />
          <title>My awesome blog</title>
        </Head>
        <main className="h-screen w-screen overflow-hidden font-lyra
        border-red-500 
            border-[0.5rem]
            sm:border-[0.8rem]
            md:border-[0.4rem] ">
        <Component {...pageProps} />
        </main>
    </Auth0Provider>
    </StoreProvider>
  );
}

