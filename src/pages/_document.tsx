import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            <link rel="canonical" href="https://moderedom.com"/>
            <meta name="description"
                  content="Add @moderedom_bot to a chat or message it directly. Each sent file is analyzed with the latest ClamAV malware databases."/>
            <meta name="image" content="/assets/images/logo_in_work.png"/>
            <meta property="og:title" content="Anti-virus bot for your Telegram conversations"/>
            <meta property="og:description"
                  content="Add @moderedom_bot to a chat or message it directly. Each sent file is analyzed with the latest ClamAV malware databases."/>
            <meta property="og:image" content="/assets/images/logo_in_work.png"/>
            <meta property="og:url" content="https://moderedom.com"/>
            <meta property="og:type" content="website"/>
            <meta property="og:site_name" content="Moderedom"/>
            <meta name="twitter:card" content="/assets/images/preview.png"/>
            <meta name="twitter:title" content="Anti-virus bot for your Telegram conversations"/>
            <meta name="twitter:description"
                  content="Add @moderedom_bot to your chat or communicate with it directly. Each sent file will be analysed in ClamAV antivirus and searched against known malware databases."/>
            <meta name="twitter:image" content="/assets/images/preview.png"/>
            <meta name="twitter:site" content="https://moderedom.com"/>

        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
    </Html>
  );
}
