import Layout from "../components/layout";
import Head from "next/head";

export default function Marketplace() {
  return (
    <Layout>
      <Head>
        <title>Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Marketplace</h1>
        <p className="description">
          Get started by selecting your favorite show!
        </p>

        <div className="container1">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/8/84/Moonlight_%282016_film%29.png"
            alt="moon-light-movie"
            class="image"
          />
          <div class="overlay">
            <div class="text">
              <main>Moonlight(PG18)</main>
              <p class="box">Seats available</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
