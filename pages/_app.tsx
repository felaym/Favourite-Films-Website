import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import { Toaster } from 'react-hot-toast';

import Appbar from '../components/Appbar';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Appbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}
