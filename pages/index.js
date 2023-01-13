import Head from "next/head";
// import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section>
          <p>Welcome to my page !</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>

        <section className="py-5">
        <h2 className="text-3xl mb-3 font-bold">Blog</h2>
        <ul className="flex flex-col gap-3">
          {allPostsData.map(({ id, date, title }) => (
            <li className="text-xl" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br></br>
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
      </Layout>
    </div>
  );
}
