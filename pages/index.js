import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>学生をやりながらWeb屋で働いているニッシー☆です。</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか？
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
