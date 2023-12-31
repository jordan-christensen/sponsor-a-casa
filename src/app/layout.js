import "./globals.css";
import { bebas_neue, inter, chlakh_demo } from "./fonts";
// Components
import { Header } from "@/components";
import logo from "@/images/spark-of-hope-logo.png";
import styles from "./layout.module.css";

export const metadata = {
  title: "Sponsor A Casa | Spark of Hope",
  description: "Sponsor a house for a family in need.",
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

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
            <img
              className={styles.logo}
              src={logo.src}
              alt="Spark of Hope Foundation"
            />
            <div className={styles.text}>
              Many thanks to the generous contribution of time and talents from
              Jordan Christensen, Kevin Lindholm and Ali Khan. You are masters
              at what you do. Thank you for your support of this website.
            </div>
            <div
              className={styles.text}
            >{`© ${year} Spark of Hope Foundation`}</div>
            <div className={styles.version}>v1.1.9</div>
          </footer>
        </div>
      </body>
    </html>
  );
}
