import './globals.css';
import { bebas_neue, libre_baskerville, chlakh_demo } from './fonts';
// Components
import { Header } from '@/components';
import styles from './layout.module.css';

export const metadata = {
  title: 'Sponsor A Casa | Spark of Hope',
  description: 'Sponsor a house for a family in need.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebas_neue.variable} ${libre_baskerville.variable} ${chlakh_demo.variable}`}
    >
      <body>
        <div>
          <Header />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
