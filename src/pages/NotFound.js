import React from "react";
import { LocaleConsumer } from "../context/LocaleContext";
import { notFound } from "../utils/content";

export default function NotFound() {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="not-found-container">
            <h1>404</h1>
            <p>{notFound[locale].text}</p>
          </section>
        );
      }}
    </LocaleConsumer>
  );
}
