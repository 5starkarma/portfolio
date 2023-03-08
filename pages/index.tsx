import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>David Alford | Software Engineer</title>
        <meta name="description" content="Software Engineer from Fresno, CA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>David Alford</h1>
          <div>
            <a
              href="https://github.com/5starkarma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Software Engineer
            </a>
          </div>
        </div>

        <div className={styles.center}></div>
      </main>
    </>
  );
}
