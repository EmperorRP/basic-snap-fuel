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
        <h1>NFT Marketplace</h1>
        <p className="description">Select an NFT to purchase</p>

        <img src="/images/nfticket2.png" alt="thor-movie" />
        <p className="description">CLICK MOONLIGHT ONLY THOR DOESNT WORK</p>

        <Link href="/NFT2">
          <img src="/images/nfticket.png" alt="Moonlight Ticket NFT" />
        </Link>
      </main>
    </Layout>
  );
}
