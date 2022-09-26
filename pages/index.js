import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google clon</title>
        <meta
          name="description"
          content="A google clon for my personal portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
}
