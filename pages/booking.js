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
        <h1>Booking</h1>
        <p className="description">
          Get started by selecting your favorite show!
        </p>

        <div className="container1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/84/Moonlight_%282016_film%29.png"
            alt="moon-light-movie"
            class="image"
          />

          <Link href="/booking2">
            <div class="overlay">
              <div class="text">
                <main>Moonlight(PG18)</main>
                <p class="box">Seats available</p>
              </div>
            </div>
          </Link>
        </div>
        <h1></h1>
        <Link href="/generating">
          <button type="button">Generate Tix</button>
        </Link>
      </main>
    </Layout>
  );
}
