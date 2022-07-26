import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Booking() {
  return (
    <Layout>
      <Head>
        <title>NFT Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Moonlight</h1>
        <img src="/images/metamaskConnect.png" alt="Moonlight Ticket NFT" />

        <Link href="/NFT3">
          <button type="button">CONNECT WALLET</button>
        </Link>
      </main>
    </Layout>
  );
}
