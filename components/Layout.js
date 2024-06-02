import Head from 'next/head';
import Link from 'next/link';
import styles from './Layout.module.css';
import utilStyles from '../styles/utils.module.css';
const name = 'Shin Code';
import Image from 'next/image';

export const siteTitle = 'Next.js ブログ';



const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
              width={100}
              height={100}
              src="/images/profile.png"
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
          <Image
              className={`${utilStyles.borderCircle}`}
              width={100}
              height={100}
              src="/images/profile.png"
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <>
            <Link href="/">ホームへ戻る</Link>
        </>
      )}
    </div>
  );
};

export default Layout;


