import Link from "next/link";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Layout from "../components/layout";

export default function FirstPost() {
  const [value, onChange] = useState(new Date());
  return (
    <Layout>
      <div>
        <h1>Booking - Choose Date</h1>
        <Calendar onChange={onChange} value={value} />
      </div>

      <div>
        <div className="bookingcard">
          Varun Inox{" "}
          <Link href="/booking3">
            <button type="button">9:00pm</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
