import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import './utils/globals.css';
import '@contentful/live-preview/style.css';
import { useRouter } from 'next/router';
import { Layout } from '@src/components/templates/layout';
import { useEffect } from 'react';

const autoPro = localFont({
  src: [
    {
      path: '../../public/assets/fonts/auto_black/auto_black.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/auto_regular/auto_regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
// const arabicFont = localFont({});
const App = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);
  return (
    <ContentfulLivePreviewProvider
      enableInspectorMode={pageProps.previewActive}
      enableLiveUpdates={pageProps.previewActive}
      locale={locale || 'en-US'}>
      <>
        <main
          style={{ display: 'flex', flexDirection: 'column' }}
          className={`${autoPro.className}`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
        <div id="portal" className={`${autoPro.className}`} />
      </>
    </ContentfulLivePreviewProvider>
  );
};

export default appWithTranslation(App);
