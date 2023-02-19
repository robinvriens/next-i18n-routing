import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';

import Layout from '@/components/Layout';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
