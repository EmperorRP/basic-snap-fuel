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
        <img src="/images/nfticket.png" alt="Moonlight Ticket NFT" />
        <p className="description">
          by A24 Production - Chiron, a young African-American boy, finds
          guidance in Juan, a drug dealer, who teaches him to carve his own
          path. As he grows up in Miami, Juan's advice leaves a lasting
          impression on him.
        </p>

        <h1>31.99 ETH</h1>
        <h3>Details</h3>
        <p>
          {" "}
          <b>Address:</b> 0x33c6eec1029b12c46732f7ab41398de45641fa42 <br />
          <b>Token-ID:</b>
          1221 <br />
          <b>Token Standard:</b> ERC-721 <br />
          <b>Blockchain:</b> Ethereum
          <br />
          <b>Creator Fees:</b> 4%
          <br />
        </p>

        <Link href="/NFT3">
          <button type="button">BUY NOW</button>
        </Link>
      </main>
    </Layout>
  );
}
