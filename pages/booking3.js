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
        <h1>Booking - Pick number of seats</h1>
      </div>

      <div>
        <div class="quantity">
          <a href="#" class="quantity__minus">
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            class="quantity__input"
            value="1"
          ></input>
          <a href="#" class="quantity__plus">
            <span>+</span>
          </a>
        </div>
        <Link href="/booking4">
          <button type="button">next page</button>
        </Link>
      </div>
    </Layout>
  );
}
