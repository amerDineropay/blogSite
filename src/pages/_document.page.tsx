import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MRC2Y6FF65"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
            dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'G-MRC2Y6FF65');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
