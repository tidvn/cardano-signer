import '@/styles/globals.css'
import { MeshProvider } from '@meshsdk/react';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div  className="container mx-auto">
    <MeshProvider>
      <Component {...pageProps} />
    </MeshProvider>
    </div>
  );
}
