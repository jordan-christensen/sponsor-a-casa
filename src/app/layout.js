import './globals.css';
import { bebas_neue, inter, chlakh_demo } from './fonts';
// Components
import { Header } from '@/components';
import styles from './layout.module.css';

export const metadata = {
  title: 'Sponsor A Casa | Spark of Hope',
  description: 'Sponsor a house for a family in need.',
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();
  console.log(year)

  return (
    <html
      lang="en"
      className={`${bebas_neue.variable} ${inter.variable} ${chlakh_demo.variable}`}
    >
      <body>
        <div className={styles.body}>
          <div>
            <Header />
            <main className={styles.main}>{children}</main>
          </div>
          <footer className={styles.footer}>
          {`© ${year} Spark of Hope Foundation`}
          </footer>
        </div>
      </body>
    </html>
  );
}
