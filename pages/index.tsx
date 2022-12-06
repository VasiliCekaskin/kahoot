import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kahoot clone</title>
        <meta name="description" content="Kahoot clone" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Kahoot clone</h1>

        <form className={styles.main} action="/api/enter" method="POST">
          <label className="" htmlFor="userName">
            Name
          </label>
          <input type="text" name="userName" id="userName" />
          <input type="submit" name="submit" id="submit" value="Beitreten" />
        </form>
      </main>

      <footer className={styles.footer}>
        <a
          href="mailto: vasili.cekaskin@proton.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          vasili.cekaskin@proton.me
        </a>
      </footer>
    </div>
  );
}
