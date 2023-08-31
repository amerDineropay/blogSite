import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en-US">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico?v=2" />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
            app_id: "ff5sezsv",
          };
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              var w = window;
              var ic = w.Intercom;
              if (typeof ic === "function") {
                ic("reattach_activator");
                ic("update", w.intercomSettings);
              } else {
                var d = document;
                var i = function () {
                  i.c(arguments);
                };
                i.q = [];
                i.c = function (args) {
                  i.q.push(args);
                };
                w.Intercom = i;
                var l = function () {
                  var s = d.createElement("script");
                  s.type = "text/javascript";
                  s.async = true;
                  s.src = "https://widget.intercom.io/widget/ff5sezsv";
                  var x = d.getElementsByTagName("script")[0];
                  x.parentNode.insertBefore(s, x);
                };
                if (document.readyState === "complete") {
                  l();
                } else if (w.attachEvent) {
                  w.attachEvent("onload", l);
                } else {
                  w.addEventListener("load", l, false);
                }
              }
            })();
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
