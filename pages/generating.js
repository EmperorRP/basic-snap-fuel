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
        <h3>Generate Tickets</h3>
        <p className="description">
          Event Name:<input type="text"></input>
        </p>

        <p className="description">
          Length of event: <input type="number" size="1"></input> hr{" "}
          <input type="number" size="1"></input> min
        </p>

        <p className="description">
          Event Organizer: {"  "}
          <input type="text"></input>
        </p>

        <p className="description">Description of the show</p>
        <input type="text"></input>

        <p className="description">Event Type</p>
        <select name="cars" id="cars">
          <option value="movie">movie</option>
          <option value="concert">Concert</option>
          <option value="meetup">Meet-Up</option>
        </select>

        <p className="description">
          Dates: from:
          <input type="date"></input> to:
          <input type="date"></input>
        </p>

        <p className="description">
          Timings:<input type="text"></input>
        </p>

        <p className="description">
          Ticket Supply:
          <input type="number"></input>
        </p>

        <p className="description">
          Permission to allow people to trade their tickets:
          <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
          </label>
        </p>

        <p className="description">
          Visibility of the event in the marketplace:
          <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
          </label>
        </p>

        <p className="description">Payment</p>
        <select name="cars" id="cars">
          <option value="movie">Bitcoin</option>
          <option value="concert">Snap Token</option>
          <option value="meetup">Stripe</option>
        </select>

        <p className="description">
          Price per ticket:
          <input type="number"></input>
        </p>

        <Link href="/generating2">
          <button type="button">CREATE</button>
        </Link>
        <img
          src="https://toppng.com/check-mark-png-PNG-free-PNG-Images_123859"
          alt="tick"
        />
      </main>
    </Layout>
  );
}
