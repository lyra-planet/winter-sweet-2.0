import '../styles/global.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import StoreProviderComp from '../components/_storeProvider'
import { StoreProvider } from '../store';
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
          <title>Lyra.Planet</title>
        </Head>
        <main className="h-screen w-screen overflow-hidden font-lyra
          p-0
        border-red-500
           border-[0.8rem]
          md:border-[0.5rem] 
          lg:border-[0.8rem]
          2xl:border-[1rem]">
          <StoreProviderComp pageProps={pageProps} Component={Component}/>
        </main>
    </Auth0Provider>
    </StoreProvider>
  );
}
