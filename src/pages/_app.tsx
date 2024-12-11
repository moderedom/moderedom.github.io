import "@/styles/globals.css";
import Layout from '@/components/layout'
import type { AppProps } from "next/app";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

//  Disable auto-adding the font awesome CSS since we will provide it ourselves
config.autoAddCss = false;


export default function ModeredomApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}

