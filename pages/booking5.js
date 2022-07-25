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
        <h1>Booking Summary</h1>
        It will be made when we have js variables and backend pls dont screw me
        thanks
      </div>

      <div>
        <div className="bookingcard">Booking Summary </div>

        <Link href="/booking6">
          <button type="button">Proceed to Payment</button>
        </Link>
      </div>
    </Layout>
  );
}
