import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Booking() {
  return (
    <Layout>
      <Head>
        <title>Booking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Generated tickets successfully</h2>
        <img
          src="https://toppng.com/check-mark-png-PNG-free-PNG-Images_123859"
          alt="tick"
        />
      </main>
    </Layout>
  );
}
